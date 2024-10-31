import { fetchPropertyReviews } from '@/utils/actions';
import Title from '@/components/properties/Title';

import ReviewCard from './ReviewCard';

async function PropertyReviews({ propertyId }: { propertyId: string }) {
  const reviews = await fetchPropertyReviews(propertyId)
  if(reviews.length < 1) {
    return null
  }
  return (
    <div className='mt-8' >
      <Title text='Reviews' />
      <div className="flex  items-center md:flex-row flex-col gap-4 ">
        {reviews.map( (rev) => {
          const {comment, rating} = rev
          const {firstName, profileImage} = rev.profile
          const revInfo = {
            comment, rating, name:firstName, image:profileImage
          }
          return <ReviewCard key={rev.id} reviewInfo={revInfo} />
        } )}
      </div>
    </div>
  )
}

export default PropertyReviews