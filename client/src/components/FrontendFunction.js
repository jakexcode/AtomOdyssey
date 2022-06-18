import React from 'react'

export default function FrontendFunction({setCurrentStage, setProjectType, vessel}) {

  const frontendBtnNext = () => {
    setProjectType("frontend")
    setCurrentStage(2)
  }

  const renderFrontEndVesselButton = () => {
    switch (vessel) {
      case "rocket-ship":
        return (
          <button
            onClick={frontendBtnNext}
            className="btn-companion mt-4 btn-lg"
          >
            Let's Talk About The Crew's Cabin
          </button>
        );
      case "ship":
        return (
          <button
            onClick={frontendBtnNext}
            className="btn-companion mt-4 btn-lg"
          >
            Let's Line Her Up With The Stars
          </button>
        );
      case "airplane":
        return (
          <button
            onClick={frontendBtnNext}
            className="btn-companion mt-4 btn-lg"
          >
            Let's Talk About The Pilot's Quarters
          </button>
        );
    }
  };

  return (
    <>
    {renderFrontEndVesselButton()}
    </>
  )
}
