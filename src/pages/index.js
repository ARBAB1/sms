import Image from "next/image";
import { Inter } from "next/font/google";
import HomeScreen from "./HomeScreen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
  <HomeScreen/>
  </>
  );
}
