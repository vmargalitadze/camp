import { Button } from '../ui/button';
import Link from 'next/link';

function EmptyList({ heading='No items in the list.', message='Keep exploring properties ', btnText='Back home'  }:{heading?:string, message?:string, btnText?:string}  ) {
  return (
    <div  className='mt-4' >
      <h2 className="text-xl font-bold"> {heading} </h2>
      <p className="text-lg"> {message} </p>
      <Button asChild className='mt-4 capitalize' > 
        <Link href='/' > {btnText} </Link>
         </Button>

    </div>
  )
}

export default EmptyList