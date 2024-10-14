"use client"
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import swal from "sweetalert";


const ContactForm = ({showForm,toggleShowForm}:{
    showForm:boolean;
    toggleShowForm:Function;
  }) => {

    const formRef = useRef<HTMLFormElement>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        swal("Please wait!","Sending a request...");
      if (formRef.current) {
        emailjs
          .sendForm("service_th9zp67", "template_e5kelts", formRef.current, {
            publicKey: "mi90paxgTXYV8H6R-",
          })
      .then(
        () => {
            swal("Good job!", "Your response has been recorded!", "success");
            toggleShowForm();
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          swal("Oops!", error.text , "error");
        }
      );}
  };
  return (
    <div className=" h-full  w-full flex items-center justify-center ">
      <div className="rounded-md md:max-w-lg py-8 px-6 lg:px-12 bg-white relative">
        <div className="absolute top-4 right-4 text-black font-extrabold cursor-pointer" onClick={()=>{toggleShowForm();console.log("showForm :",showForm);}}>X</div>
        <div className="mx-auto ltext-center">
          <h2 className="text-xl md:text-3xl font-bold tracking-tight text-gray-900">
            Contact sales
          </h2>
          {/* <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p> */}
        </div>
        <form ref={formRef} onSubmit={sendEmail} className="mx-auto mt-8">
          <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-5 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2 md:mt-2.5">
                <input
                required
                  id="first-name"
                  name="from_name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-5 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2 md:mt-2.5">
                <input
                required
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-5"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-5 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2 md:mt-2.5">
                <input
                required
                  id="email"
                  name="from_email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-5 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2 md:mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  className="block w-full rounded-md border-0 px-3.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-5"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-emerald-600 px-3.5 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
