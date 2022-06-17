import React, {useState} from 'react'
import CompanionSelect from '../components/CompanionSelect'
import VesselSelect from '../components/VesselSelect'
import Consultation from '../components/Consultation'
import ProjectSelect from '../components/ProjectSelect'


export default function Odyssey({currentStage, setCurrentStage, companionText}) {

  const [voyage, setVoyage] = useState("")

  

  //if 0 compnaionSelect
  //if 1 vessel select
  //if 2project select
  //if 3 Consultation


  const renderHome = () => {
    switch(currentStage) {
      case 0: 
        return (
          <VesselSelect companionText={companionText} voyage = {voyage} setVoyage = {setVoyage} currentStage = {currentStage} setCurrentStage = {setCurrentStage} />
        )
        case 1: 
        return (
          <ProjectSelect voyage = {voyage} setVoyage = {setVoyage} currentStage = {currentStage} setCurrentStage = {setCurrentStage} />
        )
        case 2: 
        return (
          <Consultation voyage = {voyage} setVoyage = {setVoyage} currentStage = {currentStage} setCurrentStage = {setCurrentStage} />
        )
    }
  }
  return (
    <>
    {renderHome()}
    </>
  )
}
