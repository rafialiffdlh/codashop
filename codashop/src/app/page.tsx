import Image from "next/image";
import NavBar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Game from "@/components/Game";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <Game />
      <Footer />
    </>
  );
}
