"use client";
import styles from "./contact.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <motion.section
      className={styles.contact}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={styles.textSide}>
            <motion.h1
              className={styles.heading}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get In <span className={styles.decorate}>Touch</span>
            </motion.h1>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Whether you have a question, want to book a session, or just say
              hello — I’d love to hear from you.
            </motion.p>

            <motion.div
              className={styles.details}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p>
                <strong>Email:</strong> kenzee.photo@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className={styles.note}>
                You can use the contact form or reach out directly. I respond
                within 24 hours.
              </p>
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className={styles.form}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className={styles.label}>
              Name
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                whileFocus={{ scale: 1.02 }}
              />
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>

            <div className={styles.label}>
              Email
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                whileFocus={{ scale: 1.02 }}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            <div className={styles.label}>
              Message
              <motion.textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                whileFocus={{ scale: 1.01 }}
              />
              {errors.message && (
                <span className={styles.error}>{errors.message}</span>
              )}
            </div>

            <motion.button
              type="submit"
              className={styles.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}
