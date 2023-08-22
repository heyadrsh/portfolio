import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <header className="bg-foreground text-background py-4">
          <nav className="container mx-auto px-4">
            <ul className="flex space-x-4">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-foreground text-background py-4">
          <div className="container mx-auto px-4">
            <p>&copy; 2023 Your Name. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
} 