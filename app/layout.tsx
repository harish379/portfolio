import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const SpaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});





export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: "Harish",
	authors: {
		name: "Harish",
	},

	description:
		"Based in India, I'm a software engineer who loves building things for the web. I'm passionate about learning new technologies and frameworks, and I'm always looking for new opportunities to grow and improve my skills.",
	openGraph: {
		title: "Harish",
		description:
			"Based in India, I'm a software engineer who loves building things for the web. I'm passionate about learning new technologies and frameworks, and I'm always looking for new opportunities to grow and improve my skills.",
		url: "http://localhost:3000/",
		siteName: "harish",
		images: "/og.png",
		type: "website",
	},
	keywords: ["portfolio", "developer portfolio", "harish"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${SpaceGrotesk.variable} antialiased`}
      >

        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
