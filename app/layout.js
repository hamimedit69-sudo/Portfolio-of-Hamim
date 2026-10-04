import "./globals.css";

export const metadata = {
  title: "Hamim Khan | Full Stack Developer",
  description:
    "Portfolio of Hamim Khan, a Full Stack Developer building modern and responsive web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}