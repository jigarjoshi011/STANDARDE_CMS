import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
type MetaProps = {
  params: { slug: string[]; locale: string };
};
export const generateMetadata = async (props: MetaProps): Promise<Metadata> => {
  const { params } = props;
  console.log(props, "in home");

  return {
    title: "STANDARDE | connecting world",
    description: "STANDARDE: Soft &amp; Team Building.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
    },
    robots: "noindex, nofollow",
    openGraph: {
      images: "",
    },
  };
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
