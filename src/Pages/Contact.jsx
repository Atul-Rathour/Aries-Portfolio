import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "../components/Contact/button.css";
import { slideIn } from "../utils/motion";
import Phoenix from "../components/Contact/Pheonix";
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
    .sendForm('service_egbw51d', 'template_cvj2m66', formRef.current, {
      publicKey: 'FlRErYeOw6N2arELr',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
        )
        setLoading(false);
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );


  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row xl:ms-20 flex-col-reverse overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="p1 text-[3rem] text-center underline">Get in touch</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-[#66C2C5] font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-transparent backdrop-blur py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#66C2C5] font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-transparent backdrop-blur py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-[#66C2C5] font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-transparent backdrop-blur py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/* <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl border-[#66C2C5] border w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button> */}

          <button className="button btn-grad"> {loading ? "Sending..." : "Send"}</button>
        </form>
      </motion.div>

      <div className="col-span-1 hidden lg:flex justify-center  translate-x-24 mt-10 ">
        <div className="flex flex-col w-[2.8rem] h-full overflow-hidden">
          <div className="h-[45%] w-full border-r-2 border-[#66C2C5]"></div>
          <div className="relative h-auto w-full aspect-square">
            <div className="absolute top-[50%] left-[50%] h-[150.42%] w-[1.5px] rotate-45 bg-[#66C2C5] transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="h-[45%] w-full border-l-2 border-[#66C2C5]"></div>
        </div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto relative md:h-[550px] mobile:h-[600px] h-[350px] translate-y-[6rem] "
      >
       {/* <div className="absolute rounded-lg right-10 top-20 chat pt-5 pb-5 ps-4 pe-4 max-w-[200px]">
        <p className="text-sm font-semibold">Hey We got you!</p>
        <p className="text-xs mt-2">I will reach you soon!</p>
      </div> */}
        <Phoenix />
      </motion.div>
    </div>
  );
};

export default Contact;
