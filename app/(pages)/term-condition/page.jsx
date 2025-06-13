import React from "react";
import { motion } from 'framer-motion';

export const metadata = {
  // Page title for the browser tab and search results
  title: "Terms and Conditions - Softmore IT Solution",

  // Meta description for search engine snippets
  description: "Terms and Conditions governing the use of services provided by Softmore IT Solution, a website designing and digital marketing company.",

  // Canonical URL to prevent duplicate content issues
  alternates: {
    canonical: "https://www.softmoreit.co.in/terms-conditions",
  },

};

export default function TermsPage() {
  return (
    <>
 

      <main className="p-6 max-w-5xl mx-auto text-gray-800">
        <div
          className="space-y-6"
        >
          {/* Page Title */}
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 text-transparent bg-clip-text lg:text-5xl">Terms and Conditions</h2>

          {/* Introduction Section */}
          <section className="space-y-4">
            <p className="text-sm">
              These Terms and Conditions ("Terms," "Agreement") govern your access to and use of the services provided by <strong className='bg-gradient-to-r from-rose-600 to-indigo-600 text-transparent bg-clip-text '>Softmore IT Solution</strong> ("Company," "we," "us," or "our"), a website designing and digital marketing company based in Delhi, India.
            </p>
            <p className="text-sm">
              By accessing our website, engaging our services, or signing any project proposal or agreement with us, you ("Client," "you," or "your") agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
            </p>
            <p className="text-sm">
              <strong>Effective Date:</strong> June 7, 2025
            </p>
          </section>

          {/* 1. Services Provided Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-pink-600 to-indigo-600 text-transparent bg-clip-text">1. Services Provided</h3>
            <p>Softmore IT Solution offers a range of website designing and digital marketing services, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Website Design and Development (e.g., custom website builds, redesigns, e-commerce solutions)</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Search Engine Marketing (SEM) / Paid Advertising (e.g., Google Ads, social media advertising)</li>
              <li>Social Media Marketing and Management</li>
              <li>Content Creation (e.g., website copy, blog posts, graphic design)</li>
              <li>Branding and Identity Design</li>
              <li>Website Maintenance and Support</li>
            </ul>
            <p>The specific services, deliverables, scope, and timeline for each project will be detailed in a separate Project Proposal or Statement of Work (SOW), which, upon acceptance by the Client, shall be incorporated by reference into these Terms.</p>
          </section>

          {/* 2. Client Responsibilities Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">2. Client Responsibilities</h3>
            <p>To ensure the timely and successful delivery of services, the Client agrees to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Provide Content:</strong> Timely provide all necessary text, images, logos, videos, branding guidelines, and other project-related content in the agreed-upon format. Delays in content provision may impact project timelines and incur additional costs.</li>
              <li><strong>Timely Feedback and Approvals:</strong> Provide prompt and constructive feedback and approvals at various stages of the project (e.g., design mockups, content drafts, development milestones).</li>
              <li><strong>Accuracy of Information:</strong> Ensure that all information, data, and content provided to Softmore IT Solution are accurate, and complete, and do not infringe upon any third-party intellectual property rights or applicable laws.</li>
              <li><strong>Access and Credentials:</strong> Grant Softmore IT Solution necessary access to existing accounts (e.g., website hosting, domain registrar, analytics, social media platforms, CMS logins) as required for the execution of services. The Client is responsible for securing these credentials.</li>
              <li><strong>Cooperation:</strong> Cooperate with Softmore IT Solution's team throughout the project, providing necessary information and decisions as reasonably requested.</li>
            </ul>
          </section>

          {/* 3. Payment Terms Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-green-600 to-indigo-600 text-transparent bg-clip-text">3. Payment Terms</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Fees:</strong> All fees for services will be clearly outlined in the Project Proposal or SOW.</li>
              <li><strong>Payment Schedule:</strong> Payments are typically structured as follows:
                <ul className="list-circle pl-6 mt-1 space-y-1">
                  <li>An upfront deposit (e.g., 50% of the total project fee) is required before work commences.</li>
                  <li>Milestone payments may be required at key stages of the project as agreed in the SOW.</li>
                  <li>The final payment is due upon completion of the project, prior to website launch or final delivery of digital marketing assets.</li>
                </ul>
              </li>
              <li><strong>Invoicing:</strong> Invoices will be issued according to the agreed payment schedule and are payable within [e.g., 7, 15, 30] days of the invoice date.</li>
              <li><strong>Late Payments:</strong> Invoices not paid by the due date may be subject to a late payment charge of [e.g., 2%] per month or the maximum permissible by law, compounded daily, until paid in full. Softmore IT Solution reserves the right to suspend work, withhold deliverables, or take down websites until all outstanding payments are received.</li>
              <li><strong>Additional Expenses:</strong> Any additional expenses incurred during the project (e.g., premium stock images, third-party software licenses, advertising budgets, complex revisions outside scope, travel) will be communicated to and approved by the Client in advance and billed separately.</li>
            </ul>
          </section>

          {/* 4. Intellectual Property Rights Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-emerald-600 to-indigo-600 text-transparent bg-clip-text">4. Intellectual Property Rights</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Client Content:</strong> The Client warrants that all content, materials, and intellectual property provided to Softmore IT Solution for use in the project are owned by the Client or that the Client has obtained all necessary licenses, permissions, and rights to use them. The Client agrees to indemnify Softmore IT Solution against any claims arising from the use of such materials.</li>
              <li><strong>Softmore IT Solution Deliverables:</strong> Upon full and final payment of all agreed-upon fees, Softmore IT Solution will assign all intellectual property rights (including copyright) in the final website design, code, graphics, and other unique deliverables specifically created for the Client under the SOW to the Client.</li>
              <li><strong>Retained Rights:</strong> Softmore IT Solution retains the right to use the completed project in its portfolio and for promotional purposes. Softmore IT Solution also retains ownership of any proprietary tools, methodologies, pre-existing code, frameworks, or generic components used in the development process that are not unique to the Client's project.</li>
              <li><strong>Third-Party Licenses:</strong> Any third-party themes, plugins, stock assets, or software used in the project may be subject to their own respective licenses, and the Client agrees to comply with those licenses.</li>
            </ul>
          </section>

          {/* 5. Revisions and Change Control Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-teal-600 to-indigo-600 text-transparent bg-clip-text">5. Revisions and Change Control</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Included Revisions:</strong> The Project Proposal or SOW will specify the number of design and/or content revisions included in the quoted price for each stage of the project.</li>
              <li><strong>Changes Outside Scope:</strong> Any requests for changes, additions, or new features that fall outside the defined scope of work in the agreed-upon Project Proposal or SOW will be considered a "Change Request."
                <ul className="list-circle pl-6 mt-1 space-y-1">
                  <li>Change Requests must be submitted in writing.</li>
                  <li>Softmore IT Solution will provide a revised quote and timeline for the Change Request.</li>
                  <li>Work on the Change Request will only commence upon the Client's written approval and payment of any associated deposit for the changes.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* 6. Project Timelines and Delays Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-orange-600 to-indigo-600 text-transparent bg-clip-text">6. Project Timelines and Delays</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Project Schedule:</strong> Softmore IT Solution will make every reasonable effort to complete projects within the estimated timelines outlined in the SOW.</li>
              <li><strong>Client Delays:</strong> Project timelines are contingent on the Client's timely provision of content, feedback, approvals, and payments. Delays caused by the Client (e.g., late content, delayed approvals, outstanding payments) may result in the extension of project deadlines and may incur additional charges for time lost or resources reallocated.</li>
              <li><strong>Force Majeure:</strong> Neither party shall be liable for any delay or failure in performance due to causes beyond their reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, labor disputes, epidemics, pandemics, government regulations, power failures, or natural disasters ("Force Majeure Event").</li>
            </ul>
          </section>

          {/* 7. Confidentiality Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-yellow-600 to-indigo-600 text-transparent bg-clip-text">7. Confidentiality</h3>
            <p>Both Softmore IT Solution and the Client agree to keep confidential all non-public information and documentation shared during the course of the project, including but not limited to business strategies, technical specifications, client data, and proprietary methodologies. This obligation of confidentiality shall survive the termination of this Agreement.</p>
          </section>

          {/* 8. Warranties and Disclaimers Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">8. Warranties and Disclaimers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Softmore IT Solution's Warranties:</strong> We warrant that our services will be performed in a professional and workmanlike manner, in accordance with generally accepted industry standards.</li>
              <li><strong>Client Warranties:</strong> The Client warrants that they have the legal authority to enter into this Agreement and that all content and materials provided to Softmore IT Solution do not infringe upon any third-party rights.</li>
              <li><strong>Disclaimers:</strong>
                <ul className="list-circle pl-6 mt-1 space-y-1">
                  <li>Softmore IT Solution does not warrant that the functions contained in any website design or digital marketing campaign will be uninterrupted, error-free, or meet the Client's specific expectations for traffic, rankings, or sales unless explicitly guaranteed in the SOW.</li>
                  <li>Softmore IT Solution is not responsible for any downtime, technical issues, or performance problems related to third-party hosting providers, domain registrars, or other external services chosen or managed by the Client.</li>
                  <li>We make no guarantees regarding specific search engine rankings or sales outcomes, as these are influenced by numerous external factors beyond our control.</li>
                </ul>
              </li>
            </ul>
          </section>

          {/* 9. Limitation of Liability Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text">9. Limitation of Liability</h3>
            <p>To the maximum extent permitted by applicable law, in no event shall Softmore IT Solution, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>
            <p>Softmore IT Solution's total aggregate liability arising out of or in connection with these Terms or any Project Proposal/SOW shall not exceed the total fees paid by the Client to Softmore IT Solution for the specific services giving rise to the claim during the six (6) months preceding the event giving rise to the liability.</p>
          </section>

          {/* 10. Indemnification Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-gray-600 to-blue-600 text-transparent bg-clip-text">10. Indemnification</h3>
            <p>The Client agrees to defend, indemnify, and hold harmless Softmore IT Solution and its employees, contractors, agents, officers, and directors from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of (a) your use and access of the Service, by you or any person using your account and password; (b) a breach of these Terms, including but not limited to Client's responsibilities for content, intellectual property rights, and adherence to third-party terms.</p>
          </section>

          {/* 11. Termination Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-red-600 to-purple-600 text-transparent bg-clip-text">11. Termination</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Termination by Client:</strong> The Client may terminate any project or ongoing service by providing written notice of [e.g., 30 days]. The Client will be invoiced for all work completed up to the date of termination, and any outstanding payments will become immediately due.</li>
              <li><strong>Termination by Softmore IT Solution:</strong> We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms or fail to make timely payments.</li>
              <li><strong>Effect of Termination:</strong> Upon termination, your right to use the services will immediately cease. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</li>
            </ul>
          </section>

          {/* 12. Governing Law and Dispute Resolution Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">12. Governing Law and Dispute Resolution</h3>
            <p>These Terms shall be governed and construed in accordance with the laws of Delhi, India, without regard to its conflict of law provisions.</p>
            <p>Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach, termination, or invalidity thereof, shall be first attempted to be resolved amicably through good faith negotiations between the parties. If an amicable resolution is not reached within [e.g., 30] days, the dispute shall be referred to and finally resolved by arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996 (as amended) of India. The seat of arbitration shall be Delhi, India, and the language of the arbitration shall be English. The decision of the arbitrator(s) shall be final and binding on both parties.</p>
          </section>

          {/* 13. Force Majeure Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-orange-600 to-yellow-600 text-transparent bg-clip-text">13. Force Majeure</h3>
            <p>Neither party will be liable for any failure or delay in performance under these Terms (other than for delays in the payment of money due and payable) for causes beyond that party's reasonable control and occurring without that party's fault or negligence, including, but not limited to, acts of God, acts of government, flood, fire, earthquakes, civil unrest, acts of terror, strikes or other labor problems, computer attacks or malicious acts, such as attacks on or through the internet, any internet service provider, telecommunications carrier or hosting facility, but in every such case, the delayed party must use its best efforts to cure the delay as soon as possible and must provide prompt notice to the other party of the cause of the delay.</p>
          </section>

          {/* 14. Entire Agreement Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">14. Entire Agreement</h3>
            <p>These Terms, together with any executed Project Proposals or Statements of Work, constitute the entire agreement between Softmore IT Solution and the Client concerning the services and supersede all prior or contemporaneous communications, proposals, and agreements, whether oral or written.</p>
          </section>

          {/* 15. Severability Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-teal-600 to-gray-600 text-transparent bg-clip-text">15. Severability</h3>
            <p>If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
          </section>

          {/* 16. Contact Us Section */}
          <section className="bg-white rounded-xl shadow-md p-4 space-y-4">
            <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">16. Contact Us</h3>
            <p>If you have any questions about these Terms and Conditions, please contact us:</p>
            <p><strong>Softmore IT Solution</strong><br />
               A1B/8, Janakpuri,<br />
               New Delhi, India 110058</p>
            <p>Email: <a href="mailto:Support@softmoreit.com" className="text-blue-600 hover:underline">Support@softmoreit.com</a></p>
            <p>Phone: +91-9266474766</p>
          </section>

          {/* Footer */}
          <p className="text-center text-xs text-gray-500 mt-10">
            © {new Date().getFullYear()} Softmore IT Solution. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}