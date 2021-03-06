import React from 'react'
import "../css/projectSection.css"
import PausedOverlay from "../components/PausedOverlay";
import LoadingOverlay from '../components/LoadingOverlay';
import HoverVideoPlayer from "react-hover-video-player";

export default function ProjectSection() {
  return (
    <>
    <div className="project-section-bottom-background">
       <div className="project-section-top-background">
      <h4 className = "featured-project-text d-flex col-6 mx-5 px-5">Featured Project</h4>
      
      <h2 className = "featured-text col-6 mx-5 px-5"> BuyBitCoinPostage.com</h2> 
     <div className="container ms-auto d-grid my-2">
      <div className="row py-5 videos-container">
            <a href = "https://buybitcoinpostage.herokuapp.com/">
            <HoverVideoPlayer
              className="project-demo"
              height="500px"
              videoSrc="videos/CreateLabelDemo.mp4"
              pausedOverlay={<PausedOverlay />}
              loadingOverlay={<LoadingOverlay />}
            />
            </a>     
     </div>
     </div>

    </div>
    </div>
    </>
  )
}
