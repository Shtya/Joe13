"use client"
import React, { useEffect , useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Navbar from '../molecules/Navbar';



export default function Layout({children}) {
	const [isclick , setisclick] = useState(false)
	const handleClick = () => {
		setisclick(!isclick)
	  }


	useEffect(() => {
		AOS.init({
			offset: 0,
		  duration: 1000, 
		  easing: 'ease-in-out', 
		  once: false, 
		});
	  }, []);


  return (
	<main className="overflow-x-hidden" >
		<Navbar isclick={isclick} handleClick={handleClick} />
		<div className={`relative ${isclick ? "left-[250px]" : "left-0"}  duration-300 transition-all `} > {children} </div>
		{isclick && <div onClick={handleClick} className='bg-black bg-opacity-70 w-screen h-screen fixed top-0  '></div>}
		{/* <WhatsApp /> */}
	</main>
  )
}
