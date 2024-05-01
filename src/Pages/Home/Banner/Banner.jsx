import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img className="max-w-md max-h-[520px] object-contain"  src="https://i.ibb.co/Kx7mS8W/1.png" />
                   
                </div>
                <div>
                    <img className="max-w-md max-h-[520px] object-contain" src="https://i.ibb.co/4MDncyf/2.png" />
                  
                </div>
                <div>
                    <img className="max-w-md max-h-[520px] object-contain"  src="https://i.ibb.co/XVQ5cMF/3.png" />
                   
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;