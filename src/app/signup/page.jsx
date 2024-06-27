"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MaxWidthWrapper from "@/components/MaxWithWrapper";
import { Textarea } from "@/components/ui/textarea";
const Signup = () => {
  const form = useRef();

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
    socialMediaType: "",
    socialMediaName: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bda3nzl",
        "template_r8k9k5i",
        form.current,

        {
          publicKey: "GDtDUaeh06WzsRr1l",
        },
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <MaxWidthWrapper className="mb-8 mt-12 max-w-5xl">
      <h1 className="text-4xl font-bold text-blue-600 sm:text-5xl">Sign up</h1>
      <div className="mt-8 md:mt-12">
        <p className="mt-3 text-slate-700 sm:text-lg">
          Please complete the short questionnaire below, and we will respond
          promptly. Your request will be reviewed and approved before
          proceeding.
        </p>
        <p className="mt-3 text-xs text-slate-700 sm:text-sm">
          We reserve the right to decline service to anyone. Our primary aim is
          to assist you, and if we determine that we are unable to do so
          effectively, we will not accept your request.
        </p>
      </div>
      <section className="mt-10">
        <form ref={form} onSubmit={sendEmail} className="max-w-prose space-y-8">
          <Input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            className="max-w-[500px]"
          />
          <Input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            className="max-w-[500px]"
          />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="max-w-[500px]"
          />
          <Input
            type="text"
            id="country"
            name="country"
            placeholder="Country"
            className="max-w-[500px]"
          />

          <div className="flex gap-4">
            <select
              id="socialMediaType"
              name="socialMediaType"
              className="w-[180px] rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="">Select Social Media</option>
              <option value="Instagram">Instagram</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Facebook">Facebook</option>
            </select>
            <Input
              type="text"
              id="socialMediaName"
              name="socialMediaName"
              placeholder="Social Media Name"
              className="max-w-[303px]"
            />
          </div>
          <Textarea
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            className="max-w-[500px]"
          />

          <Button type="submit" className="mt-5 bg-[#218aff] px-8 font-bold">
            Submit
          </Button>
        </form>
      </section>
    </MaxWidthWrapper>
  );
};

export default Signup;
