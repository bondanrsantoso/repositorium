import { Navbar } from "@/components/Navbar";
import Head from "next/head";
import { ReactNode, Fragment } from "react";
interface DefaultLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  title?: string;
}

export default function DefaultLayout({
  children,
  header,
  title,
}: DefaultLayoutProps) {
  return (
    <Fragment>
      <Head>
        <title>{title ? `${title} - Repositorium` : "Repositorium"}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {header}
      </Head>
      <header>
        <Navbar />
        {children}
        {/* <p>foo</p> */}
      </header>
    </Fragment>
  );
}
