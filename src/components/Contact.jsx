import emailJs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// service_zcj2sda
// service_zcj2sda
// template_7pkajhl
// jKryN-D5-cR-f9zDl

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    //service_zcj2sda
    // template_7pkajhl
    // jKryN-D5-cR-f9zDl
    emailJs
      .send(
        `service_zcj2sda`,
        `template_h24ijep`,
        {
          from_name: form.name,
          to_name: "Pradeep",
          from_email: form.email,
          to_email: "ydvpradeep2@gmail.com",
          message: form.message,
        },
        "jKryN-D5-cR-f9zDl"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you ");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          alert("Something went wrong!!!");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-row-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.72] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => handleChange(e)}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => handleChange(e)}
              placeholder="What's your Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={(e) => handleChange(e)}
              placeholder="What do you want say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
               text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold
          shadow-md shadow-primary rounded-xl
          "
          >
            {" "}
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:g-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
