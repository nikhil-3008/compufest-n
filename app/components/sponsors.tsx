import React from 'react';
import '../../global.css'; // Assuming this is where your global styles are

const logos = [
  'Sponsors logo/1.png',
  'Sponsors logo/2.png',
  'Sponsors logo/3.png',
  'Sponsors logo/5.png',
  'Sponsors logo/6.png',
  'Sponsors logo/7.png',
  
];

const Sponsors = () => {
  return (
    <div className="py-6 z-10  text-transparent  cursor-default text-edge-outline animate-title  whitespace-nowrap bg-clip-text">
      <div className="justify-items-center mb-10 lg:mb-0">
    
      {/* <p className="text-3xl text-center font-sans text-white font-extrabold">In Colabration With </p>
      <p className="text-2xl text-center font-sans text-white leading-10 mt-8">Microsoft Learn Student Ambassador Program @Microsoft</p>
      <p className="text-2xl text-center font-sans text-white leading-10">DevBridge Community</p>
      <p className="text-2xl text-center font-sans text-white leading-10 mb-[60px]">MLSA-USAR Chapter, GGSIPU, EDC.</p> */}
      
      <p className="text-3xl text-center font-sans text-white font-extrabold ">Sponsored By </p>
        <div className="lg:flex lg:flex-row ">
          <div className="lg:flex lg:flex-wrap grid grid-rows-3 grid-flow-col gap-4 p-6">
            {logos.map((logo, index) => (
              <img key={index} src={logo} className='h-36 w-36  ' alt={`Logo ${index}`} />
            ))}

          </div>
          <div className='flex justify-center lg:mt-5'>
            <img src='Sponsors logo/8.png' className='h-36 w-36'/>
          </div>
        </div >
      </div>
    </div>
  );
};

export default Sponsors;
