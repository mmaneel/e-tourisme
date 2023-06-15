import React, { useEffect, useState } from 'react';
import SpeakersCard from './SpeakersCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper';

import 'swiper/swiper.css';
// import 'swiper/css/navigation';


//import { useWindowSize } from '@/hooks/WindowSize';

const Actualites = () => {
	// const windowSize = useWindowSize();
	const [mediaState, setMediaState] = useState('xl');
    

	// useEffect(() => {
	// 	if (!windowSize.width) return;
	// 	if (windowSize.width > 1280) setMediaState('xl');
	// 	else if (windowSize.width > 1024) setMediaState('lg');
	// 	else if (windowSize.width > 768) setMediaState('md');
	// 	else setMediaState('sm');
	// }, [windowSize.width]);

    const myStyle ={ 
        backgroundImage:"url('/actualite-bg.svg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    const myStyle2 ={ 
        backgroundImage:"url('/bgActualites2.svg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

	return (
        <div className='flex flex-col relative'>
			<div className='absolute top-0 left-0'>
            	<img src='/ligne.png' ></img>
            </div>
			<div className='absolute bottom-10 left-0'>
            	<img src='/ligne1.png' ></img>
            </div>
			<div className='absolute bottom-14 right-0'>
            	<img src='/ligne2.png' ></img>
            </div>
            <div className='w-full h-72 -mb-24 flex flex-col ' style={myStyle}>
                 <div className='flex flex-row mb-20 items-end h-full w-full justify-between px-56'>
                    <p className='font-bold text-3xl leading-10'>Actualités</p>
                    <div className='flex flex-row justify-between items-center gap-2'>
                        <img src='/plusIcon.svg' height='30px' width='30px'></img>
                        <p className='font-normal text-xl'>Plus</p>
                    </div>
                 </div>
            </div>
			<div className='flex justify-center items-center mb-10'>
				<div className='relative flex justify-center items-center py-5 w-full lg:w-[90%] m-auto'>
					<button
						id='news-swiper-button-prev'
						className='absolute flex items-center justify-center -left-0 top-1/2 -translate-y-1/2 z-10 p-3 md:p-4 bg-white shadow-xl rounded-2xl w-20 md:w-12 aspect-square'
					>
						<div className='relative w-2/3 flex items-center justify-center'>
							<img
								src='/arrow.svg'
								alt='Navigation Arrow'
								fill
								className='object-contain'
							/>
						</div>
					</button>
					<Swiper
						className='w-[80%] flex items-center justify-center py-2'
						wrapperClass='swiper-wrapper items-center'
						modules={[Navigation, A11y, Pagination, Autoplay]}
						loop
						centeredSlides
						slidesPerView={ 3 }
                        pagination={{
                            el: '.swiper-pagination',
			                clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + 'g' + '</span>';
                            },
                          }}
                        
                        spaceBetween={6}
						navigation={{
							nextEl: '#news-swiper-button-next',
							prevEl: '#news-swiper-button-prev',
						}}
					>
						{/* {speakers.map((speaker, index) => ( */}
							<SwiperSlide key={1}>
								{({ isActive }) => (
									<SpeakersCard active={isActive} name='df' image='/logo192.png' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. "/>
								)}
							</SwiperSlide>
                            <SwiperSlide key={2}>
								{({ isActive }) => (
									<SpeakersCard active={isActive} name='df' image='/logo192.png' description="sfsdf"/>
								)}
							</SwiperSlide>
                            <SwiperSlide key={3}>
								{({ isActive }) => (
									<SpeakersCard active={isActive} name='df' image='/logo192.png' description="sfsdf"/>
								)}
							</SwiperSlide>
                            <SwiperSlide key={4}>
								{({ isActive }) => (
									<SpeakersCard active={isActive} name='df' image='/logo192.png' description="sfsdf"/>
								)}
							</SwiperSlide>
						{/* ))} */}
					</Swiper>
					<button
						id='news-swiper-button-next'
						className='absolute -right-0 top-1/2 -translate-y-1/2 z-10 p-3 md:p-4 bg-white shadow-xl rounded-2xl w-20 md:w-12 aspect-square'
					>
						<div className='relative w-2/3 flex items-center justify-center'>
							<img
								src='/arrow.svg'
								alt='Navigation Arrow'
								fill
								className='object-contain translate-x-0.5 rotate-180'
							/>
						</div>
					</button>
				</div>
			</div>
            <div className='flex flex-row  items-end h-full w-full justify-between px-56'>
                    <p className='font-bold text-3xl leading-10'>Lieux populaires</p>
                    <div className='flex flex-row justify-between items-center gap-2'>
                        <img src='/plusIcon.svg' height='30px' width='30px'></img>
                        <p className='font-normal text-xl'>Plus</p>
                    </div>
                 </div>
            <div className='flex justify-center items-center mb-10'>
				<div className='relative flex justify-center items-center py-5 w-full lg:w-[90%] m-auto'>
					<button
						id='places-swiper-button-prev'
						className='absolute flex items-center justify-center -left-0 top-1/2 -translate-y-1/2 z-10 p-3 md:p-4 bg-white shadow-xl rounded-2xl w-20 md:w-12 aspect-square'
					>
						<div className='relative w-2/3 flex items-center justify-center'>
							<img
								src='/arrow.svg'
								alt='Navigation Arrow'
								fill
								className='object-contain'
							/>
						</div>
					</button>
					<Swiper
						className='w-[80%] flex items-center justify-center py-2'
						wrapperClass='swiper-wrapper items-center'
						modules={[Navigation, A11y, Pagination, Autoplay]}
						loop
						centeredSlides
						slidesPerView={ 3 }
                        pagination={{
                            el: '.swiper-pagination',
			                clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + 'g' + '</span>';
                            },
                          }}
                        
                        spaceBetween={6}
						navigation={{
							nextEl: '#places-swiper-button-next',
							prevEl: '#places-swiper-button-prev',
						}}
					>
						{/* {speakers.map((speaker, index) => ( */}
							<SwiperSlide key={1}>
								{({ isActive }) => (
									<SpeakersCard active={isActive} name='df' image='/logo192.png' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. "/>
								)}
							</SwiperSlide>
                            <SwiperSlide key={2}>
								{({ isActive }) => (
									<SpeakersCard active={isActive} name='df' image='/logo192.png' description="sfsdf"/>
								)}
							</SwiperSlide>
                            <SwiperSlide key={3}>
								{({ isActive }) => (
									<SpeakersCard active={isActive} name='df' image='/logo192.png' description="sfsdf"/>
								)}
							</SwiperSlide>
                            <SwiperSlide key={4}>
								{({ isActive }) => (
									<SpeakersCard active={isActive} name='df' image='/logo192.png' description="sfsdf"/>
								)}
							</SwiperSlide>
						{/* ))} */}
					</Swiper>
					<button
						id='places-swiper-button-next'
						className='absolute -right-0 top-1/2 -translate-y-1/2 z-10 p-3 md:p-4 bg-white shadow-xl rounded-2xl w-20 md:w-12 aspect-square'
					>
						<div className='relative w-2/3 flex items-center justify-center'>
							<img
								src='/arrow.svg'
								alt='Navigation Arrow'
								fill
								className='object-contain translate-x-0.5 rotate-180'
							/>
						</div>
					</button>
				</div>
			</div>
            <div className='w-full h-72 -mt-40' style={myStyle2}></div>
        </div>
	);
};

export default Actualites;
