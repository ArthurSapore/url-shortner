import { Button } from '@/zenith-ui/components/ui/button'
import { PauseIcon, PlayIcon } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { a } from '../constants'
import { useAnimatedText } from '../hooks/useAnimatedText'

export function AnimatedText(): JSX.Element {
   const [text, setText] = useState('')
   const [play, setPlay] = useState(false)

   const animatedText = useAnimatedText({
      text: text,
      splitBy: 'word'
   })

   const textContainerRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      if (textContainerRef.current) {
         textContainerRef.current.scrollTop = textContainerRef.current.scrollHeight
      }
   }, [animatedText])

   function handleClick() {
      if (play) {
         setPlay(false)
         return
      }

      setText(a)
      setPlay(true)
   }

   if (animatedText.length === a.length && play) {
      setPlay(false)
   }

   return (
      <div className="flex flex-col gap-4">
         <div
            ref={textContainerRef}
            className="border-1 shadow-[rgba(255, 255, 255, 0.3)] h-[35rem] w-96 overflow-auto rounded-md border-[#5B625F] bg-[#212225] px-6 py-3 shadow-md"
         >
            <p className="text-md whitespace-pre-wrap font-normal italic text-[#B0B4BA]">
               {animatedText}
            </p>
         </div>
         <div className="flex gap-1">
            <Button
               className="flex w-fit cursor-pointer gap-1 bg-[#212225] text-[#EDEEF0] hover:bg-[#2E3135] active:bg-[#272A2D]"
               onClick={handleClick}
            >
               {play ? (
                  <>
                     <PauseIcon className="h-4 w-4" /> Pause
                  </>
               ) : (
                  <>
                     <PlayIcon className="h-4 w-4" /> Play
                  </>
               )}
            </Button>
         </div>
      </div>
   )
}
