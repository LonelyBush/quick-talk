import type { Metadata } from 'next';
import '../index.scss';
import Toast from '@/components/ui/toast/toast';
import { getAuthenticatedAppForUser } from '@/firebase/serverApp';

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
  console.log(currentUser);
  return (
    <html lang="en">
      <body>
        {children}
        <Toast />
      </body>
    </html>
  );
}
