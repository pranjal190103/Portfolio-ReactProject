import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt nulla accusamus ratione mollitia cumque placea,reiciendis voluptatum reprehenderit sint et illum veniam aliquid omnis, fugit, sed ducimus delectus tempora nam?",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt nulla accusamus ratione mollitia cumque placea,reiciendis voluptatum reprehenderit sint et illum veniam aliquid omnis, fugit, sed ducimus delectus tempora nam?",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt nulla accusamus ratione mollitia cumque placea,reiciendis voluptatum reprehenderit sint et illum veniam aliquid omnis, fugit, sed ducimus delectus tempora nam?",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Nesciunt nulla accusamus ratione mollitia cumque placea,reiciendis voluptatum reprehenderit sint et illum veniam aliquid omnis, fugit, sed ducimus delectus tempora nam?",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptoinal Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)", left:'50rem', top:'28rem'}}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" , left:'18rem',top:'13rem'}}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonials">
                <img src={client.img} alt="a client" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
