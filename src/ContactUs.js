import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Form } from 'reactstrap'

class ContactForm extends Component {
        state = {
            name: '',
            email: '',
            subject: '',
            message: '',
          }

handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state;
    console.log(this.state)
    let templateParams = {
      from_name: email,
      to_name: 'support',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
        'gmail',
        'template_srhB7xeV',
        templateParams,
         'user_dmLU5w3tDVptS5FdUvsPR',
     )
     alert('Message sent!')
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
        <div>
            
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <input className="input-text" type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="Your Email *" onFocus="if(this.value==this.defaultValue)this.value='';" onBlur="if(this.value=='')this.value=this.defaultValue;"></input>
            <input className="input-text" type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} placeholder="Your Name *"  onFocus="if(this.value==this.defaultValue)this.value='';" onBlur="if(this.value=='')this.value=this.defaultValue;"></input>
            <textarea className="input-text text-area" value={this.state.message} onChange={this.handleChange.bind(this, 'message')} placeholder="Your Message *" onChange={this.handleChange.bind(this, 'message')} cols="0" rows="0" onFocus="if(this.value==this.defaultValue)this.value='';" onBlur="if(this.value=='')this.value=this.defaultValue;">Your Message *</textarea>
            <input className="input-btn" type="submit" value="SEND MESSAGE"></input>
          </Form>
          
        </div>
      </>
    )
  }
}
export default ContactForm