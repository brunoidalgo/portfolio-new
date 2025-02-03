import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "700"], // Defina os pesos que deseja usar
  display: "swap",
});

export const metadata = {
  title: 'Portfólio - Bruno Empke',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body className={`${lexend.className} antialiased`}
        cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  )
}