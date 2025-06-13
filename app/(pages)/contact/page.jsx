import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:mt-24">
        <div className="px-7 py-5 lg:w-1/2 lg:px-14">
          <h1 className="text-center font-bold text-4xl text-purple-950 lg:text-7xl lg:text-left">
            Contact Us
          </h1>
          <p className="text-center mt-2 font-semibold   bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent text-xl lg:text-2xl lg:text-left">
            You'll Love the Result
          </p>

          <div className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 h-[6px] rounded-lg my-8 w-full " />
          <p className="text-gray-600 lg:text-xl">
            We’re 100% Indian – no outsourcing to teams you’ve never met. At
            Softmore IT Solutions, we believe you deserve a website built with
            Indian expertise, quality, and standards.
          </p>
        </div>

        <div className="relative right-8 lg:w-1/2">
          <img src="./contact/teams.jpg" className="rounded-r-full right-5" />
        </div>
      </div>

      {/* second section  */}
      <div className="lg:flex lg:w-full lg:px-20 mt-8">
        <div className="px-5 mt-14 lg:w-[60vw]">
          <h2 className="text-center text-4xl font-bold text-purple-950">
            Get in Touch With Our Team!
          </h2>
          <div className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 h-[6px] rounded-lg my-8 w-full " />

          <form className="bg-white shadow-2xl shadow-gray-400 rounded-xl p-5">
            <p className="text-lg text-gray-500 font-poppins">Hello,</p>
            <div className="flex flex-col">
              <label className="text-lg text-gray-500 font-poppins">
                * My Name Is
              </label>
              <input
                type="text"
                className="pl-5 placeholder:text-xl my-5"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg text-gray-500 font-poppins">From</label>
              <input
                type="text"
                className="pl-5 placeholder:text-xl my-5"
                placeholder="Company"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg text-gray-500 font-poppins">
                * You Can Email Me At
              </label>
              <input
                type="text"
                className="pl-5 placeholder:text-xl my-5"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg text-gray-500 font-poppins">
                Or You Can Phone Me At
              </label>
              <input
                type="text"
                className="pl-5 placeholder:text-xl my-5"
                placeholder="Phone"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg text-gray-500 font-poppins">
                * I'd Like Your Help With:
              </label>
              <textarea
                type="text"
                className="pl-5 placeholder:text-xl my-5"
                placeholder="Message"
              ></textarea>
              <div className="">
                <Button className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 rounded-xl px-10 py-5 text-lg">
                  Send
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="px-5 py-5 lg:w-1/3">
          <Card className="overflow-hidden rounded-3xl">
            <img src="./contact/teamMeeting.jpg" className="" />
            <p className="px-7 text-3xl font-bold mt-7">Take The Next Step</p>
            <p className="px-7 text-gray-400 text-lg mt-3">
              Ditch the Slow Website
            </p>
            <a href={`tel:${"+919266474766"}`}>
              <Button className="bg-gradient-to-r from-sky-600 to-pink-600 mx-5 my-6 flex items-center">
                Get in Touch <ArrowRight />
              </Button>
            </a>
          </Card>
        </div>
      </div>

      {/* last section  */}

      <div className="mx-7 text-center lg:my-20">
        <p className="text-4xl font-bold my-8 md:text-5xl">Give Us A Call</p>
        <a className="block" href={`tel:${"+919266474766"}`}>
          <Button className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 rounded-xl px-10 py-5 text-lg md:px-14 md:py-6">
            Call Us <PhoneCall />
          </Button>
        </a>

        <div className="mt-10 px-5 lg:px-20">
          <h2 className="text-center text-4xl font-bold text-purple-950 mb-6">
            Visit Our Office
          </h2>
          <div className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 h-[6px] rounded-lg my-4 w-full"></div>

          {/* map main dev  */}

          <div className="flex flex-col lg:flex-row lg:gap-5 lg:items-end">
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg lg:flex lg:items-center lg:gap-5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.123456789!2d77.123456!3d28.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1234567890!2sA1B%2F8%2C%20Janakpuri%2C%20New%20Delhi%2C%20India%20110058!5e0!3m2!1sen!2sin!4v1681234567890!5m2!1sen!2sin"
                  className="w-[80vw] h-[50vh] lg:w-[40vw]"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="font-bold lg:text-3xl lg:px-10"></div>
              </div>
            </div>
            <div>
              <Card>
                <div className="flex items-start py-5 px-2 md:px-5 md:text-2xl">
                  <div className="font-bold px-2">Address:</div>
                  <div>A1B/8, Janakpuri, New Delhi, India 110058</div>
                </div>
                <div className="flex items-start py-5 px-2 md:px-5 md:text-2xl">
                  <div className="font-bold ">Phone No:</div>
                  <div> +91 9266474766</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
