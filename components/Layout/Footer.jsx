
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MonitorSmartphone,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-14 text-white bg-blue-800 pt-16 pb-8 px-4 md:px-7 lg:px-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
           
          >
            <div className="flex items-center mb-4">
              <MonitorSmartphone className="text-primary-500 mr-2" size={32} />
              <h3 className="text-xl font-bold">Softmore IT</h3>
            </div>
            <p className="text-white mb-4">
              Transforming businesses with cutting-edge web design and digital
              marketing solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                icon={<Facebook size={18} />}
                href="https://www.facebook.com/SoftemoreIT"
              />
              <SocialLink
                icon={<Twitter size={18} />}
                href="https://www.facebook.com/SoftemoreIT"
              />
              <SocialLink
                icon={<Instagram size={18} />}
                href="https://www.instagram.com/softmore_it/"
              />
              <SocialLink
                icon={<Linkedin size={18} />}
                href="https://www.linkedin.com/company/softmore-it/"
              />
            </div>
          </div>

          <div
           
          >
            <h4 className="text-lg font-semibold mb-4 border-b text-white pb-2">
              Services
            </h4>
            <ul className="space-y-2">
              <FooterLink to="/web-design" label="Web Design" />
              <FooterLink to="/seo" label="PPC Marketing" />
              <FooterLink to="/seo" label="Digital Marketing" />
              <FooterLink to="/web-design" label="Website Development" />
              <FooterLink to="/web-design" label="E-commerce Solutions" />
              <FooterLink to="/seo" label="Brand Identity" />
            </ul>
          </div>

          <div
          
          >
            <h4 className="text-lg font-semibold mb-4 border-b text-white pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/web-design" label="Services" />
              <FooterLink to="/pricing" label="Our Pricing" />
              <FooterLink to="/contact" label="Contact Us" />
              <FooterLink to="/privacy-policy" label="Privacy Policy" />
              <FooterLink to="/term-condition" label="Term-Condition" />
            </ul>
          </div>

          <div
           
          >
            <h4 className="text-lg font-semibold mb-4 border-b text-white pb-2">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <a
                href="https://www.google.com/maps/dir//A1+B8,+Block+A1B,+Janakpuri,+New+Delhi,+Delhi,+110058/@28.623232,76.9889403,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x390d0390bfffffff:0xa1061df027587269!2m2!1d77.0713417!2d28.6232569?entry=ttu&g_ep=EgoyMDI1MDUxNS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="flex items-start">
                  <MapPin
                    className="text-primary-500 mr-3 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-white">
                    A1 B8, Block A1B, Janakpuri, New Delhi, Delhi, 110058
                  </span>
                </li>
              </a>
              <li className="flex items-center">
                <Phone
                  className="text-primary-500 mr-3 flex-shrink-0"
                  size={18}
                />{" "}
                <img
                  src="../home/india-flag.jpg"
                  className="w-5 h-5 mr-5 rounded-full"
                />
                <a
                  href="tel:+919266474766"
                  className="text-white hover:text-primary-400 transition-colors"
                >
                  +91 9266474766
                </a>
              </li>
              <li className="flex items-center">
                <Phone
                  className="text-primary-500 mr-3 flex-shrink-0"
                  size={18}
                />{" "}
                <img
                  src="../home/us_flag.webp"
                  className="w-5 h-5 mr-5 rounded-full"
                  alt=""
                />
                <a
                  href="tel:+1415-234-9076"
                  className="text-white hover:text-primary-400 transition-colors"
                >
                  +1 415-234-9076
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  className="text-primary-500 mr-3 flex-shrink-0"
                  size={18}
                />
                <a
                  href="mailto:info@softmoreit.com"
                  className="text-white hover:text-primary-400 transition-colors"
                >
                  info@softmoreit.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
            
          className="border-t border-gray-800 mt-12 pt-8 text-center text-white"
        >
          <p>
            &copy; {new Date().getFullYear()} Softmore IT Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to="/", label }) => {
  return (
    <li>
      <Link
        href={to}
        className="text-white hover:text-primary-400 transition-colors"
      >
        {label}
      </Link>
    </li>
  );
};

const SocialLink = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:bg-primary-600 p-2 rounded-full transition-colors shadow-lg hover:shadow-2xl shadow-blue-600 hover:scale-150 ease-linear"
    >
      {icon}
    </a>
  );
};

export default Footer;

