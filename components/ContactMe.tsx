import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:aneeqkhurram007@yahoo.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };

  return (
    <div
      className="min-h-screen flex relative flex-col text-center md:text-left xl:flex-row
    max-w-7xl px-10 justify-center sm:justify-evenly mx-auto items-center space-y-10"
    >
      <h3
        className="uppercase tracking-[20px]
      text-gray-500 text-2xl"
      >
        Contact
      </h3>
      <div className="flex px-4 flex-col space-y-4 sm:space-y-10">
        <h4 className="text-2xl sm:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Lets talk.</span>
        </h4>

        <div className="space-y-4 sm:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-lg sm:text-2xl">+92-306-4730660</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-lg sm:text-2xl">aneeqkhurram007@yahoo.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-lg sm:text-2xl">Lahore, Pakistan</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="mt-2 contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold
          text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
