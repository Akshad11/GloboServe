"use client";

import "./globals.css";
import { DM_Sans } from "next/font/google";

// Redux
import { Provider } from "react-redux";
import { store } from "@/redux/store";

// Load i18n
import "@/i18n";
import useSyncLanguage from "./hooks/useSyncLanguage";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <body className={dmSans.variable}>
        <Provider store={store}>
          <LanguageSyncWrapper>
            {children}
          </LanguageSyncWrapper>
        </Provider>
      </body>
    </html>
  );
}

function LanguageSyncWrapper({ children }: { children: React.ReactNode }) {
  useSyncLanguage(); // ✔ Now it's inside Redux Provider
  return <>{children}</>;
}
