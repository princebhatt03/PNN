import React, { useEffect } from 'react';
import profile from '../../assets/images/Profile-Image1.jpg';
import resume from '../../assets/docs/Nidhi-Navandar-Resume.pdf';

const Hero = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/particles.min.js'; // Make sure it's placed in /public
    script.onload = () => {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: { value: '#000000' },
          shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 5 },
            image: { src: 'img/github.svg', width: 100, height: 100 },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#000000',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true,
          },
          modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: { distance: 200 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: '#ffffff', // override in container style
          background_image: '',
          background_position: '50% 50%',
          background_repeat: 'no-repeat',
          background_size: 'cover',
        },
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative h-screen  bg-[#f7f7f7] text-[#002057] flex items-center justify-center">
      {/* Particles background */}
      <div
        id="particles-js"
        className="absolute top-0 left-0 w-full h-full z-0"></div>

      {/* Content */}
      <div className="container relative mt-14 z-10 px-4 py-16 flex justify-center flex-col-reverse sm:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="text-center sm:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            <span className="text-[#FF7B00]">Nidhi Navandar</span>
          </h1>
          <p className="text-lg leading-relaxed text-[#002057] mb-6">
            Computer engineering graduate with a PG Diploma in Big Data
            Analytics. Passionate about{' '}
            <span className="text-[#FF7B00] font-semibold">data science</span>,
            Python development, and solving real-world problems using emerging
            technologies.
          </p>
          <a
            href={resume}
            download
            className="inline-block bg-[#FF7B00] hover:bg-[#011AFF] text-white px-6 py-2 rounded-full font-semibold transition duration-200">
            View Resume
          </a>
        </div>

        {/* Profile Image */}
        <div className="w-56 h-56 sm:w-72 sm:h-72">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-full h-full object-cover border-4 border-[#002057] shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
