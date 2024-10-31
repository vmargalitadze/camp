'use client';
import { SignInButton, useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { useProperty } from '@/utils/store';
import FormContainer from '@/components/form/FormContainer';
import { SubmitButton } from '@/components/form/Buttons';
import { createBookingAction } from '@/utils/actions';

function ConfirmBooking() {
  const {userId} = useAuth()
  const {propertyId, range} = useProperty( (state) => state )
  const checkIn = range?.from as Date
  const checkOut = range?.to as Date
  if(!userId) {
    return <SignInButton mode='modal'> <Button className='w-full' type='button'>Sign In</Button> </SignInButton>
  }
  const createBooking = createBookingAction.bind(null, {propertyId, checkIn, checkOut})
  return (
    <FormContainer action={createBooking} >
      <SubmitButton text='Reserve' className='w-full'  />
    </FormContainer>
  )
}

export default ConfirmBooking