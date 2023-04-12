import './globals.css';

export const metadata = {
  title: 'IMDb',
  description: 'Fazendo avaliações em filmes'
}



export default function RootLayout({ children }) {
  return (
    <>
      <html lang="pt-BR">
        <body>{children}</body>
      </html>
    </>
  )
}
