import { Form } from "react-router-dom";

function ContactForm() {
  return (
    <div className="contact">
      <Form className="contact-form">
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea rows="5" cols="40" name="message" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default ContactForm;
