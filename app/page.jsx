import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Image
src="/Cat.jpg"
alt="Es un lindo gato"
width={300}
height={300}
/>    
  );
}