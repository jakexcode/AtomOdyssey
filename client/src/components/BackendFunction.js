import React from "react";

export default function BackendFunction({ setProjectType, setCurrentStage, vessel }) {

  
  const backendBtnNext = () => {
    setProjectType("backend");
    setCurrentStage(2);
  };

  const renderBackEndVesselButton = () => {
    switch (vessel) {
      case "rocket-ship":
        return (
          <button
            onClick={backendBtnNext}
            className="btn-companion mt-4 btn-lg"
          >
            Let's Talk About Rocket Resolvers
          </button>
        );
      case "ship":
        return (
          <button
            onClick={backendBtnNext}
            className="btn-companion mt-4 btn-lg"
          >
            Let's Talk About These Winds and Currents
          </button>
        );
      case "airplane":
        return (
          <button
            onClick={backendBtnNext}
            className="btn-companion mt-4 btn-lg"
          >
            Let's Talk About These Jet Engines
          </button>
        );
    }
  };

  return <>{renderBackEndVesselButton()}</>;
}
