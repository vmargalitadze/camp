
import {
    fetchRentalDetails,
    updatePropertyImageAction,
    updatePropertyAction,
  } from '@/utils/actions';
  import FormContainer from '@/components/form/FormContainer';
  import FormInput from '@/components/form/FormInput';
  import CategoryInput from '@/components/form/CategoryInput';
  import PriceInput from '@/components/form/PriceInput';
  import TextArea from '@/components/form/TextArea';

  import CounterInput from '@/components/form/CounterInput';
  import AmenitiesInput from '@/components/form/AmenitiesInput';
  import { SubmitButton } from '@/components/form/Buttons';
  import { redirect } from 'next/navigation';
  import { type Amenity } from '@/utils/amenities';
  import ImageInputContainer from '@/components/form/ImageInputContainer';

  async function RentalsEdit({ params }: { params: { id: string } }) {
    const property = await fetchRentalDetails(params.id)
    if(!property) redirect('/')
        const defaultAmenities: Amenity[] = JSON.parse(property.amenities);
  return (
    <section>
        <h1 className="text-2xl font-semibold mb-8 capitalize">Edit Property </h1>
        <div className="border p-8 rounded-md">
        <ImageInputContainer image={property.image} name={property.name} text='Update image' action={updatePropertyImageAction} >
        <input type='hidden' name='id' value={property.id} />

            </ImageInputContainer>
            <FormContainer action={updatePropertyAction} >
            <input type='hidden' name='id' value={property.id} />
            <div className="grid md:grid-cols-2 gap-8 mb-4 mt-8 ">
                <FormInput name='name' defaultValue={property.name} type='text'   />
                <FormInput name='tagline'  type='text ' defaultValue={property.tagline}/>
                <PriceInput defaultValue={property.price} />
                <CategoryInput defaultValue={property.category} />
            </div>
            <TextArea defaultValue={property.description} labelText='description' name='description' />
            <h3 className="text-lg mt-8 font-medium  "> Accomodation details </h3> 
            <CounterInput detail='Guests' defaultValue={property.guests} />
            <CounterInput detail='bedrooms' defaultValue={property.bedrooms} />
          <CounterInput detail='beds' defaultValue={property.beds} />
          <CounterInput detail='baths' defaultValue={property.baths} />
          <h3 className='text-lg mt-10 mb-6 font-medium'>Amenities</h3>
          <AmenitiesInput defaultValue={defaultAmenities} />
          <SubmitButton text='edit property' className='mt-12' />
            </FormContainer>
        </div>
    </section>
  )
}

export default RentalsEdit