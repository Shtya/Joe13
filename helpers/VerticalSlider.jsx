import { useEffect , useState } from 'react'
import toast from 'react-hot-toast'

export default function VerticalSlider() {

	// const [countTop , setcountTop] = useState(0)
	// const [countBottom , setcountBottom] = useState(0)
	let play = true
	let countTop = 0
	let countBottom = 0
	const [currentHeight , setcurrentHeight] = useState()


	const handleScrollInside = (swiper) => {
		swiper.on('slideChangeTransitionEnd', () => {
	
			const activeSlide = document.querySelector('.swiper-slide-active');
			const slideHeight = activeSlide.clientHeight;
			const slideInnerHeight = activeSlide.scrollHeight;
			let lastScrollY = window.scrollY;
			

			
			if (activeSlide.classList.contains('footer-slide')) {
				play = false
			}
			else { play = true; }
	
			
	
			if (slideInnerHeight > slideHeight) {

				const handleWindowScroll = () => {
					console.log("fire here")
			
					const currentScrollY = window.scrollY; // Current scroll position
					const scrollDelta = currentScrollY - lastScrollY; // Difference in scroll position					const slowScrollRatio = 0.01; // 1px / 100px
					activeSlide.scrollTop += scrollDelta * slowScrollRatio;
			
					lastScrollY = currentScrollY;
				};
			
				// Add window scroll event listener
				window.addEventListener('scroll', handleWindowScroll);


	
				swiper.mousewheel.disable();
				swiper.allowTouchMove = false;
				setcurrentHeight(slideHeight)
	
				const handleInnerScroll = (event) => {
					const scrollTop = Math.ceil(activeSlide.scrollTop);
					const scrollDifference = slideInnerHeight - slideHeight;
	
					if (scrollTop === 0) {
						countTop +=1
						activeSlide.scrollTo({ top: 30, left: 0, behavior:'smooth' })
						if(countTop >= 2){
							activeSlide.removeEventListener('scroll', handleInnerScroll);
							swiper.mousewheel.enable();
							swiper.allowTouchMove = true;
							swiper.slidePrev();
						}
					}
					
					if (scrollTop >= (scrollDifference - 20 ) && play != false ) {
						activeSlide.scrollBy({ top: -50, left: 0, behavior: 'smooth' });
						countBottom +=1
	
						if(countBottom >= 2){
						activeSlide.removeEventListener('scroll', handleInnerScroll);
						swiper.mousewheel.enable();
						swiper.allowTouchMove = true;
						swiper.slideNext();
						}
					}
				};
	
				activeSlide.addEventListener('scroll', handleInnerScroll, { passive: true });
				handleInnerScroll();
			} else {
				countBottom = 0
				countTop = 0
				swiper.mousewheel.enable();
				swiper.allowTouchMove = true;
			}
		});
	
		swiper.emit('slideChangeTransitionEnd');
	};

	return {handleScrollInside}
}
