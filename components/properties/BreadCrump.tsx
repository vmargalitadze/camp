import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from '@/components/ui/breadcrumb';


  import React from 'react'
  
  function BreadCrump({name} :{name:string}) {
    return (
      <Breadcrumb  > 
       <BreadcrumbList>
      <BreadcrumbItem>
      <BreadcrumbLink href='/' >Home </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbSeparator />

      <BreadcrumbItem>
      <BreadcrumbPage>

      {name}

      </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList> 
    </Breadcrumb>
    )
  }
  
  export default BreadCrump