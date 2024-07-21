import styles from "./modal.module.css"

interface Props {
  open: boolean
  closeModal: () => void
}

const Modal = ({open, closeModal}: Props) => {
  return (
    <article className={`${styles.modal} ${open ? styles.moda : styles.modal__close}`} onClick={closeModal}>
        <div className={styles.modal__dialog}>
          <button className={styles.btn__close} onClick={closeModal}>X</button>
          <h1 className={styles.modal__title}>¡Bien hecho!</h1>
          <p className={styles.modal__info}>La información se envió correctamente</p>
        </div>
      </article>
  )
}

export default Modal