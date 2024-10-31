'use client';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '../ui/button';
import { LuShare2 } from 'react-icons/lu';

import {
  TwitterShareButton,
    FacebookShareButton,
  LinkedinShareButton,
  TwitterIcon,
 
  LinkedinIcon,
  FacebookIcon
} from 'react-share';

function ShareButton({
    propertyId,
    name,
  }: {
    propertyId: string;
    name: string;
  }) {

    const url =process.env.NEXT_PUBLIC_WEBSITE_URL
    const shareLink = `${url}/properties/${propertyId}`
  return (
    <Popover>
        <PopoverTrigger asChild >
        <Button variant='outline' size='icon' className='p-2 ' > <LuShare2 />  </Button>

        </PopoverTrigger>

        <PopoverContent className='flex items-center justify-center w-full gap-x-2' side='top' align='end' sideOffset={10} >
        <TwitterShareButton url={shareLink} title={name}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={shareLink} title={name}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
       <FacebookShareButton url={shareLink} title={name}>
    <FacebookIcon size={32} round  />
       </FacebookShareButton>
        </PopoverContent>
    </Popover>
  )
}

export default ShareButton