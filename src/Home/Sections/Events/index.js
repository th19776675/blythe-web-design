import ImageBox from "../../../Components/ImageBox";

import { useEffect, useState } from "react";

const Events = () => {
  const [eventImg, setEventImg] = useState()
  const getShoppingItems = async () => {
    const eventItem = await fetch(
      "http://api.blythe.world:1337/api/event-page?populate=adImage",
      { method: "GET" }
    );

    const eventItemJson = await eventItem.json();
    setEventImg(eventItemJson.data.attributes.adImage.data.attributes.url)
  }

  useEffect(() => {
    getShoppingItems()
    console.log()
  }, [])

  return (
    <div>
      <div className="ad-img">
        <ImageBox src={`http://api.blythe.world:1337${eventImg}`}></ImageBox>

      </div>
    </div>
  )
}

export default Events;

