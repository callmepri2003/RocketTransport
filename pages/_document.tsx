import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        {/* <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */}

        {/* Bootstrap & Font Awesome */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Raleway:wght@700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Rocket Transport Pty Ltd",
              "description": "Rocket Transport is an independent freight company specialising in all types of pallet goods services. Trusted since 2001, we're an established player in the industry and can guarantee that you'll be satisfied with our service.",
              "telephone": "+61 (02) 402 874 008",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8 Shropshire Cl",
                "addressLocality": "Wakeley",
                "addressRegion": "NSW",
                "postalCode": "2176",
                "addressCountry": "AU"
              },
              "url": "https://rockettransport.au/",
              "openingHours": "Mo-Fr 08:00-18:00",
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -33.90,
                "longitude": 151.02
              }
            }),
          }}
        />

      </Head>

      <body>
        <Main />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        <NextScript />
      </body>
    </Html>
  )
}
