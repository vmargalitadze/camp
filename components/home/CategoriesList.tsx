import { categories } from '@/utils/categories';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link';

function CategoriesList({search, category}:{category?:string, search?:string}) {
  const searchTerm = search? `&search=${search}` : ''
  
    
  return (
    <>
    <Carousel className="w-full flex justify-center">
  <CarouselContent>
    {categories.map((item, index) => {
      const isActive = item.label === category;
      return (

      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-0">
            <Link
               
               href={`/?category=${item.label}${searchTerm}`}
             >
               <article
                 className={`p-3 flex flex-col items-center cursor-pointer duration-300  hover:text-primary w-[100px] ${
                   isActive ? 'text-primary' : ''
                 }`}
               >
                 
                 <item.icon className='w-8 h-8 ' />
                 <p className='capitalize text-sm mt-1'>{item.label}</p>
               </article>
             </Link>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
      )
    })}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    {/* <section> 
      <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
        <CarouselContent className="-ml-4">

    <div className="flex  gap-x-2">
    {categories.map((item) => {
            const isActive = item.label === category;
            return (
              <CarouselItem  key={item.label} className="pl-4">

              <Link
               
                href={`/?category=${item.label}${searchTerm}`}
              >
                <article
                  className={`p-3 flex flex-col items-center cursor-pointer duration-300  hover:text-primary w-[100px] ${
                    isActive ? 'text-primary' : ''
                  }`}
                >
                  
                  <item.icon className='w-8 h-8 ' />
                  <p className='capitalize text-sm mt-1'>{item.label}</p>
                </article>
              </Link>

              </CarouselItem>
            );
          })}
    </div>

        </CarouselContent>
      </Carousel>

    </section> */}
    
    </>
  )
}

export default CategoriesList