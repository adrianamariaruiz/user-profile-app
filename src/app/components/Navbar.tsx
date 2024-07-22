import Image from "next/image"
import styles from "./navbar.module.css"
import {users} from "../usersMock/usersMock"
import { titleFont } from "../config/fonts"


const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav__content}>
        <p className={`${titleFont.className} ${styles.username}`}>{users[0].name} {users[0].lastName}</p>
        <div className={styles.image__avatar}>
          <Image 
            src={users[0].avatar}
            alt="photo" 
            width={50} 
            height={50}
          />
        </div>
      </nav>
    </div>
  )
}

export default Navbar