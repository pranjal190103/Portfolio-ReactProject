import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper , SwiperSlide } from 'swiper/react' ;
import MovieLand from '../../img/movieLand.jpg';
import Weather from '../../img/weather.jpg';
import ExpenseTracker from '../../img/expenseTracker.jpg';
import FoodApp from '../../img/foodApp.jpg';
import 'swiper/css'
import { themeContext } from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
  const darkMode= theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>

        {/* heading */}
        <span style={{color:darkMode?'white':''}}>Recent Projects</span>
        <span>Portfolio</span>
        {/* slider */}
    
    <Swiper
     spaceBetween={-10}
     slidesPerView={3}
     grabCursor={true}
     className='portfolio-slider'
     >
        <SwiperSlide>
            <img src={MovieLand} alt="sidebar" />
        </SwiperSlide>
         
        <SwiperSlide>
            <img src={Weather} alt="ecommerce" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img src={ExpenseTracker} alt="hoc" />
        </SwiperSlide>

        <SwiperSlide>
            <img src={FoodApp} alt="musicapp" />
        </SwiperSlide>

    </Swiper>

    </div>
    )
}

export default Portfolio