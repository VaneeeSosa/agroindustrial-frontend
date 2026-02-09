export const metadata = {
  title: "Huevo Rojo - Libre Pastoreo",
  description: "Gallinas libres, yema intensa y sabor real"
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
