import { useEffect, useState } from 'react'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export default function useTypewriter(lines, opts = {}) {
  const { speed = 24, startDelay = 250, lineDelay = 220 } = opts
  const [typed, setTyped] = useState([])
  const [active, setActive] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      setTyped(lines)
      setActive('')
      setDone(true)
      return
    }

    let cancelled = false
    ;(async () => {
      await sleep(startDelay)
      setTyped([])
      setActive('')
      setDone(false)
      for (const line of lines) {
        if (cancelled) return
        for (let i = 1; i <= line.text.length; i++) {
          if (cancelled) return
          setActive(line.pre + line.text.slice(0, i))
          await sleep(speed)
        }
        setActive('')
        setTyped((prev) => [...prev, line])
        await sleep(lineDelay)
      }
      if (!cancelled) setDone(true)
    })()

    return () => {
      cancelled = true
    }
  }, [lines, speed, startDelay, lineDelay])

  return { typed, active, done }
}
