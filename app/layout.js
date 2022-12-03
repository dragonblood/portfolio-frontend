"use client";
import React from "react";

import { useSession, SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";

import { SideNav } from "../components/nav/side-nav";
import "../styles/globals.css";

function makeTitle(thisID) {
  console.log(thisID);
  return thisID
    .replace("/", "")
    .replace(/-/g, " ")
    .replace(/\b[a-z]/g, function () {
      return arguments[0].toUpperCase();
    });
}

export default function RootLayout({ children } ) {
  const router = usePathname();

  return (
    <html>
      <body class="dark" defaultTheme="system">
        <SessionProvider refetchOnWindowFocus={false}>
            <SideNav></SideNav>
            <div className="content-center px-20 pt-15">
              <div className="mb-12 pt-10 font-sans text-6xl">
                {makeTitle(router)}
              </div>
              {children}
            </div>
        </SessionProvider>
        {/*<script src="../path/to/flowbite/dist/flowbite.js"></script>*/}
      </body>
    </html>
  );
}
