import { useState, useId } from "react";

function ContactForm() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact">
        <div className="container">
            <h2 className="headings">Contact Me</h2>
            <form onSubmit={handleSubmit}>

              {/* Name Field */}
              <label htmlFor={nameId} className="sr-only">Name</label>
                <input 
                id={nameId}
                name="name"
                type="text" 
                placeholder="Your Name:" 
                autoComplete="full-name"
                required value={formData.name}
                onChange={handleChange}
                />

                {/* Email Field */}
                <label htmlFor={emailId} className="sr-only">Email</label>
                <input 
                id={emailId}
                name="email"
                type="email" 
                autoComplete="email"
                placeholder="Your Email:" 
                required value={formData.email}
                onChange={handleChange}
                />

                {/* Message Field */}
                <label htmlFor={messageId} className="sr-only">Message</label>
                <textarea 
                id={messageId}
                name="message"
                placeholder="Your Message:" 
                autoComplete="off"
                required rows="5" value={formData.message}
                onChange={handleChange}
                ></textarea>

                <button 
                type="submit" 
                className="btn btn-submit"
                >Email Me
                </button>
            </form>
        </div>
    </section>
  );
}

export default ContactForm;