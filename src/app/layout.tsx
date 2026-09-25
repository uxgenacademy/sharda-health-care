import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sharda Health Care - Badshahpur, Gurugram | Dr. Sahir & Dr. Anjum",
  description:
    "Badshahpur ke bharosemand doctor - Dr. Sahir (General Physician) & Dr. Anjum (Gynecologist). 24 Ghante Emergency Available. Google Rating 4.6/5. Aklimpur Teekli Road, Sector 68, Gurugram.",
  keywords:
    "Sharda Health Care, Badshahpur doctor, Gurugram doctor, General Physician Badshahpur, Gynecologist Gurugram, Dr Sahir, Dr Anjum, 24 hour doctor Gurugram",
  openGraph: {
    title: "Sharda Health Care - Badshahpur, Gurugram",
    description:
      "Dr. Sahir & Dr. Anjum - Pati-Patni Doctor Jodi. 4.6/5 Google Rating. 24 Ghante Emergency.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
