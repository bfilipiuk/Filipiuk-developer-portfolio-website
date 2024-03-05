import React from "react";
import './contactform.css';

const ContactForm = () => {
    return (
        <form className="contact-form">
            <div className="contact-form-header">Skontakuj się ze mną</div>
            <input className="form-input" type="text" id="name" name="name" placeholder="Imię: " />
            <input className="form-input" type="text" id="lastname" name="lastname" placeholder="Nazwisko: " />
            <input className="form-input" type="text" id="email" name="email" placeholder="Email: " />
            <textarea className="form-text-area" type="text" id="message" name="message" placeholder="Wiadomość: " /> 
        </form>
    )
}

export default ContactForm;