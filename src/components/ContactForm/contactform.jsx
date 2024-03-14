import React, { useState } from "react";
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';
import './contactform.css';

const ContactForm = ({ onFormAlert }) => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [resize, setResize] = useState('0');

    const validateForm = () => {
        let formIsValid = true;
        let errors = {};

        if (!formData.name) {
            errors.name = 'Imię jest wymagane.';
            formIsValid = false;
        }

        if (!formData.surname) {
            errors.surname = 'Nazwisko jest wymagane.';
            formIsValid = false;
        }

        if (!formData.email) {
            errors.email = 'Email jest wymagany.';
            formIsValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Podany email jest nieprawidłowy.';
            formIsValid = false;
        }

        if (!formData.message) {
            errors.message = 'Wiadomość jest wymagana.';
            formIsValid = false;
        }

        setErrors(errors);
        return formIsValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            emailjs.sendForm('service_v09nzim', 'template_73q9k6o', e.target, '6-5mL-MhiwnqTkug9').then((result) =>
            {
                console.log('Email sent via contact form: ', result.text);
                setFormData({name: '', surname: '', email: '', message: ''});

                onFormAlert('Wiadomość wysłana pomyślnie!', 'success')
            }, (error) => {
                console.log('Failed to send email: ', error.text);
            });
        } else {
            onFormAlert('Wiadomość nie wysłana, sprawdź wprowadzone dane', 'error')
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-header">Skontakuj się ze mną</div>
            <div className="name-surname-container">
                <div className="name-container">
                    <input
                        className="form-input-name"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Imię: "
                    />
                    <div className="error-container">
                        <div key={errors.name} className="error">{errors.name}</div>
                    </div>
                </div>
                <div className="surname-container">
                    <input
                        className="form-input-name"
                        type="text"
                        id="surname"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        placeholder="Nazwisko: "
                    />
                    <div className="error-container">
                        <div key={errors.subject} className="error">{errors.surname}</div>
                    </div>
                </div>
            </div>
            <input
                className="form-input"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email: "
            /> 
            <div className="error-container">
                <div key={errors.email} className="error">{errors.email}</div>
            </div>            <textarea
                className="form-text-area"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Wiadomość: "
            />
            <div className="error-container">
                <div key={errors.message} className="error">{errors.message}</div>
            </div>
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
    );
}

export default ContactForm;
