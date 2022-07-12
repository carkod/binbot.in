import React from "react";

import { Header } from "./header";
import { Footer } from "./footer";

export function SplitLayout({ left, right }) {
  return (
    <div className="h-screen w-full grid-cols-2 gap-8 md:grid">
      <section className="flex flex-col justify-between px-12 relative">
        <Header />
        <div>{left}</div>
        <Footer />
      </section>
      <section className="flex flex-col justify-between bg-brand px-12 relative">
        {right}
      </section>
    </div>
  );
}
