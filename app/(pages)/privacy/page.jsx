import React from "react";
import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <>
   

      <main className="p-6 max-w-5xl mx-auto text-gray-800">
        <div
          className="space-y-6"
        >
          {/* Page Title */}
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text lg:text-5xl">Privacy Notice</h2>

          {/* Introduction Section */}
          <section className="space-y-4">
            <p className="text-sm">
              <strong className='bg-gradient-to-r from-rose-600 to-indigo-600 text-transparent bg-clip-text '>Softmore It Solutions Pvt Ltd</strong> ("Company," "we," "us," or "our") describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Visiting our website at{' '}
                <a href="http://www.softmoreit.co.in" className="text-blue-600 hover:underline">
                  www.softmoreit.co.in
                </a>
              </li>
              <li>Engaging with us in related ways, including any sales, marketing, or events</li>
            </ul>
            <p>
              Questions or concerns? Contact us at{' '}
              <a href="mailto:Support@softmoreit.com" className="text-blue-600 hover:underline">
                Support@softmoreit.com
              </a>
            </p>
          </section>

          {/* Summary of Key Points Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-pink-600 to-indigo-600 text-transparent bg-clip-text">Summary of Key Points</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We collect personal information based on how you interact with us and our Services.</li>
              <li>We do not process sensitive personal information or receive info from third parties.</li>
              <li>We use your information for communication, fraud prevention, legal compliance, and improving our Services.</li>
              <li>Information may be shared in certain cases and with specific third parties.</li>
              <li>We take reasonable steps to protect your data, but no system is 100% secure.</li>
            </ul>
          </section>

          {/* What Information Do We Collect? Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">1. Information We Collect</h3>
            <p>We collect various types of information to provide and improve our services to you.</p>
            <h4 className="font-semibold text-lg">1.1. Information You Directly Provide to Us:</h4>
            <p>When you engage with Softmore IT Solution, you may provide us with personal information, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Contact Information:</strong> Name, company name, email address, phone number, postal address.</li>
              <li><strong>Billing Information:</strong> Payment details (e.g., credit card information, bank account details) necessary for processing payments for our services.</li>
              <li><strong>Project-Related Information:</strong> Details about your website design and digital marketing projects, business objectives, content (text, images, videos, logos, branding materials), login credentials for your existing accounts (e.g., hosting, domain, analytics, social media platforms) that you provide for us to perform services.</li>
              <li><strong>Correspondence:</strong> Information you provide when communicating with us via email, phone, or contact forms.</li>
            </ul>
            <h4 className="font-semibold text-lg">1.2. Information We Collect Automatically (Usage Data and Cookies):</h4>
            <p>When you visit our website, we may automatically collect certain information about your device and browsing activity. This information is primarily used for analytics and to improve your user experience.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Usage Data:</strong> This may include your IP address, browser type and version, operating system, pages visited, time spent on pages, referring URLs, and other diagnostic data.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies (e.g., pixels, web beacons) to track activity on our website and hold certain information. Cookies are small data files placed on your device.
                <ul className="list-circle pl-6 mt-1 space-y-1">
                  <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly (e.g., enabling navigation).</li>
                  <li><strong>Analytical/Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting information about traffic sources, page views, etc.</li>
                  <li><strong>Functionality Cookies:</strong> Remember your preferences to provide a more personalized experience.</li>
                  <li><strong>Marketing/Targeting Cookies:</strong> Used to deliver relevant advertisements to you based on your interests.</li>
                </ul>
              </li>
              <li>You have the option to accept or refuse cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, this may prevent you from taking full advantage of the website.</li>
            </ul>
          </section>

          {/* How Do We Process Your Information? Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-green-600 to-indigo-600 text-transparent bg-clip-text">2. How We Use Your Information</h3>
            <p>We use the collected information for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>To Provide Services:</strong> To deliver, operate, and maintain our website design and digital marketing services, including project management, communication, and client support.</li>
              <li><strong>To Process Payments:</strong> To manage billing and payment processing for services rendered.</li>
              <li><strong>To Communicate with You:</strong> To respond to your inquiries, send project updates, invoices, and important notices related to our services.</li>
              <li><strong>To Improve Our Website and Services:</strong> To analyze usage patterns, identify trends, and enhance the functionality, performance, and user experience of our website and services.</li>
              <li><strong>For Marketing and Promotion:</strong> To send you newsletters, promotional materials, and information about our new services or special offers, where you have provided consent or where allowed by law. You can opt-out of receiving these communications at any time.</li>
              <li><strong>For Legal Compliance:</strong> To comply with applicable laws, regulations, legal processes, or governmental requests.</li>
              <li><strong>For Security:</strong> To detect, prevent, and address technical issues, fraud, or other illegal activities.</li>
              <li><strong>For Our Legitimate Business Interests:</strong> For internal administrative purposes, such as data analysis, auditing, and developing new products and services.</li>
            </ul>
          </section>

          {/* Sharing Your Information Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-emerald-600 to-indigo-600 text-transparent bg-clip-text">3. How We Share Your Information</h3>
            <p>We may share your personal information with third parties in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform website-related services, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. Examples include cloud hosting providers, payment gateways, CRM software, and analytics services.</li>
              <li><strong>With Your Consent:</strong> We may disclose your personal information to third parties when we have your explicit consent to do so.</li>
              <li><strong>Client Projects:</strong> For digital marketing services, we may use your provided content and data to run campaigns on third-party platforms (e.g., Google Ads, social media platforms) on your behalf. In such cases, your use of those platforms is also governed by their respective privacy policies.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your personal information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, asset sale, or other business transaction, your personal information may be transferred to the new entity.</li>
              <li><strong>Protection of Rights:</strong> We may disclose information when we believe it is appropriate to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person, or as evidence in litigation in which we are involved.</li>
            </ul>
          </section>

          {/* Data Security Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-teal-600 to-indigo-600 text-transparent bg-clip-text">4. Data Security</h3>
            <p>The security of your data is paramount to us. We implement a variety of industry-standard security measures to protect your personal information from unauthorized access, use, alteration, and disclosure. These measures include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Encryption of data in transit and at rest.</li>
              <li>Secure access controls and authentication protocols.</li>
              <li>Regular security audits and vulnerability assessments.</li>
              <li>Employee training on data protection and privacy best practices.</li>
            </ul>
            <p>While we strive to use commercially acceptable means to protect your Personal Data, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.</p>
          </section>

          {/* Data Retention Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-orange-600 to-indigo-600 text-transparent bg-clip-text">5. Data Retention</h3>
            <p>We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, including to fulfill our contractual obligations, comply with legal requirements, resolve disputes, and enforce our agreements.</p>
          </section>

          {/* Your Privacy Rights Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-yellow-600 to-indigo-600 text-transparent bg-clip-text">6. Your Privacy Rights</h3>
            <p>Depending on applicable data protection laws, you may have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Right to Access:</strong> You have the right to request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> You have the right to request that we correct any inaccurate or incomplete personal data.</li>
              <li><strong>Right to Erasure (Right to Be Forgotten):</strong> You have the right to request the deletion of your personal data under certain circumstances.</li>
              <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data under certain conditions.</li>
              <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your personal data under certain conditions.</li>
              <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
              <li><strong>Right to Withdraw Consent:</strong> Where we rely on your consent to process your personal information, you have the right to withdraw that consent at any time.</li>
            </ul>
            <p>To exercise any of these rights, please contact us using the details provided in the "Contact Us" section below. We will respond to your request in accordance with applicable law.</p>
          </section>

          {/* Children's Privacy Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">7. Children's Privacy</h3>
            <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
          </section>

          {/* International Data Transfers Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-pink-600 to-purple-600 text-transparent bg-clip-text">8. International Data Transfers</h3>
            <p>As a company based in Delhi, India, your information, including Personal Data, may be stored and processed in India or in other countries where our service providers maintain facilities. By using our services, you consent to the transfer of your information to these locations. We ensure that any such transfers comply with applicable data protection laws and that adequate safeguards are in place to protect your data.</p>
          </section>

          {/* Changes to This Privacy Policy Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text">9. Changes to This Privacy Policy</h3>
            <p>We may update our Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          </section>

          {/* Contact Us Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-gray-600 to-blue-600 text-transparent bg-clip-text">10. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
            <p><strong>Softmore IT Solution</strong><br />
               A1B/8, Janakpuri,<br />
               New Delhi, India 110058</p>
            <p>Email: <a href="mailto:Support@softmoreit.com" className="text-blue-600 hover:underline">Support@softmoreit.com</a></p>
          </section>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-10">
            © {new Date().getFullYear()} Softmore It Solutions Pvt Ltd. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}