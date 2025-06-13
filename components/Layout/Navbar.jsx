// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import {
//   AlignRight,
//   AppWindow,
//   AtSign,
//   Facebook,
//   Flame,
//   House,
//   Instagram,
//   Linkedin,
//   Megaphone,
// } from "lucide-react";
// import React, { useState } from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { motion } from "framer-motion";
// import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import Button from "@/components/miniComp/button/Button";
// import FormDilog from "./FormDilog";
// import Link from "next/link";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const social = [
//     {
//       icon: <Instagram size={40} className="text-rose-500" />,
//       link: "https://www.instagram.com/softmore_it/",
//     },
//     {
//       icon: <Facebook size={40} className="text-blue-500" />,
//       link: "https://www.facebook.com/SoftemoreIT",
//     },
//     {
//       icon: <Linkedin size={40} className="text-cyan-500" />,
//       link: "https://www.linkedin.com/company/softmore-it/",
//     },
//   ];

//   return (
//     <div className="w-full bg-gradient-to-r from-fuchsia-600 to-indigo-600  bg-opacity-25 border-b-2 h-[10vh] flex items-center justify-between px-2 md:px-8 lg:px-10 sticky top-0 z-30">
//       <Link href="/">
//         <img className="w-[4rem]" src="./softmoreLogo.png" alt="logo" />
//       </Link>

//       <div className="flex items-center gap-8">
//         <div className="hidden md:block">
//           <FormDilog>
//           <Button />
//           </FormDilog>
//         </div>

//         <Sheet open={isOpen} onOpenChange={setIsOpen}>
//           <SheetTrigger>
//             <div className="flex items-center gap-2 ">
//               <AlignRight color="white" className="" size={30} />
//               <span className="text-white text-xl">Menu</span>
//             </div>
//           </SheetTrigger>
//           <SheetContent className="px-4 bg-white md:px-10">
//             <VisuallyHidden.Root>
//               <SheetHeader>
//                 <SheetTitle>Menu</SheetTitle>
//                 <SheetDescription>
//                   Navigate through our website.
//                 </SheetDescription>
//               </SheetHeader>
//             </VisuallyHidden.Root>
//             <div className="lg:mt-10 mt-5">
//               <Link href="/" onClick={() => setIsOpen(false)}>
//                 <House size="40" className="text-[#2965e6] lg:w-20 lg:h-20" />
//               </Link>
//             </div>

//             <div className="mt-8">
//               <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
//                 <Link href="/" onClick={() => setIsOpen(false)}>
//                   HOME
//                 </Link>
//               </div>

//               <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
//                 <Link href="/about" onClick={() => setIsOpen(false)}>
//                   Who We are
//                 </Link>
//               </div>

//               <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl lg:text-4xl">
//                 <Accordion type="single" collapsible className="w-full ">
//                   <AccordionItem value="item-1" className="py-0 border-none">
//                     <AccordionTrigger
//                       // display={true}
//                       className=" font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl p-0"
//                     >
//                       SERVICE
//                     </AccordionTrigger>
//                     <AccordionContent className="flex flex-col my-4">
//                       <Link
//                         onClick={() => setIsOpen(false)}
//                         href="/web-design"
//                         className="md:text-xl my-3 ml font-medium text-cyan-500 flex items-center gap-2 mb-2"
//                       >
//                         <AppWindow />
//                         Website Design
//                       </Link>

//                       <Link
//                         onClick={() => setIsOpen(false)}
//                         href="/seo"
//                         className="md:text-xl my-3 ml font-medium text-rose-500 flex items-center gap-2 mb-2"
//                       >
//                         <Flame />
//                         Search Engine Optimization
//                       </Link>
//                       <Link
//                         onClick={() => setIsOpen(false)}
//                         href="/ads"
//                         className="md:text-xl text-sm my-3 ml font-medium text-blue-500 flex items-center gap-2 mb-2"
//                       >
//                         <Megaphone />
//                         Ads Service
//                       </Link>

//                       <Link
//                         onClick={() => setIsOpen(false)}
//                         href="/social-media-management"
//                         className="md:text-xl my-3 ml font-medium text-pink-500 flex items-center gap-2 mb-2"
//                       >
//                         <AtSign />
//                         Social Media Management
//                       </Link>
//                     </AccordionContent>
//                   </AccordionItem>
//                 </Accordion>
//               </div>

