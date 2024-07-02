'use client'

import { FormEvent, useState } from "react"
import styles from "./contactForm.module.css"
import stylesModal from "../page.module.css"

const ContactForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('enviada la informacion')
    setOpen(true)
  }

  const closeModal= () => {
    setOpen(false);
  };

  return (
    <div className={styles.contact__form}>
      
      <article className={open ? stylesModal.modal : stylesModal.modal__open} onClick={closeModal}>
        <div className={stylesModal.modal__dialog}>
          <button className={stylesModal.btn__close} onClick={closeModal}>X</button>
          <h1 className={stylesModal.modal__title}>¡Bien hecho!</h1>
          <p className={stylesModal.modal__info}>La información se envió correctamente</p>
        </div>
      </article>

      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Formulario</h2>
        <label htmlFor="name" className={styles.label}>
          Nombre
          <input 
            className={styles.input}
            type="text" 
            id="name"
            name="name"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email" className={styles.label}>
          Email
          <input 
            className={styles.input}
            type="email" 
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="message" className={styles.label}>
          Mensaje
          <textarea 
            className={styles.textarea}
            name="message" 
            id="message"
            placeholder="Deja tu mensaje..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <button type="submit" className={styles.btn__primary} >Enviar</button>
      </form>
    </div>
  )
}

export default ContactForm