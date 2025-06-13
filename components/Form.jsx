import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Textarea } from './ui/textarea';

const Form = () => {

    
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
    

  return (
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
  )
}

export default Form