import React from "react";
import { useState } from "react";
import emailjs from 'emailjs-com';
import './contactform.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
      });

    const [resize, setResize] = useState('0');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v09nzim', 'template_73q9k6o', e.target, '6-5mL-MhiwnqTkug9').then((result) =>
        {
            console.log('Email sent via contact form: ', result.text);
        }, (error) => {
            console.log('Failed to send email: ', error.text);
        });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-header">Skontakuj się ze mną</div>
            <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Imię: "
            />
            <input
                className="form-input"
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Temat: "
            />
            <input
                className="form-input"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email: "
            />
            <textarea
                className="form-text-area"
                type="text"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Wiadomość: "
            /> 
            <button
                onClick={() => setResize('1')}
                onAnimationEnd={() => setResize('0')}
                resize={resize}
                className="submit-btn"
                type="submit"
                id="submit-btn"
                >
                    Wyślij wiadomość
            </button>
        </form>
    )
}

export default ContactForm;