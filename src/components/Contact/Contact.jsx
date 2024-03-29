import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import links from '../../data/links.json';

const Contact = () => {
    const form = useRef();

    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm(service_id, template_id, form.current, public_key)
            .then(result => {
                    console.log(result.text);
                },
                error => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section id='contact' className='contact wrapper'>
            <div className="contact-header">
                <h2 className='contact-header__title'>Contact me:</h2>
                <span className='contact-header__description'>Send message to my email</span>
            </div>
           
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <input className='contact-form__input' type="text" name="user_name" placeholder='Your Name'/>
                <input className='contact-form__input' type="email" name="user_email" placeholder='Your Email' />
                <textarea className='contact-form__input textarea' name="message" placeholder='Message'/>

                <input className='contact-form__button btn' type="submit" value="Send" />
            </form>
            <span className='contact-footer'>Or write me in <a className='secondary-link' href={links.telegram}>telegram</a></span>
        </section>
    );
};
export default Contact;
