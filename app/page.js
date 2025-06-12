import Chat from "@/components/section/home/Chat";
import ClientReview from "@/components/section/home/ClientReview";
import Hero from "@/components/section/home/Hero";
import Summery from "@/components/section/home/Summery";
import WebAbout from "@/components/section/home/WebAbout";
import WebProcess from "@/components/section/home/WebProcess";
import Work from "@/components/section/home/Work";

const Home = () => {


  return (
    <div className="font-poppins">
 
      <Hero />
      <Summery />
      <WebAbout />
      <Work />
      <WebProcess />
      <ClientReview />
     <Chat />
    </div>
  );
};

export default Home;
