import "../globals.css";

export const metadata = {
  title: "My site",
  description: "Generated by create next app and sanity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
