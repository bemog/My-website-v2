import React from 'react';

const ContactForm = () => {
    return (
        <form className='contact__form' id='contact-form'>
            <div className='contact__form-section'>
                <label className='contact__form-section-label' for='name'>Name</label>
                <input className='contact__form-section-input' type='text' name='name' id='name' placeholder='Enter your name...' maxlength='50' />
                <small className='contact__form-section-error' id='name-error'>Please enter your name</small>
            </div>
            <div className='contact__form-section'>
                <label className='contact__form-section-label' for='email'>E-mail</label>
                <input className='contact__form-section-input' type='text' name='email' id='email' placeholder='Enter your email address...' />
                <small className='contact__form-section-error' id='email-error'>Please enter your e-mail address</small>
            </div>
            <div className='contact__form-section'>
                <label className='contact__form-section-label' for='text'>Message</label>
                <textarea className='contact__form-section-text' name='text' id='text' placeholder='Enter your message...'></textarea>
                <small className='contact__form-section-error' id='text-error'>Please enter your message</small>
            </div>
            <button className='contact__form-submit-btn' type='submit'>Submit</button>
        </form>
    );
}

export default ContactForm;