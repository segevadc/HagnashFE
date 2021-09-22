import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import {Image} from 'semantic-ui-react';

const PICTURES = "תמונות";

export const Gallery = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return <div className="gallery">
        <h2>{PICTURES}</h2>
        <Slider {...settings}>
            {images.forEach((image) =>
                <div>
                    <Image className="placePicture" src={image.path} size='big'/>
                </div>
            )}
            {images.map((image) =>
                <div>
                    <Image className="placePicture" src={image.path} size='big'/>
                </div>
            )}
        </Slider>
    </div>
}