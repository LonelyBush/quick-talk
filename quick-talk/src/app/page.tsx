'use client';

import { auth, logout } from '@/auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Button from '@/components/ui/button/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [user] = useAuthState(auth);

  return (
    <div>
      <main>Hello {user?.displayName}</main>
      {!user ? (
        <div>
          <Button btnType="button" onClick={() => router.push('/login')}>
            Login
          </Button>
          <Button btnType="button" onClick={() => router.push('/registration')}>
            Registration
          </Button>
        </div>
      ) : (
        <div>
          <Button btnType="button" onClick={logout}>
            Log out
          </Button>
        </div>
      )}
    </div>
  );
}
