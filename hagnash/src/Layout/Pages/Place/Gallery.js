import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import {Image} from 'semantic-ui-react';
import {HagnashApi} from "../../../api/HagnashAPI";

const PICTURES = "תמונות";

export const Gallery = ({images}) => {
    const settings = {
        dots: true,
        infinite: true,
        centerMode: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };


    return <div className="gallery">
        <h2>{PICTURES}</h2>
        <Slider {...settings}>
            {images.map((image) =>
                <div>
                    <Image className="placePicture" src={HagnashApi.getImage(image.path)} style={{height:'20rem', width:'100%'}}/>
                </div>
            )}
        </Slider>
    </div>
}