"use client";
import Head from "next/head";
import HeroSection from "@/components/HeroSection/HeroSection";
import FeatureList from "@/components/FeatureList/FeatureList";
import ProductListing from "@/components/ProductListing/ProductListing";
import Advertize from "@/components/Advertize/Advertize";
import RetailServices from "@/components/RetailServices/RetailServices";

export default function Home() {
  return (
    <>
      <Head>
        <title>Revolution of Retail Industry | Standarde</title>
        <meta
          name="description"
          content="Discover how AI is transforming the retail industry. Learn about our Generative AI Search and innovative solutions for retailers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://standarde-cms.vercel.app/" />
        <meta
          property="og:title"
          content="Revolution of Retail Industry | Standarde"
        />
        <meta
          property="og:description"
          content="Discover how AI is transforming the retail industry. Learn about our Generative AI Search and innovative solutions for retailers."
        />
        <meta
          property="og:image"
          content="https://standarde-cms.vercel.app/og-image.jpg"
        />
        <meta property="og:url" content="https://standarde-cms.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Revolution of Retail Industry",
            description:
              "Discover how AI is transforming the retail industry. Learn about our Generative AI Search and innovative solutions for retailers.",
            url: "https://standarde-cms.vercel.app/",
            image: "https://standarde-cms.vercel.app/og-image.jpg",
            publisher: {
              "@type": "Organization",
              name: "Your Company Name",
              logo: {
                "@type": "ImageObject",
                url: "https://standarde-cms.vercel.app/logo.png",
              },
            },
          }),
        }}
      />
      <div>
        <HeroSection />
        <FeatureList />
        <RetailServices />
        <ProductListing />
        <Advertize />
      </div>
    </>
  );
}
