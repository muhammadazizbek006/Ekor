import React from 'react';
// img
import company from '../../imgs/AboutCompany/company.png'

const About = () => {
  return (
    <section className='pt-10 pb-20'>
      <div className="containerb relative"> {/* Video va rasmni joylashtirish uchun relative position */}
        <h2 className='text-50 font-semibold text-head mb-10'>О компании</h2>
        <div className="relative w-full h-0 pb-[56.25%]"> {/* Video konteyneri */}
          <iframe
            className="absolute rounded-2xl top-0 left-0 w-full h-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aQlkVB9LZPk?si=tRDYbhtOWmhgqBoI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <img 
            src={company} 
            alt="Overlay" 
            className="absolute rounded-2xl  w-full h-full object-cover pointer-events-none" 
          />
        </div>
      </div>
    </section>
  );
}

export default About;
