import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
import Hero from "@/views/hero";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} flex w-full min-h-screen  font-[family-name:var(--font-geist-sans)]`}>
       <Layout
      
      >
      <Hero/>
      </Layout>
    </div>
   
  );
}
