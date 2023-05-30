import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header>
        <nav className="border-b-indigo-500">
          <div className="md:container px-4 py-4 flex justify-start mx-auto items-center">
            <div id="navbar-logo" className="mr-auto">
              <span className="text-xl">Repositorium</span>
            </div>
            <div className="ml-auto flex justify-between gap-4">
              <a
                href="#"
                className="inline-block p-2 rounded-md hover:bg-slate-500"
              >
                <span className="bi-person mr-2"></span>
                User
              </a>
              <a
                href="#"
                className="inline-block p-2 rounded-md hover:bg-slate-500"
              >
                <span className="bi-person mr-2"></span>
                User
              </a>
              <a
                href="#"
                className="inline-block p-2 rounded-md hover:bg-slate-500"
              >
                <span className="bi-person mr-2"></span>
                User
              </a>
              <a
                href="#"
                className="inline-block p-2 rounded-md hover:bg-slate-500"
              >
                <span className="bi-person mr-2"></span>
                User
              </a>
              <a
                href="#"
                className="inline-block p-2 rounded-md hover:bg-slate-500"
              >
                <span className="bi-person mr-2"></span>
                User
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
