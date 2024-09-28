import Image from "next/image";
import NavBar from "@/components/Navbar";
import Banner from "@/components/Banner";
import GameCard from "@/components/Game";
export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <GameCard />
    </>
  );
}
