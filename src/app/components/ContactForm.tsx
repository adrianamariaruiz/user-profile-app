'use client'

import { FormEvent, useCallback, useEffect, useState } from "react"
import styles from "./contactForm.module.css"
import { titleFont } from "../config/fonts"
import Modal from "./Modal"

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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const expresions = {
    userEmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9-.]+$/
  }

  const validateForm = useCallback(()=>{
      let newErrors: Errors = {};
      if(!name.trim()){
        newErrors.name = 'El campo del nombre esta vacío'
      }
      if(!message.trim()){
        newErrors.message = 'El campo del email esta vacío'
      }
      if(!email.trim()){
        newErrors.email = 'El campo del email esta vacío'
      }else if(!expresions.userEmail.test(email) ){
        newErrors.email = 'El formato del email esta incorrecto'
      }
      return newErrors
    
  }, [email, message, name, expresions.userEmail])
  
  useEffect(() => {
    if (!isSubmitted) return;
    const newErrors = validateForm()
    setErrors(newErrors);
  }, [name, email, message, isSubmitted, validateForm]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true);

    const newErrors = validateForm()
    setErrors(newErrors);

    if(Object.keys(newErrors).length === 0){
      setOpen(true)
      setEmail('')
      setName('')
      setMessage('')
      setErrors({})
      setIsSubmitted(false);
    }
  }

  const closeModal= () => {
    setOpen(false);
  };

  return (
    <div className={styles.contact__form}>
      
      <div className={styles.prueba}></div>

      <form className={styles.form__content} onSubmit={handleSubmit} autoComplete="off">
        <h1 className={`${titleFont.className} ${styles.title}`}>Formulario</h1>
        <div className={styles.input__cont}>
            <input 
              className={`${styles.input__form} ${errors.name ? (styles.input__error) : (name.length>=1 && styles.input__validate)}`}
              type="text" 
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          <label htmlFor="name" className={styles.labelText}>
            Nombre
          </label>
        </div>
        {errors.name && <p className={styles.message__error}>{errors.name}</p>}
        <div className={styles.input__cont}>
            <input 
              className={`${styles.input__form} ${errors.email  ? (styles.input__error) : (email.length>0 && styles.input__validate) }`}
              type="email" 
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className={styles.labelText}>
            Email
          </label>
        </div>
        {errors.email && <p className={styles.message__error}>{errors.email}</p>}
        <div className={styles.input__cont}>
          <textarea 
            className={`${styles.textarea__form} ${errors.message  ? (styles.textarea__error) : (message.length>0 && styles.input__validate) }`}
            name="message" 
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        <label htmlFor="message" className={styles.labelText}>
          Deja tu mensaje
        </label>
        </div>
        {errors.message && <p className={styles.message__error}>{errors.message}</p>}
        <button type="submit" className={styles.btn__primary} >Enviar</button>
      </form>

      <Modal open={open} closeModal={closeModal}/>

    </div>
  )
}

export default ContactForm