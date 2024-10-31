import FormContainer from '@/components/form/FormContainer';
import { updateProfileAction, fetchProfile, updateProfileImageAction } from '@/utils/actions';
import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/Buttons';
import ImageInputContainer from '@/components/form/ImageInputContainer';
async function ProfilePage() {
  const profile = await fetchProfile()
    return    <section>
    <h1 className="text-xl font-semibold capitalize mb-8  "> new user </h1>
    <div className="border p-8 rounded-md  ">
      <ImageInputContainer text='updated image' image={profile.profileImage} name={profile.username} action={updateProfileImageAction} />
        <FormContainer action={updateProfileAction}>
          <div className="grid md:grid-cols-2 gap-4">

  <FormInput type='text' name='firstName' label='first Name' defaultValue={profile.firstName} />
  <FormInput type='text' name='lastName' label='last Name' defaultValue={profile.lastName} />
  <FormInput type='text' name='username' label='user name' defaultValue={profile.username} />

          </div>
  <SubmitButton  text='Update Profile' className='mt-8' />
        </FormContainer>
    </div>
</section>;
  }
  export default ProfilePage;