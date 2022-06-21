import React, {useState} from 'react'
import CompanionSelect from '../components/CompanionSelect'
import VesselSelect from '../components/VesselSelect'
import Consultation from '../components/Consultation'
import ProjectSelect from '../components/ProjectSelect'


export default function Odyssey({currentStage, setCurrentStage, companionText}) {

  const [vessel, setVessel] = useState("")
  const [projectType, setProjectType] = useState("");

  

  //if 0 compnaionSelect
  //if 1 vessel select
  //if 2project select
  //if 3 Consultation


  const renderHome = () => {
    switch(currentStage) {
      case 0: 
        return (
          <VesselSelect companionText={companionText} vessel = {vessel} setVessel = {setVessel} currentStage = {currentStage} setCurrentStage = {setCurrentStage} />
        )
        case 1: 
        return (
          <ProjectSelect companionText = {companionText} projectType = {projectType} setProjectType = {setProjectType} vessel = {vessel} setVessel = {setVessel} currentStage = {currentStage} setCurrentStage = {setCurrentStage} />
        )
        case 2: 
        return (
          <Consultation vessel = {vessel} setVessel = {setVessel} currentStage = {currentStage} setCurrentStage = {setCurrentStage} companionText = {companionText} />
        )
    }
  }
  return (
    <>
    {renderHome()}
    </>
  )
}
