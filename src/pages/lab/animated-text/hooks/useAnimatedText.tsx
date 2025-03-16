import { animate, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

type UseAmimatedTextTP = {
   text: string
   splitBy: 'word' | 'letter'
}

export function useAnimatedText({ text, splitBy }: UseAmimatedTextTP) {
   const [cursor, setCursor] = useState(0)
   const [prevText, setPrevText] = useState(text)
   const [isSameText, setIsSameText] = useState(true)
   const animatedCursor = useMotionValue(0)

   const characterToSplit = splitBy === 'word' ? ' ' : ''

   if (prevText !== text) {
      setPrevText(text)
      setIsSameText(text.startsWith(prevText))

      if (!text.startsWith(prevText)) setCursor(0)
   }

   useEffect(() => {
      if (!isSameText) {
         animatedCursor.jump(0)
      }

      const controls = animate(animatedCursor, text.split(characterToSplit).length, {
         duration: 12,
         ease: 'easeInOut',
         delay: 0,
         onUpdate: (latest) => {
            setCursor(Math.floor(latest))
         }
      })

      return () => controls.stop()
   }, [animatedCursor, isSameText, text, characterToSplit])

   return text.split(characterToSplit).slice(0, cursor).join(characterToSplit)
}
