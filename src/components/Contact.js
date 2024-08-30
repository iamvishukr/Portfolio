import React, { useRef, useState } from "react";
import axios from "axios";
import coffee from "../assets/coffee2.jpg";

const Contact = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const user_email = form.current.user_email.value;
    const user_name = form.current.user_name.value;
    const message = form.current.message.value;

    if (!validateEmail(user_email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    try {
      const response = await axios.post("https://vishalkumarport.vercel.app/send-email", {
        user_email,
        user_name,
        message,
      });

      if (response.status === 200) {
        setFormMessage("Your message has been sent successfully!");
        e.target.reset();
      } else {
        setFormMessage("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormMessage("Failed to send your message. Please try again later.");
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-20 text-center text-4xl">Coffee With Me ?</h1>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0">
          <img
            src={coffee}
            alt="mypic"
            className="h-full w-full object-cover md:h-auto md:w-auto md:max-w-[100%] sm:h-[150vh] sm:w-[150vw] rounded-3xl"
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex justify-center relative z-10">
          <div className="lg:w-1/3 md:w-1/2 bg-black bg-opacity-[0.5] z-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-28 shadow-md">
            <h2 className="text-yellow-500 text-lg mb-1 font-medium title-font">
              Let's Connect 🍵
            </h2>
            <p className="leading-relaxed mb-5"></p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative mb-4">
                <label htmlFor="user_name" className="leading-7 text-sm text-white">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  id="user_name"
                  name="user_name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="user_email" className="leading-7 text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {emailError && (
                  <p className="text-red-500 text-sm">{emailError}</p>
                )}
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  placeholder="Write a message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </form>
            {formMessage && (
              <p className="text-yellow-500 text-sm mt-4">{formMessage}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
