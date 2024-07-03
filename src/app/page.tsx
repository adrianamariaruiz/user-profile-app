import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Interests from "./components/Interests";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Navbar/>
        <About/>
        <Interests/>
        <ContactForm/>
      </div>
    </>
  );
}
