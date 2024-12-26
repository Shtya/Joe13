
import EffectFixed from '@/helpers/EffectFixed';
import TextAnimation from '@/helpers/TextAnimation';
import TextSlide from '@/helpers/TextSlide';

export default function Section4() {



    return (
        <EffectFixed image={'/assets/imgs/section4.png'} >

            <TextSlide  cn={"text40 font-[600] text-white text-center"} text={"Check out our Business Units and their services"} />
           
        </EffectFixed>
    );
}

