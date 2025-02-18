import { getAuthenticatedAppForUser } from '@/firebase/serverApp';
import style from './overview.module.scss';

async function Page() {
  const { currentUser } = await getAuthenticatedAppForUser();
  return (
    <div className={style.welcomeContainer}>
      <h2>{`Welcome ${currentUser?.displayName} !`}</h2>
      <p>Select a person from you list or add new ones</p>
    </div>
  );
}

export default Page;
