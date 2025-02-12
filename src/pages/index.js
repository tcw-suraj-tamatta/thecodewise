import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";
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
      <h1>Hello world</h1>
      </Layout>
    </div>
   
  );
}
