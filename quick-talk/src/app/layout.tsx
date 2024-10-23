import type { Metadata } from 'next';
import '../index.scss';
import Toast from '@/components/ui/toast/toast';

export const metadata: Metadata = {
  title: 'Quick Talk',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(process.env.API_KEY);
  return (
    <html lang="en">
      <body>
        {children}
        <Toast />
      </body>
    </html>
  );
}
