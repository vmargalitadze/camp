import EmptyList from '@/components/home/EmptyList';
import {
  deleteReviewAction,
  fetchPropertyReviewsByUser,
} from '@/utils/actions';
import ReviewCard from '@/components/reviews/ReviewCard';
import Title from '@/components/properties/Title';
import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';
async function ReviewsPage() {
  const reviews = await fetchPropertyReviewsByUser();
  if (reviews.length === 0) return <EmptyList />;
    return <>
    <Title  text='Your Reviews' />
    <section className="grid md:grid-cols-2 gap-4 mt-4 ">
  {reviews.map( (rev) => {
      const {comment, rating} = rev
      const {name, image} = rev.property
      const revievInfo = {
        comment, rating, name, image
      }
    return <ReviewCard reviewInfo={revievInfo} key={rev.id} >
   <DeleteReview reviewId={rev.id} />
      </ReviewCard>
  } )}

    </section>
    </>
  }

  const DeleteReview = ({ reviewId }: { reviewId: string }) => {
    const deleteReview = deleteReviewAction.bind(null, { reviewId });
    return (
      <FormContainer action={deleteReview}>
        <IconButton actionType='delete' />
      </FormContainer>
    );
  };

  export default ReviewsPage;