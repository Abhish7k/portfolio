import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhishek Bhosale",
  description: "Abhishek Personal Portfolio Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className="absolute left-1/2 top-72 sm:top-0 -z-10 -translate-x-1/2 blur-2xl sm:blur-3xl xl:-top-6"
            aria-hidden="true"
          >
            <div
              className="aspect-[1155/678] mt-10 h-[75%] w-screen xl:w-[72.1875rem] bg-gradient-to-tr dark:from-indigo-400 dark:to-indigo-500 from-blue-500 to-blue-600 dark:opacity-30 opacity-40 overflow-hidden"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>

          <CustomCursor />
          {children}

          <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.05] fixed bottom-0 left-0 right-0 top-0 -z-20"></div>
        </ThemeProvider>
      </body>
    </html>
  );
}
