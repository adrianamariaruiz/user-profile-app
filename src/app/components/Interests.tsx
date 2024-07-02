import { users } from "../usersMock/usersMock"
import styles from "./interests.module.css"

const Interests = () => {
  return (
    <section className={styles.about__section}>
      <div className={styles.about}>
        <h1 className={styles.h1}>Mis intereses</h1>
        <ul className={styles.list}>
          {
            users[0].interests?.map( (item, index) => (
              <li key={index}>{item}</li>
            ) )
          }
        </ul>
      </div>
    </section>
  )
}

export default Interests