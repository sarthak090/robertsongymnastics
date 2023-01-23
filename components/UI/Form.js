import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log({ name, email, phone, subject, msg });
  };
  return (
    <form className="mb-8 font-open_sans" onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <label
          // htmlFor={name}

          className="block mb-3 text-xl   leading-none text-gray-400"
        >
          Your Name (required)
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type={"text"}
          className="flex w-full appearance-none py-6 items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-none focus:ring-0"
        />
      </div>
      <div className="mb-4">
        <label
          // htmlFor={name}
          className="block mb-3 text-xl   leading-none text-gray-400"
        >
          Your Email (required)
        </label>
        <input
          type={"email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="flex w-full appearance-none py-6 items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-none focus:ring-0"
        />
      </div>
      <div className="mb-4">
        <label
          // htmlFor={name}
          className="block mb-3 text-xl   leading-none text-gray-400"
        >
          Your Phone Number (required)
        </label>
        <input
          type={"text"}
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          className="flex w-full appearance-none py-6 items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-none focus:ring-0"
        />
      </div>

      <div className="mb-4">
        <label
          // htmlFor={name}
          className="block mb-3 text-xl   leading-none text-gray-400"
        >
          Subject
        </label>
        <input
          type={"text"}
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
          className="flex w-full appearance-none py-6 items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-none focus:ring-0"
        />
      </div>

      <div className="mb-4">
        <label
          // htmlFor={name}
          className="block mb-3 text-xl   leading-none text-gray-400"
        >
          Message
        </label>
        <input
          type={"text"}
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          className="flex w-full appearance-none py-6 items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-none focus:ring-0"
        />
      </div>
      <button
        className={`${
          router.asPath === "/center" ? "bg-green-900" : "bg-blue-900"
        } font-raleway py-3 w-full text-white hover:bg-orange-500`}
      >
        SEND
      </button>
    </form>
  );
}
