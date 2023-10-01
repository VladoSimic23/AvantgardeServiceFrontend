import { useEffect, useState } from 'react';
import emailjs from "emailjs-com"
import styles from "./css/contact.module.css"
import globalStyles from "../../globalCss/globalStyle.module.css"

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [messageStatus,setMessageStatus] = useState("");


  

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await emailjs.send(
        'service_bnyldgl',
        'template_hg9nfq9',
        { from_name: name,from_subject: subject ,from_email: email, message },
        "ZHX9qWZnI66p5L68e"
      );

      setMessageStatus('Email sent successfully');
      setName(""),
      setEmail(""),
      setMessage(""),
      setSubject("")
    } catch (error) {
      setMessageStatus(`Error sending email: ${error}`);
    }
  };

  useEffect(() => {
    if(messageStatus) {
      setTimeout(() => {
        setMessageStatus("")
      },3000)
    }
  },[messageStatus])


  return (
    <>
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name='theName'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        name='theSubject'
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
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
       {messageStatus && <h3>{messageStatus}</h3>}
      <div className={styles.submitBtn}>
        <button className={globalStyles.btnGreen} type="submit">Send Message</button>
      </div>
    </form>
    </>
  );
}

export default ContactForm;
