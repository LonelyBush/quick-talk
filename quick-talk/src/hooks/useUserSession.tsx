import { auth, firebaseConfig } from '@/firebase/firebase-config/client-app';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

function useUserSession() {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const serializedFirebaseConfig = encodeURIComponent(
        JSON.stringify(firebaseConfig),
      );
      const serviceWorkerUrl = `/auth-service-worker.js?firebaseConfig=${serializedFirebaseConfig}`;

      navigator.serviceWorker
        .register(serviceWorkerUrl)
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);

  return { user, loading, error };
}

export default useUserSession;
