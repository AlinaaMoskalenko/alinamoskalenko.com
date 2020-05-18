import React, { useState } from 'react';
import Button from "../../common/button/button";

import styles from './contact-form.module.scss';

const ContactForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  
  const [isActive, setActiveState] = useState({
    'name-field': { active: false },
    'email-field': { active: false },
    'message-field': { active: false }
  });
  
  const onFocusBlur = ({ target: { id, value } }) => {
    if (value === '') {
      const {[`${id}`]: field, ...otherProps} = isActive;
      
      const newObj = {
        [id]: { active: !field.active },
        ...otherProps
      };
      
      setActiveState(newObj);
    }
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    
    if (name === null) {
      isValid = false;
    }
  
    if (email === null) {
      isValid = false;
    }
  
    if (message === null) {
      isValid = false;
    }
    
    if (isValid) {
      console.log('send mail');
    }
    
    console.log('name', name);
    console.log('email', email);
    console.log('message', message);
  };
  
  return (
    <div className={styles['contact-form']}>
      <h1 className={styles.title}>For any requests /></h1>
      <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
        <div className={styles['input-block']}>
          <input
            id='name-field'
            type='text'
            className={`${styles.input} ${isActive['name-field'].active ? styles['input-active'] : null }`}
            onChange={({ target: { value }}) => setName(value)}
            onFocus={(e) => onFocusBlur(e)}
            onBlur={(e) => onFocusBlur(e)}
          />
          <label htmlFor="name-field" className={styles['input-label']}>Your Name</label>
        </div>
        
        <div className={styles['input-block']}>
          <input
            id='email-field'
            type='email'
            className={`${styles.input} ${isActive['email-field'].active ? styles['input-active'] : null }`}
            onChange={({ target: { value }}) => setEmail(value)}
            onFocus={(e) => onFocusBlur(e)}
            onBlur={(e) => onFocusBlur(e)}
          />
          <label htmlFor="email-field" className={styles['input-label']}>Your Email</label>
        </div>
        
        <div className={styles['input-block']}>
          <input
            id='message-field'
            type='text'
            className={`${styles.input} ${isActive['message-field'].active ? styles['input-active'] : null }`}
            onChange={({ target: { value }}) => setMessage(value)}
            onFocus={(e) => onFocusBlur(e)}
            onBlur={(e) => onFocusBlur(e)}
          />
          <label htmlFor="message-field" className={styles['input-label']}>Tell me all about it</label>
        </div>
        
        <Button type="secondary" className={styles['btn-submit']}>send</Button>
      </form>
    </div>
  );
};

export default ContactForm;
