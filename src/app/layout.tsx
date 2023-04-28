import './globals.css'

export const metadata = {
  title: 'Guilherme Vargas',
  description: 'Front-end Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
