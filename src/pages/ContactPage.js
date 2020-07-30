import React from 'react';
import '../scss/ContactPage.scss';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className='main contact'>
      <h2 className='contact__title' >Contact</h2>
      <ContactForm />

      <div className='contact__info'>
        <span><i className='contact__info-icon fas fa-user'></i>Bartek Mogielnicki</span>
        <span><i className='contact__info-icon fas fa-phone'></i> 509-190-959</span>
        <span><i className='contact__info-icon fas fa-envelope'></i> b.mogielnicki@gmail.com</span>
        <div className='contact__info-social'>
          <a href='https://pl.linkedin.com/' target='_blank'>
            <span><i className='contact__info-social-link fab fa-linkedin-in'></i></span>
          </a>
          <a href='https://github.com/' target='_blank'>
            <span><i className='contact__info-social-link fab fa-github'></i></span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPage;