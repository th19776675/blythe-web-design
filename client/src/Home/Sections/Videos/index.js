import { useState, useEffect } from "react";
import "./Videos.css"

const Videos = () => {

  const [videoState, setVideoState] = useState()  

  const api = `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyDAiAP-c2NgwbWhIrtYYCzd2ygSspXjYEo&part=snippet,id&channelId=UC0w6-Ed5w-0RyRmWbi4CNVA&maxResults=1&order=date`
  useEffect(() => {
    fetch(api)
    .then(response => response.json())
    .then(data => setVideoState(data));
  },[])
  if (!videoState) {
    return (
      <div>
        LOADING...
      </div>
    )
  } else {
    return (
      <div>
        {/* wow */}
        <iframe className="youtube-embed"
          width="275"
          height="155"
          src={`https://www.youtube.com/embed/${videoState.items[0].id.videoId}`}
          frameBorder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Latest Blythe Youtube Video"
        />      
        <p>{`Published at: ${videoState.items[0].snippet.publishedAt}`}</p>
    </div>
    )
  }
}

export default Videos;