//               <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
//                 <Link href="/pricing" onClick={() => setIsOpen(false)}>
//                   OUR PRICING
//                 </Link>
//               </div>
//               <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
//                 <Link href="/blog" onClick={() => setIsOpen(false)}>
//                   BLOG
//                 </Link>
//               </div>
//               <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
//                 <Link href="/contact" onClick={() => setIsOpen(false)}>
//                   CONTACT US
//                 </Link>
//               </div>
//             </div>
//             <div className="flex mt-8 items-center gap-10 md:mt-16">
//               {social?.map((item, index) => {
//                 return (
//                   <motion.a
//                     href={item?.link}
//                     whileHover={{ scale: 1.2 }}
//                     key={index}
//                   >
//                     {item?.icon}
//                   </motion.a>
//                 );
//               })}
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlignRight,
  AppWindow,
  AtSign,
  Facebook,
  Flame,
  House,
  Instagram,
  Linkedin,
  Megaphone,
} from "lucide-react";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "@/components/miniComp/button/Button";
import FormDilog from "./FormDilog";
import Link from "next/link";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log({
      name,
      email,
      phone,
      budget,
      service: selectedService,
      message: query,
    });

    try {
      const response = await axios.post(
        "http://localhost:5000/api/createForm",
        {
          name,
          email,
          phone,
          budget,
          service: selectedService,
          message: query,
        }
      );

      if (response.status === 201) {
        // Assuming 201 Created is the success status code
        console.log("Form submitted successfully!");
        toast.success(`Thanks ${name} your request has been Successfully Registered`);
        // Optionally, reset the form fields
        setName("");
        setEmail("");
        setPhone("");
        setBudget("");
        setSelectedService("");
        setQuery("");
        // You can also show a success message to the user
      } else {
        setError("Form submission failed. Please try again.");
        console.error("Form submission failed:", response.status);
      }
    } catch (error) {
      console.log(error,'error');

      toast.error("Error while submiting the form");
    } finally {
      setLoading(false);
    }
  };

  const social = [
    {
      icon: <Instagram size={40} className="text-rose-500" />,
      link: "https://www.instagram.com/softmore_it/",
    },
    {
      icon: <Facebook size={40} className="text-blue-500" />,
      link: "https://www.facebook.com/SoftemoreIT",
    },
    {
      icon: <Linkedin size={40} className="text-cyan-500" />,
      link: "https://www.linkedin.com/company/softmore-it/",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-fuchsia-600 to-indigo-600  bg-opacity-25 border-b-2 h-[10vh] flex items-center justify-between px-2 md:px-8 lg:px-10 sticky top-0 z-30">
      <Link href="/">
        <img className="w-[4rem]" src="./softmoreLogo.png" alt="logo" />
      </Link>

      <div className="flex items-center gap-8">
        <div className="hidden md:block">
          <Dialog>
            <DialogTrigger className="text-white font-bold bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border border-gray-100 px-4 py-2 rounded-full uppercase">
              Request a Quote
            </DialogTrigger>
            <DialogContent
              aria-describedby="dialog-description"
              className="rounded-2xl w-[95vw]"
            >
              <VisuallyHidden.Root>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>
              </VisuallyHidden.Root>
              <div className="font-bold text-2xl text-center bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
                Get A Free Quote
              </div>
              <p className="text-sm text-gray-500" id="dialog-description">
                Fill out the Enquiry Form and we'll get back to You.
              </p>

              <form className=" flex flex-col gap-4" onSubmit={handleSubmit}>
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Phone no"
                  type="number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  placeholder="Budget more then Rs 2000"
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />

                <Select
                  onValueChange={(v) => setSelectedService(v)}
                  value={selectedService}
                >
                  <SelectTrigger className="">
                    <SelectValue placeholder="Services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ads services">Ads Services</SelectItem>
                    <SelectItem value="Search Engine Optimization">
                      SEO
                    </SelectItem>
                    <SelectItem value="Social Media Management">
                      Social Media Management
                    </SelectItem>
                    <SelectItem value="web application">Web Design</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Tell us bit about your project..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                ></Textarea>
                <button
                  className="bg-blue-700 py-2 rounded-full text-white font-bold"
                  type="submit"
                  disabled={loading}
                >
                  Submit
                </button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger>
            <div className="flex items-center gap-2 ">
              <AlignRight color="white" className="" size={30} />
              <span className="text-white text-xl">Menu</span>
            </div>
          </SheetTrigger>
          <SheetContent className="px-4 bg-white md:px-10">
            <VisuallyHidden.Root>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Navigate through our website.
                </SheetDescription>
              </SheetHeader>
            </VisuallyHidden.Root>
            <div className="lg:mt-10 mt-5">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <House size="40" className="text-[#2965e6] lg:w-20 lg:h-20" />
              </Link>
            </div>

            <div className="mt-8">
              <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  HOME
                </Link>
              </div>

              <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
                <Link href="/about" onClick={() => setIsOpen(false)}>
                  Who We are
                </Link>
              </div>

              <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl lg:text-4xl">
                <Accordion type="single" collapsible className="w-full ">
                  <AccordionItem value="item-1" className="py-0 border-none">
                    <AccordionTrigger
                      // display={true}
                      className=" font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl p-0"
                    >
                      SERVICE
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col my-4">
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/web-design"
                        className="md:text-xl my-3 ml font-medium text-cyan-500 flex items-center gap-2 mb-2"
                      >
                        <AppWindow />
                        Website Design
                      </Link>

                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/seo"
                        className="md:text-xl my-3 ml font-medium text-rose-500 flex items-center gap-2 mb-2"
                      >
                        <Flame />
                        Search Engine Optimization
                      </Link>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/ads"
                        className="md:text-xl text-sm my-3 ml font-medium text-blue-500 flex items-center gap-2 mb-2"
                      >
                        <Megaphone />
                        Ads Service
                      </Link>

                      <Link
                        onClick={() => setIsOpen(false)}
                        href="/social-media-management"
                        className="md:text-xl my-3 ml font-medium text-pink-500 flex items-center gap-2 mb-2"
                      >
                        <AtSign />
                        Social Media Management
                      </Link>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
                <Link href="/pricing" onClick={() => setIsOpen(false)}>
                  OUR PRICING
                </Link>
              </div>
              <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
                <Link href="/blog" onClick={() => setIsOpen(false)}>
                  BLOG
                </Link>
              </div>
              <div className="font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent text-2xl mb-5 lg:text-4xl">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  CONTACT US
                </Link>
              </div>
            </div>
            <div className="flex mt-8 items-center gap-10 md:mt-16">
              {social?.map((item, index) => {
                return (
                  <motion.a
                    href={item?.link}
                    whileHover={{ scale: 1.2 }}
                    key={index}
                  >
                    {item?.icon}
                  </motion.a>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
