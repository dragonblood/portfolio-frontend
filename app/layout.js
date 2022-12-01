"use client";
import { SideNav } from "../components/nav/side-nav";
import React from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react";

import '../styles/globals.css'
// import { router } from "next/client";
// import 'bootstrap/dist/css/bootstrap.css'

function makeTitle(thisID) {
  console.log(thisID);
  return thisID.replace("/", "").replace(/-/g, " ").replace(/\b[a-z]/g, function() {
    return arguments[0].toUpperCase();
  });
}

export default function RootLayout({ children, session }) {
  const router = usePathname();
  return (
    <SessionProvider session={session}>
    <html>
      <body defaultTheme="system">
        <SideNav></SideNav>
        <div className="content-center px-20 pt-15">
          <div className="mb-12 pt-10 font-sans text-6xl">
            {makeTitle(router)}
          </div>
          {children}
        </div>
      </body>
    </html>
    </SessionProvider>
  );
}
