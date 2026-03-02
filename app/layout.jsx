export const metadata = {
  title: "Ovoro",
  description: "Gallinas libres, yema intensa y sabor real",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
