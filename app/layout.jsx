import Script from "next/script";

export const metadata = {
  title: "Ovoro",
  description: "Gallinas libres, yema intensa y sabor real",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MVCC0398CZ"></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MVCC0398CZ');`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
