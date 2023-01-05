import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  
  return (
    <Html lang="tr">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,400;1,600;1,700&display=swap"></link>
      </Head>
      <body className={process.env.NODE_ENV === 'development' ? 'debug-screens'  : ''}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}