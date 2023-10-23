import "../app/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { CustomNavbar } from "components/navBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <CustomNavbar></CustomNavbar>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
