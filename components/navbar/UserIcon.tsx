import React from 'react'
import { LuUser2 } from 'react-icons/lu'
import { fetchProfileImage } from '@/utils/actions'
async function UserIcon() {
  const profileImage = await fetchProfileImage()
  if(profileImage) {
    return <img src={profileImage} alt='img' className='w-6 h-6 rounded-full' />
  }
  return (
   <LuUser2 className='w-6 h-6 bg-primary rounded-full text-white ' />
  )
}

export default UserIcon