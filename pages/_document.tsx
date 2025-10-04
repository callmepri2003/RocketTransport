import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Font Awesome CDN */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-pap7z+6++Z/2N+FxZ8X2zj1O+Xk6Uv9hZ9Q3kXY6ZgMq2kz3Ctkx2tkfT9oK2DZ6/1J8t1I9dku6sKflU4f1pw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <body>
        <Main />       {/* Your page content */}
        <NextScript /> {/* Next.js scripts */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

      </body>
    </Html>
  )
}
