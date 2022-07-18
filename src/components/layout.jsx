import React from "react";

import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({ children }) {
  return (
    <div className="grid w-full grid-cols-2 gap-2">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
