import "./globals.css";

export const metadata = {
  title: "Hasbi Ali Firdaus — Technical Lead",
  description: "Personal portfolio of a Software Engineer.",
  icons: {
    icon: '/images/favicon.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}