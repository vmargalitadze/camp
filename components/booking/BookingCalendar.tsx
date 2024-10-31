'use client';
import { Calendar } from '@/components/ui/calendar';
import { useEffect, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { DateRange } from 'react-day-picker';
import { useProperty } from '@/utils/store';

import {
  generateDisabledDates,
  generateDateRange,
  defaultSelected,
  generateBlockedPeriods,
} from '@/utils/calendar';

function BookingCalendar() {
  const curentDate = new Date()
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)
  const bookings = useProperty( (state) => state.bookings )
  const blocked = generateBlockedPeriods({ bookings,today:curentDate})
  const {toast} = useToast()
  const unavaliableDates = generateDisabledDates(blocked)

  useEffect( ()=> {
    const selectedRange = generateDateRange(range)
    const isDisableDaysIncluded = selectedRange.some( (date) => {
      if( unavaliableDates[date] ) {
        setRange(defaultSelected)
        toast({
          description:'Some dates are booked, please select again'
        })
        return true
      }
      return false
    } )
    useProperty.setState({range})
  }, [range] )


  return (
    <Calendar
    mode='range'
    defaultMonth={curentDate}
    selected={range}
    onSelect={setRange}
    className='mb-4'
    disabled={blocked}
  />
    
  )
}

export default BookingCalendar