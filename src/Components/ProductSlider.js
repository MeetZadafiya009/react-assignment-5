import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProductSlide = (props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {props.data.map((image,index) => (
                <Carousel.Item key={index}>
                    <img
                        style={{height:"500px"}}
                        className="d-block w-100"
                        src={image}
                        alt="First slide"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
export default ProductSlide;