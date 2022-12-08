import React from "react";
import { DefaultSeo } from "next-seo";
import Script from "next/script";

const SeoHead = () => {
  return (
    <>
      <DefaultSeo
        title="Aneeq Khurram | React, Next and Web Development Portfolio"
        description="Aneeq Khurram is a professional React developer having experience in React, Next, Tailwind CSS, MERN stack, GraphQL, Material UI, and Firebase"
        canonical="https://www.aneeqkhurram007.com/"
        twitter={{
          cardType: "summary_large_image",
          site: "@aneeqkhurram007",
          handle: "@aneeqkhurram007",
        }}
        openGraph={{
          url: "https://www.aneeqkhurram007.com",
          title: "Aneeq Khurram",
          description:
            "Aneeq Khurram is a professional React developer having experience in React, Next, Tailwind CSS, MERN stack, GraphQL, Material UI, and Firebase",
          type: "website",
          siteName: "Aneeq Khurram's portfolio",
          profile: {
            firstName: "Aneeq",
            lastName: "Khurram",
            username: "aneeqkhurram007",
            gender: "Male",
          },
          images: [
            {
              url: "https://cdn.sanity.io/images/2cscjtea/production/a41c5e5a3a95623b7d61d9501f19b7f471f16b48-1080x1080.png",
              width: 500,
              height: 600,
              alt: "Aneeq Khurram hero image",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "./favicon.ico",
          },
        ]}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `

window.dataLayer = window.dataLayer || [];

function gtag(){dataLayer.push(arguments);}

gtag('js', new Date());

gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', {

page_path: window.location.pathname,

});

`,
        }}
      />
      <Script
        id="hotjar-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_SITE_ID},hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `,
        }}
      />
    </>
  );
};

export default SeoHead;
