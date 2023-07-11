import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Navbar } from "@/components/Navbar";
import DefaultLayout from "@/layouts/Default";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <DefaultLayout>
      <div className="md:container mx-auto mt-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, libero
        aliquid dolores recusandae quibusdam repellendus quo voluptatem nostrum
        alias illum voluptatibus facilis animi! Reiciendis, obcaecati quam
        quidem et sapiente laborum.
      </div>
    </DefaultLayout>
  );
}
