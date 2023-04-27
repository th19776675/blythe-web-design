import { useState } from "react"
import "./ImageBox.css"

const ImageBox = (props) => {

    const [isImageOpen, setIsImageOpen] = useState(false)

    const openImageHandler = () => {
        if (isImageOpen === false) {
            setIsImageOpen(true)
        } else {
            setIsImageOpen(false)
        }
    }

    return (
        <>
            {isImageOpen ? 
            <div className="image-backdrop">
                <img src={props.src} alt={props.alt} className="image-large"/>
                <button className="image-box-btn" onClick={openImageHandler}>MINIMISE ART</button>
            </div>
            : 
            <img onClick={openImageHandler} src={props.src} alt={props.alt} className="image-box"/>}
        </>
    )
}

export default ImageBox