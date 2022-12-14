import Head from "next/head";
import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  children,
  home,
}: {
  children: ReactNode;
  home?: boolean;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>smolpadok | Developer & Designer</title>
        <meta name="description" content="smolpadok's portfolio" />
        <link rel="icon" href="/img/logo-favicon.png" />
      </Head>

      <Header />

      <main className="flex-1">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
