import React, { useRef, useState } from "react";
import coffee from "../assets/coffee2.jpg";
import emailjs from "@emailjs/browser";
import resume from "../assets/resume.pdf"
const Contact = () => {
  const form = useRef();
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current.user_email.value;

    if (!validateEmail(userEmail)) {
      setEmailError("Please enter a valid email address.");
      return; // Stop the function execution if email is invalid
    } else {
      setEmailError(""); // Clear error message if email is valid
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset(); // Reset form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-20 text-center text-4xl">Coffee With Me ?</h1>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0">
          <img
            src={coffee}
            alt="mypic"
            className="h-full w-full object-cover md:h-auto md:w-auto md:max-w-[100%] sm:h-[150vh] sm:w-[150vw]   rounded-3xl"
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex justify-center relative z-10">
          <div className="lg:w-1/3 md:w-1/2 bg-black bg-opacity-[0.5] z-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-28 shadow-md">
            <h2 className=" text-yellow-500 text-lg mb-1 font-medium title-font">
              Let's Connect 🍵
            </h2>
            <p className="leading-relaxed mb-5 "></p>
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative mb-4">
                <label
                  htmlFor="user_name"
                  className="leading-7 text-sm  text-white"
                >
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
                <label
                  htmlFor="user_email"
                  className="leading-7 text-sm  text-white"
                >
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
                <label
                  htmlFor="message"
                  className="leading-7 text-sm  text-white"
                >
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
              onSubmit={sendEmail}
                type="submit"
                className="text-white md:ml-[40%] ml-[25%] bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Submit
              </button>
            </form>
            <div className="flex justify-center mt-6">
              <a
                href={resume}
                download="Vishal_Resume.pdf"
                className="text-black  border-2 py-2 px-6 focus:outline-none bg-yellow-500 border-yellow-600 rounded text-lg w-full text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
