import React from 'react'


const SpeakersCard = ( props ) => {
    return (
            <div className="flex justify-center items-center w-full  py-8 ">
                <div className="overflow-hidden text-center h-[320px] w-[250px]  bg-white rounded-[26px] shadow-lg shadow-bgshadow relative flex flex-col  text-sm">
                    <div className='relative w-full min-h-[65%] bg-[#D9D9D9] flex flex-col justify-center items-center  '>
                        <img
                            src={props.image}
                            alt={props.name}
                            contain
                            className='select-none object-cover'
                        />
                    </div>
                    <div className="flex flex-col items-start mt-2  gap-1 px-8 ">
                        <h1 className='text-3xl font-semibold select-none'>{props.name}</h1>
                        <p className=' text-justify text-sm font-light select-none'>{props.description}</p>
                    </div>
                </div>
            </div>
    )
}
export default SpeakersCard