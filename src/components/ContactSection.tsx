"use client";
import React from "react";
import axios from "axios";
import SectionWrapper from "./utilities/SectionWrapper";
import { useTheme } from "next-themes";
import { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import contactImage from "@/public/10179961-removebg-preview.png";

const ContactSection = () => {
  const { theme } = useTheme();
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.name.trim() || !values.email.trim() || !values.message.trim()) {
      toast.warning("Empty Fields!");
      return false;
    }

    setLoading(true);
    axios
      .post("/api/mail", {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then((res) => {
        if (res.status === 200) {
          setValues({ name: "", email: "", message: "" });
          setLoading(false);
          setSuccess(true);
          toast.success(res.data.message);
        } else {
          setLoading(false);
          toast.error(res.data.message);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValues((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <SectionWrapper
      id="contact"
      className={`${
        theme === "dark" && "bg-gray-900"
      } relative min-h-[90vh] pt-12 px-8 md-px-0 overflow-hidden`}
    >
      <h2 className="text-center text-4xl">Contact Me</h2>
      <ToastContainer />

      <div className="w-full lg:w-[90%] 2xl:w-4/5 mt-10 md:mt-16 mx-auto flex justify-between rounded-xl">
        {/* blurDataURL="https://i.imgur.com/owZdhjA.png" */}
        <Image
          unoptimized={true}
          quality={100}
          alt="contact"
          src={contactImage}
          className="hidden md:block w-1/2 h-full object-cover"
          width={1000}
          height={1000}
        />
        <div className="flex-1">
          <h3 className="text-2xl">Get in touch</h3>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Feel free to drop by anytime! 💌 Whether you have a question that's
            been on your mind 🔥 or just want to say a friendly "hello" 👋, I'm
            here and ready to chat! 🗣️ Let's connect and make it fun! 🎉✨
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-xl"
          >
            <input
              onChange={handleChange}
              required
              value={values.name}
              name="name"
              type="text"
              placeholder="Full Name *"
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 text-gray-800 rounded-sm py-3 px-4"
            />
            <input
              onChange={handleChange}
              required
              value={values.email}
              name="email"
              type="email"
              placeholder="Email *"
              className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 text-gray-800 rounded-sm py-3 px-4"
            />
            <textarea
              onChange={handleChange}
              required
              value={values.message}
              name="message"
              rows={6}
              placeholder="Message *"
              className="outline-none resize-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 text-gray-800 rounded-sm py-3 px-4"
            />
            <button
              disabled={loading}
              className="w-fit text-sm md:text-base py-3.5 px-10 cursor-pointer flex justify-end items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 hover:dark:bg-blue-800 transition-colors group text-white uppercase tracking-wider shadow-lg duration-300"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  Say Hello <BiLoaderAlt className="animate-spin" />
                </span>
              ) : (
                "Say Hello 👋"
              )}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
