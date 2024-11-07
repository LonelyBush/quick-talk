'use client';

import { logout } from '@/firebase/auth';
import Button from '@/components/ui/button/button';
import { useRouter } from 'next/navigation';
import useUserSection from '@/hooks/useUserSession';

export default function Home() {
  const router = useRouter();
  const { user, loading } = useUserSection();
  return loading ? (
    <div>
      <p>Loading...</p>
    </div>
  ) : (
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
        <>
          <div>
            <Button btnType="button" onClick={logout}>
              Log out
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
