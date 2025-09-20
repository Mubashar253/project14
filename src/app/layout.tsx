import "./globals.css";
import Navbar from "./comoponents/Navbar";

export const metadata = {
  title: "My Simple Site",
  description: "Next.js 15 + Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
