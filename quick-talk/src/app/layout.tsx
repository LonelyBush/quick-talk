import type { Metadata } from 'next';
import '../index.scss';
import Toast from '@/view/ui/toast/toast';
import Header from '@/view/сomponents/header/header';
import { AuthProvider } from '@/context/authContext';
import { lato } from '@/styles/fonts';

export const metadata: Metadata = {
  title: 'Quick Talk',
  description: '',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Toast />
        </AuthProvider>
      </body>
    </html>
  );
}
