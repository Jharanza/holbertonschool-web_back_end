import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    // Execute both promises concurrently and await their results
    const [photoData, userData] = await Promise.all([uploadPhoto(), createUser()]);

    // Extract relevant data and log to console
    console.log(`${photoData.body} ${userData.firstName} ${userData.lastName}`);
  } catch (error) {
    // Log error message if any of the promises rejects
    console.log('Signup system offline');
  }
}
