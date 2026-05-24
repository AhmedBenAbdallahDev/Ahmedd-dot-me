import './globals.css';

export const metadata = {
  title: 'Ahmed Ben Abdallah | Game Developer',
  description: 'Ahmed Ben Abdallah\'s personal portfolio. Aspiring Game Developer & Computer Science Student from Tunisia building games with Godot and exploring WebGL.',
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  openGraph: {
    title: 'Ahmed Ben Abdallah | Game Developer',
    description: 'Ahmed Ben Abdallah\'s personal portfolio. Aspiring Game Developer & Computer Science Student from Tunisia building games with Godot and exploring WebGL.',
    images: process.env.NEXT_PUBLIC_SITE_URL ? [process.env.NEXT_PUBLIC_SITE_URL + '/og-image.png'] : ['/og-image.png']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Ben Abdallah | Game Developer',
    description: 'Ahmed Ben Abdallah\'s personal portfolio. Aspiring Game Developer & Computer Science Student from Tunisia building games with Godot and exploring WebGL.',
    images: process.env.NEXT_PUBLIC_SITE_URL ? [process.env.NEXT_PUBLIC_SITE_URL + '/og-image.png'] : ['/og-image.png']
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="relative isolate h-full m-0 overflow-hidden bg-black text-neutral-200 antialiased">{children}</body>
    </html>
  );
}
