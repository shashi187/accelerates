import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GSC = process.env.NEXT_PUBLIC_GSC_TOKEN;

export const metadata = {
  metadataBase: new URL("https://accelerates.online"),
  title: {
    default: "Accelerates Online — Growth‑First Websites | AI‑Powered. SEO‑Maxed.",
    template: "%s | Accelerates Online"
  },
  description: "We build outrageously fast, conversion‑ready websites. Dark, modern, founder‑led. Includes SEO, speed, and AI integrations by default.",
  openGraph: {
    type: "website",
    url: "https://accelerates.online",
    siteName: "Accelerates Online",
    title: "Accelerates Online — Smart Websites & AI‑Powered Growth",
    description: "Next‑level web development with SEO & AI baked in.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Accelerates Online — Smart Websites & AI‑Powered Growth",
    description: "Next‑level web development with SEO & AI baked in.",
    images: ["/og-image.jpg"]
  },
  verification: GSC ? { google: GSC } : undefined,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Minimal Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Accelerates Online",
              url: "https://accelerates.online",
              logo: "https://accelerates.online/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9718179994",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/accelerates.online/",
                "https://wa.me/919718179994",
                process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/rishiraj1360/",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}

        {/* GA4 */}
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}