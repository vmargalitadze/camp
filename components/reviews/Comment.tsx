"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';

function Comment({ comment }: { comment: string }) {
  const [isExpended, setIsExpended] = useState(false)
  const toggle = () => {
    setIsExpended(!isExpended)
  }
  const longComment = comment.length > 130
  const showComment = longComment && !isExpended ? `${comment.slice(0, 130)}...` : comment
  return (
    <>
    <p className="text-sm"> {showComment} </p>
    {longComment && <Button variant='link' className='pl-0 text-muted-foreground' onClick={toggle} >  
      {isExpended?  'Show less' : 'Show more'}
      </Button>}
    
    </>
  )
}

export default Comment