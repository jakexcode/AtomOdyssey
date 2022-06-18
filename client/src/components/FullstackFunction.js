import React from 'react'

export default function FullstackFunction({setProjectType, setCurrentStage, vessel }) {


  const fullstackBtnNext = () => {
    setProjectType("fullstack");
    setCurrentStage(2);
  };

  const renderfullstackVesselButton = () => {
    switch (vessel) {
      case "rocket-ship":
        return (
          <button
            onClick={fullstackBtnNext}
            className="btn-companion mt-4 btn-lg"
          >
            Let's Talk About Space
          </button>
        );
      case "ship":
        return (
          <button
            onClick={fullstackBtnNext}
            className="btn-companion mt-4 btn-lg"
          >
            Let's Talk About The Odyssey 
          </button>
        );
      case "airplane":
        return (
          <button
            onClick={fullstackBtnNext}
            className="btn-companion mt-4 btn-lg"
          >
            Let's Talk About The Flight Plan
          </button>
        );
    }
  };

  return <>{renderfullstackVesselButton()}</>;
}
