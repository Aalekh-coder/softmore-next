import { PhoneOutgoing } from 'lucide-react'


const Chat = () => {
  return (
    <a
     href="https://wa.me/919266474766?text=Hello%2C%20I%20am%20interested%20in%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div 
      className="z-50 fixed bottom-7 right-7 bg-blue-600 px-5 py-5 rounded-full md:bottom-10 md:right-10 lg:right-16 lg:bottom-16 lg:p-7 animate-bounce border-white shadow-lg border-[3px] ">
        <PhoneOutgoing color="white" className=''/>
      </div>
    </a>
  )
}

export default Chat