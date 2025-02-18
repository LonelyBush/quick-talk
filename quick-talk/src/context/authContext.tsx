'use client';

import { auth, firebaseConfig } from '@/firebase/firebase-config/client-app';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { createContext, ReactNode, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

export const AuthContext = createContext({
  user: {} as User | null | undefined,
  loading: false as boolean,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const serializedFirebaseConfig = encodeURIComponent(
        JSON.stringify(firebaseConfig),
      );
      const serviceWorkerUrl = `/auth-service-worker.js?firebaseConfig=${serializedFirebaseConfig}`;
      navigator.serviceWorker
        .register(serviceWorkerUrl, { type: 'module' })
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user === null) {
        router.replace('/');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const value = {
    user,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
