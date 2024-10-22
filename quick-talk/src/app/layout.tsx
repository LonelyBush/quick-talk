import type { Metadata } from 'next';
import '../index.scss';

export const metadata: Metadata = {
  title: 'Quick Talk',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
