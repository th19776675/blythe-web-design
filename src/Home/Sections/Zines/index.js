import ImageBox from "../../../Components/ImageBox";

import { useEffect, useState } from "react";

const Zines = () => {
  const [zineImg, setZineImg] = useState()
  const getShoppingItems = async () => {
    const zineItem = await fetch(
      "http://api.blythe.world:1337/api/video-page?populate=image",
      { method: "GET" }
    );
 
    const zineItemJson = await zineItem.json();
    setZineImg(zineItemJson.data.attributes.image.data.attributes.url)
  }

  useEffect(() => {
    getShoppingItems()
    console.log()
  }, [])

  return (
    <div>
      <div className="ad-img">
        <ImageBox src={`http://api.blythe.world:1337${zineImg}`}></ImageBox>

      </div>
    </div>
  )
}

export default Zines;

