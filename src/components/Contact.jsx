/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid = () => {
    return form.name && isEmailValid(form.email) && form.message;
  };
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      alert("Please fill out all fields correctly.");
      return;
    }
    setLoading(true);

    emailjs.send("service_5e14pgr", "template_2r3177i", {
      from_name: form.name,
      to_name: 'Vraj',
      from_email: form.email,
      to_email: 'vrajpatel5089@gmail.com',
      message: form.message,
    }, "JLbHlydBQIrveAZLH")
      .then(() => {
        setLoading(false);
        setFormSubmitted(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });
        formRef.current.reset();
      }, (error) => {
        console.log(error);
        setLoading(false);
        alert('Oops! Something went wrong. Please try again.')
      });
  }

  return (
    <div className={`xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>
          contact.
        </h3>
        {formSubmitted ? (
          <div className="flex items-center justify-center h-screen">
            <div className="text-center p-8">
              <h3 className="text-white font-bold text-[24px]">
                thank you! :)
              </h3>
              <p className="text-secondary mt-4 text-[16px]">
                message received! i will get back to you as soon as possible.
              </p>
            </div>
          </div>

        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                hi, my name is *
              </span>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="vraj patel" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                and my email is *
              </span>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="vrajpatel6147@gmail.com" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                and i want to tell you *
              </span>
              <textarea rows="9" name="message" value={form.message} onChange={handleChange} placeholder="that you are awesome!" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium" />
            </label>

            <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
              {loading ? 'sending...' : 'send'}
            </button>
          </form>
        )}
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")