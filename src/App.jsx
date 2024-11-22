import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.css";

const App = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  useEffect(() => {
    const calculateElapsedTime = () => {
      const startDate = new Date("2021-08-08"); // Substitua pela data desejada
      const today = new Date();

      let years = today.getFullYear() - startDate.getFullYear();
      let months = today.getMonth() - startDate.getMonth();
      let days = today.getDate() - startDate.getDate();

      if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      setTimeElapsed({ years, months, days });
    };

    calculateElapsedTime();
  }, []);

  return (
    <div className="app">
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="swiper-container"
        >
          <SwiperSlide>
            <img src="/4.jpg" alt="Foto 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/5.jpg" alt="Foto 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/6.jpg" alt="Foto 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/7.jpg" alt="Foto 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/19.jpg" alt="Foto 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/25.jpg" alt="Foto 3" />
          </SwiperSlide>
          
        </Swiper>
      </div>

      <div className="text-container">
        <p>
          Queria ter palavras para descrever meu sentimento por você, assim como queria ter palavras para te agradecer
          por todos os dias, meses e anos juntos. Tudo começou do nada e hoje você pra mim é TUDO. Obrigado por tudo, e por tanto!
        </p>
        <p>
       <strong> Eu te amo DEMAIS, cara!</strong>
        </p>
      </div>

      <div className="counter-container">
      <h2>Desde o melhor reencontro:</h2>
      <div className="counter">
        <span className="counter-item">
          <i className="heart-icon">❤️</i>
          <strong>{timeElapsed.years}</strong> Anos
        </span>
        <span className="counter-item">
          <i className="heart-icon">❤️</i>
          <strong>{timeElapsed.months}</strong> Meses
        </span>
        <span className="counter-item">
          <i className="heart-icon">❤️</i>
          <strong>{timeElapsed.days}</strong> Dias
        </span>
      </div>
</div>

    </div>
  );
};

export default App;



