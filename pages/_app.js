// import { config } from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// config.autoAddCss = false

import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css'

import { ThemeProvider } from 'next-themes'
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { SideNav } from "../components/nav/side-nav";
import React from "react";

function makeTitle(thisID) {
  return thisID.replace("/", "").replace(/-/g, " ").replace(/\b[a-z]/g, function() {
    return arguments[0].toUpperCase();
  });
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme='system'>
        <SideNav></SideNav>
        <div className="px-20 pt-15 content-center">
          <div className="font-sans text-6xl mb-12 pt-10">{makeTitle(router.pathname)}</div>
          <Component {...pageProps}  />
        </div>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
