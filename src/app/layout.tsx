import React from "react";
import { Session } from "next-auth";

import AppWalletProvider from "@/components/AppWalletProvider";

import "./globals.css";

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: Session | null;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWalletProvider session={session}>{children}</AppWalletProvider>
      </body>
    </html>
  );
}
