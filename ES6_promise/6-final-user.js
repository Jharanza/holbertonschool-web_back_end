import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userData = { status: 'pending', value: '' };
  const photoData = { status: 'pending', value: '' };

  try {
    const signuser = await signUpUser(firstName, lastName);
    userData.status = 'fulfilled';
    userData.value = signuser;
  } catch (error) {
    userData.status = 'rejected';
    userData.value = error.toString();
  }
  try {
    const uploadphoto = await uploadPhoto(fileName);
    photoData.status = 'fulfilled';
    photoData.value = uploadphoto;
  } catch (error) {
    photoData.status = 'rejected';
    photoData.value = error.toString();
  }
  return [userData, photoData];
}
