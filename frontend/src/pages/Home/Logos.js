import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import image_1 from "../../image/logo_1.png"
import image_2 from "../../image/logo_2.png"
import image_3 from "../../image/logo_3.png"
import image_4 from "../../image/logo_4.png"
import { useState } from 'react'

export const Logos = () => {
    const [to, setTo] = useState(0)
    const handelMove = (type) => {
        let move
        if (767 < window.innerWidth && window.innerWidth < 991) {
            move = 50
        }
        if (window.innerWidth < 767) {
            move = 100
        }
        if (991 < window.innerWidth) {
            move = 20
        }
        let imgs = document.querySelector(".logos .image .images")
        if (type === "right") {
            imgs.style.transform = `translate3d(${to + move}%, 0px, 0px)`
            setTo(to + move)
        } else {
            imgs.style.transform = `translate3d(${to - move}%, 0px, 0px)`
            setTo(to - move)
        }
    }
    return (
        <div className="logos">
            <FontAwesomeIcon
                onClick={() => handelMove("left")}
                icon={faAngleLeft} />
            <div className="image">
                <div className="images">
                    <div className='img'>
                        <img src={image_1} />
                    </div>
                    <div className='img'>
                        <img src={image_2} />
                    </div>
                    <div className='img'>
                        <img src={image_3} />
                    </div>
                    <div className='img'>
                        <img src={image_4} />
                    </div>
                    <div className='img'>
                        <img src={image_1} />
                    </div>
                    <div className='img'>
                        <img src={image_2} />
                    </div>
                    <div className='img'>
                        <img src={image_1} />
                    </div>
                    <div className='img'>
                        <img src={image_2} />
                    </div>
                    <div className='img'>
                        <img src={image_3} />
                    </div>
                    <div className='img'>
                        <img src={image_4} />
                    </div>
                    <div className='img'>
                        <img src={image_1} />
                    </div>
                    <div className='img'>
                        <img src={image_2} />
                    </div>
                </div>
            </div>
            <FontAwesomeIcon
                onClick={() => handelMove("right")}
                icon={faAngleRight} />
        </div>
    )
}