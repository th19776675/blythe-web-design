import { useState, useEffect } from "react";

const Videos = () => {

  const [videoState, setVideoState] = useState("")  

  const api = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YT_API}&part=snippet,id&channelId=UC0w6-Ed5w-0RyRmWbi4CNVA&maxResults=1&order=date`


  return (
    <div>
      
    </div>
  )
}

export default Videos;

