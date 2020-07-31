import React from 'react';

const ContactForm = (props) => {
    return (
        <form
            className='contact__form'
            id='contact-form'
            onSubmit={props.submitted}
            method='POST'
            netlify-honeypot='bot-field'
            data-netlify='true'>
            <p class="hidden" hidden>
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <div className='contact__form-section'>
                <label className='contact__form-section-label' htmlFor='name'>Name</label>
                <input
                    className='contact__form-section-input'
                    type='text'
                    name='name'
                    id='name'
                    placeholder='Enter your name...'
                    maxLength='50'
                    onChange={props.changed}
                    value={props.state.name} />
                <small className='contact__form-section-error' id='name-error'>{props.state.nameErrorMessage}</small>
            </div>
            <div className='contact__form-section'>
                <label className='contact__form-section-label' htmlFor='email'>E-mail</label>
                <input
                    className='contact__form-section-input'
                    type='text'
                    name='email'
                    id='email'
                    placeholder='Enter your email address...'
                    onChange={props.changed}
                    value={props.state.email} />
                <small className='contact__form-section-error' id='email-error'>{props.state.emailErrorMessage}</small>
            </div>
            <div className='contact__form-section'>
                <label className='contact__form-section-label' htmlFor='text'>Message</label>
                <textarea
                    className='contact__form-section-text'
                    name='text'
                    id='text'
                    placeholder='Enter your message...'
                    onChange={props.changed}
                    value={props.state.text} >
                </textarea>
                <small className='contact__form-section-error' id='text-error'>{props.state.textErrorMessage}</small>
            </div>
            <button className='contact__form-submit-btn' type='submit'>Submit</button>
        </form>
    );
}

export default ContactForm;