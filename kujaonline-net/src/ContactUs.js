import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
// import Layout from '../components/layout'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'

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
      to_name: 'stephenojwang1040@gmail.com',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
        'gmail',
        'template_srhB7xeV',
        templateParams,
         'user_dmLU5w3tDVptS5FdUvsPR',
     )
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
          <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup>
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
<Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </>
    )
  }
}
export default ContactForm