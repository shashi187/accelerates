"use client"

import { useEffect, useState } from "react"
import { animate, motion, useMotionValue, useTransform } from "motion/react"

export interface ITypewriterProps {
  delay: number
  texts: string[]
  baseText?: string
}

export function Typewriter({ delay, texts, baseText = "" }: ITypewriterProps) {
  const [animationComplete, setAnimationComplete] = useState(false)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  )

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay,
      duration: 1,
      ease: "easeInOut",
      onComplete: () => setAnimationComplete(true),
    })
    return () => {
      controls.stop && controls.stop()
    }
  }, [count, baseText.length, delay])

  return (
    <span>
      <motion.span>{displayText}</motion.span>
      {animationComplete && (
        <RepeatedTextAnimation texts={texts} delay={delay + 1} />
      )}
      <BlinkingCursor />
    </span>
  )
}

export interface IRepeatedTextAnimationProps {
  delay: number
  texts: string[]
}

const defaultTexts = [
  "Portfolio Website Design Agency",
  "Ecommerce Website Development Company",
  "Landing Page Design Agency",
  "Custom Next.js & React Development Company",
]
function RepeatedTextAnimation({
  delay,
  texts = defaultTexts,
}: IRepeatedTextAnimationProps) {
  const textIndex = useMotionValue(0)

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "")
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  )
  const updatedThisRound = useMotionValue(true)

  useEffect(() => {
    const animation = animate(count, 60, {
      type: "tween",
      delay,
      duration: 2,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() && latest > 0) {
          updatedThisRound.set(false)
        } else if (!updatedThisRound.get() && latest === 0) {
          textIndex.set((textIndex.get() + 1) % texts.length)
          updatedThisRound.set(true)
        }
      },
    })
    return () => {
      animation.stop && animation.stop()
    }
  }, [count, delay, textIndex, texts, updatedThisRound])

  return <motion.span className="inline">{displayText}</motion.span>
}

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear" as const,
      times: [0, 0.5, 0.5, 1],
    },
  },
}

function BlinkingCursor() {
  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-5 w-[1px] translate-y-1 bg-neutral-900"
    />
  )
}
