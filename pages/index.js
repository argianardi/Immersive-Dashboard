import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="font-bold">Home Page</h1>
      <Footer />
    </>
  );
}
