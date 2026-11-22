import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Roboto } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatButtons from "@/components/ChatButtons";
import { site } from "@/lib/site";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const description =
  "Carewells offers medical and physiotherapy services, as well as mobile services where healthcare professionals visit patients' homes in Colombo, Sri Lanka.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} | Where Healing Begins | Healthcare | Colombo Sri Lanka`,
    template: `%s | ${site.shortName}`,
  },
  description,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: site.shortName,
    locale: "en_LK",
    description,
    images: [{ url: "/images/VAN.webp", width: 700, height: 593, alt: "Carewells mobile medical service" }],
  },
};

// Structured data so Google can show the clinic's address and phone
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/carewells-logo-new-3.png`,
  email: site.email,
  telephone: site.phones[0],
  address: {
    "@type": "PostalAddress",
    streetAddress: "78, Sri Wajirawansa Mawatha, Obeysekarapura",
    addressLocality: "Rajagiriya",
    addressRegion: "Colombo",
    postalCode: "10107",
    addressCountry: "LK",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Without JS the scroll-reveal never fires, so show everything */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatButtons />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
