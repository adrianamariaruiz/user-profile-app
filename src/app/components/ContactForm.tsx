'use client'

import { FormEvent, useState } from "react"
import styles from "./contactForm.module.css"
import stylesModal from "../page.module.css"
import { titleFont } from "../config/fonts"

interface Errors {
  name?: string
  email?: string
  message?: string
}

const ContactForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState<Errors>({});

  const expresions = {
    userEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/
  }

  const validations = () => {
    let isError = false
    let errors: Errors = {}

    if(!name.trim()){
      errors.name = 'El campo del nombre esta vacío'
      isError= true
    }
    if(!email.trim()){
      errors.email = 'El campo del email esta vacío'
      isError= true
    }else if(!expresions.userEmail.test(email) ){
      errors.email = 'El formato del email esta incorrecto'
      isError= true
    }
    if(!message.trim()){
      errors.message = 'El campo del email esta vacío'
      isError= true
    }

    setErrors(errors);
    return isError ? errors : null
  }


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let isError = false
    let errors: Errors = {}

    if(!name.trim()){
      errors.name = 'El campo del nombre esta vacío'
      isError= true
    }
    if(!email.trim()){
      errors.email = 'El campo del email esta vacío'
      isError= true
    }else if(!expresions.userEmail.test(email) ){
      errors.email = 'El formato del email esta incorrecto'
      isError= true
    }
    if(!message.trim()){
      errors.message = 'El campo del email esta vacío'
      isError= true
    }

    setErrors(errors);

    if(!isError){
      setOpen(true)
      setEmail('')
      setName('')
      setMessage('')
      setErrors({})
    }
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

      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <h1 className={`${titleFont.className} ${styles.title}`}>Formulario</h1>
        <div className={styles.input__cont}>
            <input 
              className={errors.name ? styles.input__error : styles.input}
              type="text" 
              id="name"
              name="name"
              value={name}
              // required
              onChange={(e) => setName(e.target.value)}
            />
          <label htmlFor="name" className={styles.label}>
            Nombre
          </label>
        </div>
        {errors.name && <p className={styles.message__error}>{errors.name}</p>}
        <div className={styles.input__cont}>
            <input 
              className={errors.email ? styles.input__error : styles.input}
              type="email" 
              id="email"
              name="email"
              // required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className={styles.label}>
            Email
          </label>
        </div>
        {errors.email && <p className={styles.message__error}>{errors.email}</p>}
        <div className={styles.input__cont}>
          <textarea 
            className={errors.message ? styles.textarea__error : styles.textarea}
            name="message" 
            id="message"
            // required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        <label htmlFor="message" className={styles.label}>
          Deja tu mensaje
        </label>
        </div>
        {errors.message && <p className={styles.message__error}>{errors.message}</p>}
        <button type="submit" className={styles.btn__primary} >Enviar</button>
      </form>
    </div>
  )
}

export default ContactForm