import type { Metadata } from 'next';
import '../index.scss';
import Toast from '@/components/ui/toast/toast';
import Header from '@/components/сomponent/header/header';
import { getAuthenticatedAppForUser } from '@/firebase/serverApp';
import { AuthProvider } from '@/context/authContext';

export const metadata: Metadata = {
  title: 'Quick Talk',
  description: '',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { currentUser } = await getAuthenticatedAppForUser();
  console.log(currentUser?.toJSON());
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Toast />
        </AuthProvider>
      </body>
    </html>
  );
}
