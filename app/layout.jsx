import "./globals.css";

export const metadata = {
  title: "Your Name — Software Engineer",
  description: "Personal portfolio of a Software Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}