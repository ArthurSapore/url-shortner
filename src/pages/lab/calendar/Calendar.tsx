import { Button } from '@/zenith-ui/components/ui/button'
import { cn } from '@/zenith-ui/lib/utils'
import {
   add,
   eachDayOfInterval,
   endOfMonth,
   endOfWeek,
   format,
   getDay,
   getMonth,
   isEqual,
   isSameMonth,
   isToday,
   setMonth,
   startOfMonth,
   startOfToday,
   startOfWeek,
   sub
} from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export function Calendar(): JSX.Element {
   const today = startOfToday()
   const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
   const [selectedDay, setSelectedDay] = useState(today)

   const colStart = [
      'col-start-1',
      'col-start-2',
      'col-start-3',
      'col-start-4',
      'col-start-5',
      'col-start-6',
      'col-start-7'
   ]

   const firstDayOfCurrentMonth = startOfMonth(currentMonth)

   const month = eachDayOfInterval({
      start: firstDayOfCurrentMonth,
      end: endOfMonth(today)
   })

   const fullMonth = eachDayOfInterval({
      start: startOfWeek(firstDayOfCurrentMonth),
      end: endOfWeek(endOfMonth(firstDayOfCurrentMonth))
   })

   function previousMonth(): void {
      setCurrentMonth(format(sub(firstDayOfCurrentMonth, { months: 1 }), 'MMM-yyy'))
   }

   function nextMonth(): void {
      setCurrentMonth(format(add(firstDayOfCurrentMonth, { months: 1 }), 'MMM-yyy'))
   }

   function onClickInDay(day: Date): void {
      if (isSameMonth(day, currentMonth)) {
         setSelectedDay(day)
         return
      }
      setSelectedDay(day)
      setCurrentMonth(format(setMonth(day, getMonth(day)), 'MMM-yyyy'))
   }

   return (
      <div className="w-xl rounded bg-white px-4 py-2">
         <div className="flex items-center justify-between">
            <Button
               variant="ghost"
               size="icon"
               onClick={previousMonth}
            >
               <ChevronLeft />
            </Button>
            <h3 className="text-center font-medium">{currentMonth}</h3>
            <Button
               variant="ghost"
               size="icon"
               onClick={nextMonth}
            >
               <ChevronRight />
            </Button>
         </div>
         <div className="grid grid-cols-7 gap-2 text-center">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
         </div>
         <div className="grid grid-cols-7 gap-2">
            {fullMonth.map((day, index) => (
               <button
                  key={index}
                  onClick={() => onClickInDay(day)}
                  className={cn(
                     'rounded-full',
                     isEqual(selectedDay, today) &&
                        isToday(day) &&
                        'bg-red-500 text-white',
                     isEqual(selectedDay, day) && !isToday(day) && 'bg-black text-white',
                     !isEqual(selectedDay, today) && isToday(day) && 'text-red-500'
                  )}
               >
                  <time
                     dateTime={format(day, 'yyy-MM-dd')}
                     className={cn(
                        'rounded-full text-center',
                        !isSameMonth(day, firstDayOfCurrentMonth) && 'text-gray-400',

                        index === 0 && colStart[getDay(day)]
                     )}
                  >
                     {format(day, 'd')}
                  </time>
               </button>
            ))}
         </div>
      </div>
   )
}
