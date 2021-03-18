import React from 'react'
import './Testimonials.css'
import { Swiper, SwiperSlide,} from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, EffectCoverflow } from 'swiper/core';
import 'swiper/swiper.scss';
import User1 from '../Pages/Images/3.jpg'
import User2 from '../Pages/Images/4.jpg'
import User3 from '../Pages/Images/6.jpg'
import User4 from '../Pages/Images/21.jpg'
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Scrollbar,EffectCoverflow ]);

 export const Testimonials = () => {



return(
    <Swiper
    
      grabCursor= {true}
      centeredSlides= {true}
      slidesPerView = 'auto'
    scrollbar={{ draggable: true }}
       loop={true}
   navigation= {{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
   
      >



                <div className='testimonials-body'>
                  
                    <div className='testimonials'>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">

                  
                              <SwiperSlide><div className="swiper-slide">
                                <div className='card'>
                                  <div className='layer'> </div>
                                  <div className='content'>
                                    <p>"Lorem ipsum dolor sit amet consectetur 
                                      adipisicing elit. Maiores nobis saepe eum 
                                      exercitationem consectetur mollitia sint, et asperiores,
                                       autem voluptatum perferendis, 
                                      esse quis accusamus qui quae! Tempore adipisci ipsa tenetur!"</p>
                                      <div className='imgBx'>
                                        <img src={User1} alt='testimonial user'></img>
                                      </div>
                                      <div className='details'>
                                            <h2>Someone Famous<br/> 
                                            <span> Website designer</span></h2>
                                      </div>
                                  </div>
                                </div>
                              </div>
                         </SwiperSlide>


                              <SwiperSlide><div class="swiper-slide">
                                <div className='card'>
                                  <div className='layer'> </div>
                                  <div className='content'>
                                    <p>"Lorem ipsum dolor sit amet consectetur 
                                      adipisicing elit. Maiores nobis saepe eum 
                                      exercitationem consectetur mollitia sint, et asperiores,
                                       autem voluptatum perferendis, 
                                      esse quis accusamus qui quae! Tempore adipisci ipsa tenetur!"</p>
                                      <div className='imgBx'>
                                        <img src={User2} alt='testimonial-user'></img>
                                      </div>
                                      <div className='details'>
                                            <h2>Someone Famous<br/> 
                                            <span> Website designer</span></h2>
                                      </div>
                                  </div>
                                </div>
                              </div></SwiperSlide>

                                <SwiperSlide><div class="swiper-slide">
                                <div className='card'>
                                  <div className='layer'> </div>
                                  <div className='content'>
                                    <p>"Lorem ipsum dolor sit amet consectetur 
                                      adipisicing elit. Maiores nobis saepe eum 
                                      exercitationem consectetur mollitia sint, et asperiores,
                                       autem voluptatum perferendis, 
                                      esse quis accusamus qui quae! Tempore adipisci ipsa tenetur!" </p>
                                     <div className='imgBx'>
                                        <img src={User3} alt='testimonial-user'></img>
                                      </div>
                                      <div className='details'>
                                            <h2>Someone Famous<br/> 
                                            <span> Website designer</span></h2>
                                      </div>
                                  </div>
                                </div>
                              </div></SwiperSlide>

                                  <SwiperSlide><div class="swiper-slide">
                                <div className='card'>
                                  <div className='layer'> </div>
                                  <div className='content'>
                                    <p>"Lorem ipsum dolor sit amet consectetur 
                                      adipisicing elit. Maiores nobis saepe eum 
                                      exercitationem consectetur mollitia sint, et asperiores,
                                       autem voluptatum perferendis, 
                                      esse quis accusamus qui quae! Tempore adipisci ipsa tenetur!"</p>
                                      <div className='imgBx'>
                                        <img src={User4} alt='testimonial-user'></img>
                                      </div>
                                      <div className='details'>
                                            <h2>Someone Famous<br/> 
                                            <span> Website designer</span></h2>
                                      </div>
                                  </div>
                                </div>
                              </div></SwiperSlide>
                   
       </div>            
        </div>
             </div>
                 </div>
                  <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
                 </Swiper>
    )
}

export default Testimonials
