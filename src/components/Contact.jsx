import { useState } from "react";
import { profile } from "../data";

const emptyForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (form.message.trim().length < 10)
      e.message = "Write at least 10 characters.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n${form.name} (${form.email})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setForm(emptyForm);
    setSent(true);
  };

  return (
    <section className="section container" id="contact">
      <h2>Contact</h2>
      <p className="contact__lead">
        Have a project or a question? Send me a message.
      </p>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="name"
          />
          {errors.name && <span className="form__error">{errors.name}</span>}
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="email"
          />
          {errors.email && <span className="form__error">{errors.email}</span>}
        </label>
        <label>
          Message
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && (
            <span className="form__error">{errors.message}</span>
          )}
        </label>
        <button className="btn btn--primary" type="submit">
          Send message
        </button>
        {sent && (
          <p className="form__ok" role="status">
            Your email app should open now.
          </p>
        )}
      </form>
    </section>
  );
}
