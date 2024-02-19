import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const array = [uploadPhoto(), createUser()];
  const result = Promise.all(array);

  result
    .then((data) => console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`))
    .catch(() => console.error('Signup system offline'));

  return result;
}
