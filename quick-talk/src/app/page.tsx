'use client';

import Button from '@/components/ui/button/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <main>Hello my new App !</main>
      <Button btnType="button" onClick={() => router.push('/login')}>
        Login
      </Button>
      <Button btnType="button" onClick={() => router.push('/registration')}>
        Registration
      </Button>
    </div>
  );
}
