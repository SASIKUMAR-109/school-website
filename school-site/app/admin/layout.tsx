import "../globals.css";
export const metadata = { title: "Admin", robots: { index: false, follow: false } }
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}