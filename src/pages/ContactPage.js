import React, { Component } from 'react';
import '../scss/ContactPage.scss';
import ContactForm from '../components/ContactForm';

class ContactPage extends Component {
  state = {
    name: '',
    email: '',
    text: '',
    nameErrorMessage: '',
    emailErrorMessage: '',
    textErrorMessage: ''
  }

  validateForm = () => {
    let name = false;
    let email = false;
    let text = false;
    let nameErrorMessage = '';
    let emailErrorMessage = '';
    let textErrorMessage = '';

    // Name input verification
    if (this.state.name === '') {
      nameErrorMessage = 'Please enter your name'
    } else {
      name = true;
    }

    // E-mail input verification
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.state.email === '') {
      emailErrorMessage = 'Please enter your e-mail address'
    } else if ((!re.test(String(this.state.email).toLowerCase()))) {
      emailErrorMessage = 'E-mail address is invalid'
    } else {
      email = true;
    }

    // Text message input verification
    if (this.state.text === '') {
      textErrorMessage = 'Please enter your message'
    } else {
      text = true;
    }

    this.setState({
      nameErrorMessage,
      emailErrorMessage,
      textErrorMessage
    })

    // Submit form
    if (name && email && text) {
      console.log('submitted!')
      // Clear all inputs
      this.setState({
        name: '',
        email: '',
        text: '',
        nameErrorMessage: '',
        emailErrorMessage: '',
        textErrorMessage: ''
      })
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.validateForm();
  }

  handleChange = (e) => {
    const inputName = e.target.name;
    this.setState({
      [inputName]: e.target.value
    })
  }

  render() {
    return (
      <div className='main contact'>
        <h2 className='contact__title' >Contact</h2>
        <ContactForm
          submitted={this.handleFormSubmit}
          changed={this.handleChange}
          state={this.state}
        />

        <div className='contact__info'>
          <span><i className='contact__info-icon fas fa-user'></i>Bartek Mogielnicki</span>
          <span><i className='contact__info-icon fas fa-phone'></i> 509-190-959</span>
          <span><i className='contact__info-icon fas fa-envelope'></i> b.mogielnicki@gmail.com</span>
          <div className='contact__info-social'>
            <a href='https://www.linkedin.com/in/bartlomiej-mogielnicki/' target='_blank'>
              <span><i className='contact__info-social-link fab fa-linkedin-in'></i></span>
            </a>
            <a href='https://github.com/BartlomiejMogielnicki' target='_blank'>
              <span><i className='contact__info-social-link fab fa-github'></i></span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;