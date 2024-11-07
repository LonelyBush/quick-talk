'use client';

import Button from '@/components/ui/button/button';
import styles from './logout-style.module.scss';
import { logout } from '@/firebase/auth';
import useUserSession from '@/hooks/useUserSession';

function Logout() {
  const { user, loading } = useUserSession();
  return (
    <div className={styles.logoutWrapper}>
      <h2>Quick Talk</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.logoutContainer}>
          <p>{user?.displayName}</p>
          <Button btnType="button" onClick={logout}>
            Log out
          </Button>
        </div>
      )}
    </div>
  );
}

export default Logout;
