import React from "react";
import Headerone from "../components/Headerone";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import Features from "../components/Features";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <div className="md:px-[10rem] space-y-[4rem] px-[1rem]">
        <Headerone heading={"K store"} />
        
       
       
      </div>
      <div className='bg-[#f2e6ff] md:px-[10rem] py-[3rem] my-[1rem] px-[2rem] '>
        <Features/>
      </div>

      <div className="px-[10rem] space-y-[4rem] py-[5rem]">
      <Services />
      </div>
      <div className='bg-[#f2e6ff] md:px-[10rem] py-[4rem] my-[4rem] px-[2rem] '>
      
        <Trusted/>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
