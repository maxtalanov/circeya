import "./Gallery.scss";
import {useRef, useState} from "react";

const Gallery = ({arr}) => {
    const slider = useRef(null);
    const [btnLeft, setBtnLeft] = useState(false);
    const [btnRight, setBtnRight] = useState(false);
    const [position, setPosition] = useState(0);
    console.log(btnLeft, btnRight);


    const handleClickLeft = () => {
        // // console.log(position < 0, 'Позиция лефт')
        // if (position < 0 ) {
        //     setBtnRight(false);
        //     setPosition(position + 380)
        //     slider.current.childNodes.forEach((el) => {
        //         return el.style = `transform: translateX(${position}px)`;
        //     })
        // } else {
        //     setBtnLeft(true);
        // }

        setPosition(position + 380)
        slider.current.childNodes.forEach((el) => {
            return el.style = `transform: translateX(${position}px)`;
        })
    }

    const handleClickRight = () => {
        // console.log(position <= -(arr.length - 3) * 380)
        // if (position <= (arr.length - 3) * 380) {
        //     setBtnRight(true);
        // } else {
        //     setBtnLeft(false)
        //
        //     })
        // }
        setPosition(position - 380)
        slider.current.childNodes.forEach((el) => {
            return el.style = `transform: translateX(${position}px)`;
        })
    }


    return (<div className="gallery">

        <div className="gallery__list" ref={slider}>
            <span className="gallery__bg-list gallery__bg-list_type_left"/>
            <span className="gallery__bg-list gallery__bg-list_type_right"/>
            {arr && arr.map((el, index) => {
                return (<figure className="gallery__figure" key={index}>
                    <img className="gallery__el-img" src={el.img} alt={el.caption}/>
                    <figcaption className="gallery__el-caption">{el.caption}</figcaption>
                </figure>)
            })}

        </div>

        <div className="gallery__btn-container">
            <button
                className="gallery__btn gallery__btn_type_left"
                onClick={handleClickLeft}
                disabled={btnLeft}
            />

            <button
                className="gallery__btn  gallery__btn_type_right"
                onClick={handleClickRight}
                disabled={btnRight}
            />
        </div>
    </div>)
}

export default Gallery;