import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Aneeq Khurram | React, Next and Web Development Portfolio"
        description="Aneeq Khurram is a professional React developer having experience in React, Next, Tailwind CSS, MERN stack, GraphQL, Material UI, and Firebase"
        canonical="https://aneeqkhurram007.com/"
        twitter={{
          cardType: "summary_large_image",
          site: "@aneeqkhurram007",
          handle: "@aneeqkhurram007",
        }}
        openGraph={{
          url: "https://aneeqkhurram007.com",
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
              url: "https://cdn.sanity.io/images/2cscjtea/production/0299029aaf5877b26fa69d7cb211fee0a56918cd-1080x1350.png",
              width: 500,
              height: 600,
              alt: "Aneeq Khurram hero image",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "http://localhost:3000/favicon.ico",
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
