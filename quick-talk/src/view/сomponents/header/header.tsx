'use client';

import Button from '@/view/ui/button/button';
import styles from './header-style.module.scss';
import { useRouter } from 'next/navigation';
import { logout } from '@/firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '@/context/authContext';

function Header() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();
  return (
    <header className={styles.headerContainer}>
      <h2>Quick Talk</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={styles.authContainer}>
          {user ? (
            <>
              <p>{user.displayName}</p>
              <Button btnType="button" onClick={logout}>
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button btnType="button" onClick={() => router.push('/login')}>
                Login
              </Button>
              <Button
                btnType="button"
                onClick={() => router.push('/registration')}
              >
                Registration
              </Button>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
