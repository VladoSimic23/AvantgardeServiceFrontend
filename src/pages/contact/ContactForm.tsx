import { useState } from 'react';
import emailjs from "emailjs-com"
import styles from "./css/contact.module.css"
import globalStyles from "../../globalCss/globalStyle.module.css"

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        'service_bnyldgl',
        'template_hg9nfq9',
        { from_name: name, from_email: email, message },
        "ZHX9qWZnI66p5L68e"
      );

      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        name='theName'
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        name='theEmail'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Message"
        name='theText'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className={styles.submitBtn}>
        <button className={globalStyles.btnGreen} type="submit">Send Message</button>
      </div>
    </form>
    </>
  );
}

export default ContactForm;
