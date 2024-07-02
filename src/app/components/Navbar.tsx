import Image from "next/image"
import styles from "./navbar.module.css"
import {users} from "../usersMock/usersMock"


const Navbar = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <p>{users[0].name} {users[0].lastName}</p>
        <div className={styles.image}>
          <Image 
            // src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c' 
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