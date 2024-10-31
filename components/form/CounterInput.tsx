'use client';
import { Card, CardHeader } from '@/components/ui/card';
import { LuMinus, LuPlus } from 'react-icons/lu';

import { Button } from '../ui/button';
import { useState } from 'react';

function CounterInput({
    detail,
    defaultValue,
  }: {
    detail: string;
    defaultValue?: number;
  }) {
      const [count, setCount] = useState( defaultValue || 0 )

      const plus = () => {
        setCount( (prev) => prev + 1 )
      }

      const minus = () => {
        setCount( (prev) => {
            if( prev  > 0) {
                return prev - 1
            }
            return prev
        }
      
        )


      }
  return (
    <Card className='mb-4' >  
    <input type='hidden' name={detail} value={count} />
<CardHeader className='flex flex-col gap-y-5'>
        <div className='flex items-center justify-between flex-wrap'>
          <div className='flex flex-col'>
            <h2 className='font-medium capitalize'>{detail}</h2>
            <p className='text-muted-foreground text-sm'>
              Specify the number of {detail}
            </p>
          </div>
          <div className='flex items-center gap-4'>
            <Button
              variant='outline'
              size='icon'
              type='button'
              onClick={minus}
            >
              <LuMinus className='w-5 h-5 text-primary' />
            </Button>
            <span className='text-xl font-bold w-5 text-center'>{count}</span>
            <Button
              variant='outline'
              size='icon'
              type='button'
              onClick={plus}
            >
              <LuPlus className='w-5 h-5 text-primary' />
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  )
}

export default CounterInput