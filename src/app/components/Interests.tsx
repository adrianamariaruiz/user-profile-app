import { titleFont } from "../config/fonts"
import { users } from "../usersMock/usersMock"
import styles from "./interests.module.css"

const Interests = () => {
  return (
    <section className={styles.interest__section}>
      <div className={styles.interest}>
        <h1 className={`${titleFont.className} ${styles.h1__title}`}>Mis intereses</h1>
        <ul className={styles.ulist}>
          {
            users[0].interests?.map( (item, index) => (
              <li key={index} className={styles.list__content}>{item}</li>
            ) )
          }
        </ul>
      </div>
    </section>
  )
}

export default Interests