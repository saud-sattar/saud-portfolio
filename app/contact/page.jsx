"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectLabel,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
   {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "0469 835 836",
   },
   {
      icon: <FaEnvelope />,
      title: "Email",
      description: "saud.sattar02@gmail.com",
   },
   // {
   //    icon: <FaMapMarkerAlt />,
   //    title: "Address",
   //    description: "no",
   // },
];

import { motion } from "framer-motion";

const Contact = () => {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
   });

   const [status, setStatus] = useState(""); // For success/error messages

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // Prepare EmailJS parameters
      const templateParams = {
         from_name: `${formData.firstName} ${formData.lastName}`,
         from_email: formData.email,
         phone: formData.phone,
         message: formData.message,
      };

      // Send email
      emailjs
         .send(
            "service_o238qjh", // Replace with your Service ID
            "template_0bccubh", // Replace with your Template ID
            templateParams,
            "1Vafn2ODS9tIUmkMg" // Replace with your Public Key
         )
         .then(
            (response) => {
               console.log("SUCCESS!", response.status, response.text);
               setStatus("Message sent successfully!");
            },
            (err) => {
               console.error("FAILED...", err);
               setStatus("Failed to send the message. Please try again.");
            }
         );

      // Reset form
      setFormData({
         firstName: "",
         lastName: "",
         email: "",
         phone: "",
         message: "",
      });
   };

   return (
      <motion.section
         initial={{ opacity: 0 }}
         animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
         }}
         className="py-6"
      >
         <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
               {/* form */}
               <div className="xl:w-[54%] order-2 xl:order-none">
                  <form
                     onSubmit={handleSubmit}
                     className="flex flex-col gap-6 p-10 bg-[#1D3557]/30 rounded-xl"
                  >
                     <h3 className="text-4xl text-[#eddea4]">
                        Lets work together
                     </h3>
                     <p className="text-[#f9f7f3]/60">Contact me below :D</p>

                     {/* input */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                           type="firstname"
                           placeholder="First name"
                           name="firstName"
                           value={formData.firstName}
                           onChange={handleChange}
                           required
                        />
                        <Input
                           type="lastname"
                           placeholder="Last name"
                           name="lastName"
                           value={formData.lastName}
                           onChange={handleChange}
                           required
                        />
                        <Input
                           type="email"
                           placeholder="Email address"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                        />
                        <Input
                           type="phone"
                           placeholder="Phone number"
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                        />
                     </div>
                     {/* select */}
                     {/* <Select>
                           <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select a service"/>
                           </SelectTrigger>
                           <SelectContent>
                              <SelectGroup>
                                 <SelectLabel>Select a service</SelectLabel>
                                 <SelectItem value="web-development">Web Development</SelectItem>
                                 <SelectItem value="ui-ux-desginer">UI/UX Designer</SelectItem>
                                 <SelectItem value="logo-designer">Logo Design</SelectItem>
                              </SelectGroup>
                           </SelectContent>
                        </Select> */}
                     {/* textarea */}
                     <Textarea
                        className="h-[200px]"
                        placeholder="Type your message here."
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                     />
                     {/* btn */}
                     <Button type="submit" size="md" className="max-w-40">
                        Send message
                     </Button>

                     {status && (
                        <p className="mt-4 text-sm text-[#eddea4]">{status}</p>
                     )}
                  </form>
               </div>
               {/* info */}
               <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                  <ul className="flex flex-col gap-10">
                     {info.map((item, index) => {
                        return (
                           <li key={index} className="flex items-center gap-6">
                              <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#eddea4] rounded-md flex items-center justify-center">
                                 <div className="text-[28px]">{item.icon}</div>
                              </div>
                              <div className="flex-1">
                                 <p className="text-[#f9f7f3]/60">
                                    {item.title}
                                 </p>
                                 <h3 className="text-xl">{item.description}</h3>
                              </div>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default Contact;
