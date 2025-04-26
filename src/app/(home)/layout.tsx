import { PropsWithChildren } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div
      className="grid min-h-screen grid-rows-[auto_1fr_auto]"
      data-testid="home-layout"
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
