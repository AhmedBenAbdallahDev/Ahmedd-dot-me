import './globals.css';

export const metadata = {
  title: 'Ahmed Ben Abdallah',
  description: 'Work in progress portfolio for Ahmed Ben Abdallah.',
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="relative isolate h-full m-0 overflow-hidden bg-black text-neutral-200 antialiased">{children}</body>
    </html>
  );
}
