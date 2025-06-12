import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleCheckBig } from "lucide-react";

export function AccordionDemo({display}) {
   const accordingtext = [
    {
      title: "Web Design",
      describe:
        "Discover visually stunning and functional web designs that enhance user experience and align with your business goals. Our designs ensure compatibility and accessibility across all platforms.",
      color: "text-rose-600",
    },
    {
      title: "User Experience (UX) Design",
      describe:
        "Craft seamless and intuitive user experiences that keep your audience engaged. We focus on user-centric designs that simplify navigation and improve satisfaction.",
      color: "text-blue-600",
    },
    {
      title: "User Interface (UI) Design",
      describe:
        "Create visually appealing and interactive interfaces that captivate users. Our UI designs are tailored to reflect your brand identity and ensure usability.",
      color: "text-green-600",
    },
    {
      title: "Wireframing & Prototyping",
      describe:
        "Develop detailed wireframes and prototypes to visualize your ideas and streamline the design process. Our approach ensures clarity and precision in every step.",
      color: "text-yellow-600",
    },
    {
      title: "Responsive Design",
      describe:
        "Ensure your website looks and functions perfectly on all devices, including desktops, tablets, and mobile phones. Our responsive designs adapt seamlessly to different screen sizes.",
      color: "text-purple-600",
    },
    {
      title: "Information Architecture",
      describe:
        "Organize and structure your website content effectively to improve usability and navigation. We design layouts that guide users to the information they need effortlessly.",
      color: "text-indigo-600",
    },
    {
      title: "Visual Design",
      describe:
        "Enhance your brand's visual appeal with creative and modern design elements. From typography to color schemes, we ensure every detail aligns with your brand identity.",
      color: "text-pink-600",
    },
    {
      title: "Interaction Design",
      describe:
        "Design interactive elements that engage users and create memorable experiences. Our focus is on delivering designs that encourage user interaction and drive conversions.",
      color: "text-teal-600",
    },
  ];

  return (
    <Accordion type="single"  collapsible className="w-full px-3 mt-10 md:px-10">
      {accordingtext?.map((item, index) => {
        return (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger className={`font-bold text-lg ${item?.color}`} display={display}>
              {item?.title}
            </AccordionTrigger>
            <AccordionContent className="text-left">
             {item?.describe}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
