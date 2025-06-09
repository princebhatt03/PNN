import React from 'react';
import profile from '../../assets/images/Profile-Image1.jpg';
import resume from '../../assets/docs/Nidhi-Navandar-Resume.pdf';
import Slider from 'react-slick';

const ImageList = [
  {
    id: 1,
    img: profile,
    title: 'Nidhi Navandar',
    description:
      'Computer engineering graduate with a PG Diploma in Big Data Analytics. Passionate about data science, Python development, and solving real-world problems using emerging technologies.',
  },
  {
    id: 2,
    img: profile,
    title: 'Big Data & Machine Learning',
    description:
      'Proficient in Python, SQL, Hadoop, Spark, and ML algorithms. Experienced with building scalable analytics models and deploying solutions using Azure & Streamlit.',
  },
  {
    id: 3,
    img: profile,
    title: 'Projects & Achievements',
    description:
      'Developed projects like Anti Money Laundering Detection, Heart Disease Prediction, and Book App. Achieved 93% ML accuracy and improved diagnosis efficiency.',
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-[8]"></div>

      {/* hero section */}
      <div className="container pb-8 pt-4 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map(data => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300">
                    <a
                      href={resume}
                      download
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-5 rounded-full inline-block">
                      View Resume
                    </a>
                  </div>
                </div>

                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10">
                    <img
                      src={data.img}
                      alt="Profile"
                      className="w-56 h-56 sm:w-80 sm:h-80 rounded-full object-cover mx-auto border-4 border-primary shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
