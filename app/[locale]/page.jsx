"use client"
import Section1 from '@/components/pages/home/Section1'
import Section2 from '@/components/pages/home/Section2';
import Section3 from '@/components/pages/home/Section3';
import Section4 from '@/components/pages/home/Section4'; 
import Text from '@/components/pages/home/Text';
import React , {useEffect} from 'react'

// import fullpage from "fullpage.js";
// import "fullpage.js/dist/fullpage.css";


export default function page() {

	const data9 =[
		{title : "HR Outsourcing service :" , desc : "Sponsorship transfer, Visa Issuing, Administration, Management, Payroll, Training, Hiring, Recruiting, Operate benefit plans, and Saudi Gosi registrations"},
		{title : "Governmental affairs :"   , desc : "Iqama (resident permit) processing, Processing of all types of Visas, Saudi Mandoob (representative) and personnel, Services- handling of legal matters, Passport office services, GOSI-related services, Medical insurance services"},
		{title : "HR Management :"          , desc : "Temporary work visa, Permits, Employee transfer service, Nationalisation plan"},
	]

	const data10 =[
		{title : "Merchandising :"    , desc : "Encompasses a holistic approach to presenting and promoting goods in a way that not only drives sales but also shapes consumer perceptions and enhances brand identity. " },
		{title : "Activation :"       , desc : "Increase client awareness of your brand by marketing it utilizing contemporary techniques and growing" , data : ["Events competitions " ,"Sales promotion" ,"Telemarketing" ,"Free product samples" ,"In-store promotions" ,"Trade shows" ,"Targeted advertisements" ,]},
		{title : "Event Management :" , desc : "Our event management service oversees planning, logistics, creative design, vendor management, on-site supervision, and post-event analysis to ensure smooth and memorable events. " , data : ["Planning: Concept to execution." ,"Logistics: Venue, transport, accommodation, equipment." ,"Design: Visual and thematic consistency." ,"Vendors: Quality services and products." ,"On-site: Event supervision." ,"Analysis: Post-event evaluations." ,]},
	]

	const data11 = ["JOE MI Our solutions streamline workflow management , optimising promoters manpower and sales operation. JoeMI enhance efficiency and enables real-time tracking for on-field promoters. " ,"ERP (powered by odoo) integrates business functions into a single platform, automating processes and providing real-time data." ,"Nos Wazeefa is an innovative job-matching application that connects individuals with tailored opportunities, simplifying the job search with personalized recommendations." ,"Elite academy provides professional football training programs designed to develop young talent and enhance their skills." ,"JoeX A specialized app for managing merchandisers and promoters, offering attendance tracking, sales monitoring, stock management, and GPS-based location tracking for streamlined operations and transparency." ,]

	// useEffect(() => {
	// 	// Initialize FullPage.js with scroll navigation
	// 	new fullpage("#fullpage", {
	// 	  licenseKey: "YOUR_LICENSE_KEY", // Add your license key (if required)
	// 	  navigation: true, // Enable navigation bullets
	// 	  navigationPosition: "right", // Position navigation bullets
	// 	  scrollingSpeed: 500, // Scroll speed in milliseconds

	// 	  autoScrolling: true, // Enable auto-scrolling
	// 	  scrollBar: true, // Use FullPage.js scrolling instead of browser scrollbar
	// 	  fitToSection: true, // Automatically fit sections to viewport
	// 	  fitToSectionDelay: 1000, // Delay before fitting to section
	// 	  responsiveWidth: 768, // Disable FullPage.js on small screens
	// 	  responsiveHeight: 600, // Disable FullPage.js on short heights
	// 	  scrollOverflow: true,
	// 	  scrollOverflowReset: true,


	// 	  parallax: true,
	// 	  parallaxOptions: { 
	// 		type: "reveal", 
	// 		percentage: 62, 
	// 		property: "translate" 
	// 	  },

	// 	  dropEffect: true,
	// 	  dropEffectOptions: { 
	// 		speed: 2300, 
	// 		color: "#F82F4D", 
	// 		zIndex: 9999 
	// 	  },
	// 	  waterEffect: false,
	// 	  waterEffectOptions: { 
	// 		animateContent: true, 
	// 		animateOnMouseMove: true 
	// 	  },
	// 	  cards: true,
	// 	  cardsOptions: { 
	// 		perspective: 100, 
	// 		fadeContent: true, 
	// 		fadeBackground: true 
	// 	  },

	// 	  credits: { enabled: false, label: '.' , position: 'right'},
	// 	  afterLoad: (origin, destination, direction) => {
	// 		console.log("Section loaded:", destination.index);
	// 	  },
	// 	});
	

	//   }, []);
  


	
	return (
	<div className="" >


        <Section1 />
		<Section2 />
		<Section3 />
		<Section4 />


		<Text  img={`/assets/imgs/section5.png`} title ={"Marketing"} description ={"Driving Growth and Engagement with Strategic Digital Marketing Solutions"} list={[ "Offline Marketing " , "Print Advertising." , "Physical Product Placement." , "Physical Product Placement." , "Digital Marketing" , "Social media management" , "SEO" , "Content Creation" , "Media production" , "Branding" , "Graphics" , "Motion graphic and visual " , "Brand Promotion and Activation" , "Bloggers & Influencers Management " , "User Generated Content (UGC)" , "Bloggers Campaign" , "Influencers Management" ]} grid={2} />
		<Text  img={`/assets/imgs/section6.png`} title ={"Software & AI"} description ={"Manage your business needs and put them into practice to deliver you the best quality available. Our Technology department is a trusted partner for businesses seeking innovative solutions"} list={[ "Web Hosting and Website Design Services." ,"Online store (E-commerce)." ,"Create mobile applications" ,"Managing and maintaining websites and applications" ,"Content management systems (CMS)" ,"Customer relationship management (CRM)" ,"A business process automation system." ,"Automated invoicing." ,"Company-facing or customer-facing web portals." ,"Bug tracking software."  ]} />
		<Text  img={`/assets/imgs/section7.png`} title ={"Masanadah"} description ={"We are insisting on success, insisting on providing a high quality"} list={["Finance Consulting Service" ,"Strategic guidance to businesses of all sizes" ,"Sustainable Growth" ,"Risk Management" ,"Financial Planning" ,"Investment Strategies" ,"Business Expansion" ]} icon={"/assets/imgs/logo2.png"} />
		<Text  img={`/assets/imgs/section8.png`} title ={"Telecoms"} description ={"A talented and professionally-trained sales team"} list={[ "Direct Sales" , "current partners: (Virgin - Red Bull mobile -Zain - Mobily)" , "Modern trade - current clients:(Virgin, Red Bull, Zain)" , "Haj & Umrah sales - with (Virgin, Mobily, Red Bull, Non-telecom sales)" , "B2B Sales - current partners: (Zain)" , "Non-telecom sales" , "B2C Sales - (Flexible Card)" , "B2B Sales - partners: (Motorola - Arab computer - In Home)" ]} />
		<Text  img={`/assets/imgs/section9.png`} title ={"Manpower & HR Solutions"} description ={"Streamlining Workforce Solutions for Optimal Business Success"} data={data9} />
		<Text  img={`/assets/imgs/section10.png`}  title ={"Merchandising, Activation and Event Management"} description ={"Increase client awareness of your brand by marketing it utilizing contemporary techniques and growin"} data={data10} />
		<Text  img={`/assets/imgs/section11.png`}  title ={"Our Products"} description ={"We Create, Innovate and Serve"} list={data11} />

	</div>
  )
}
