import React from "react";

import { Header } from "./header";
import { Footer } from "./footer";

export function SplitLayout({ left, right }) {
  return (
    <div className="h-screen w-full grid-cols-2 gap-8 md:grid">
      <section className="flex px-6 flex-col justify-between md:px-12 xs:mt-6 relative">
        <Header />
        <div>{left}</div>
        <Footer />
      </section>
      <section className="flex px-6 flex-col justify-between md:px-12 xs:mt-6 relative xs:h-full bg-brand">
        <div></div>
        {right}
        <div></div>
      </section>
    </div>
  );
}
