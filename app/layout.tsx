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
      <body className="relative isolate h-full m-0 overflow-y-auto bg-black text-neutral-200 antialiased">
        <div className="relative z-10">{children}</div>

        {/* Fixed contact link at bottom-center */}
        <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 pointer-events-auto">
          <a
            href="https://github.com/AhmedBenAbdallahDev"
            className="text-sm text-neutral-400 hover:text-neutral-200 transition-colors"
            aria-label="GitHub Ahmed Ben Abdallah"
            rel="noopener noreferrer"
            target="_blank"
          >
            github.com/AhmedBenAbdallahDev
          </a>
        </footer>
      </body>
    </html>
  );
}
