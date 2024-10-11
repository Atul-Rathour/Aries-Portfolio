import React, { useEffect } from 'react'
import TransitionPage from '../components/Project/TransitionPage'
import Light from "../assets/images/grainy-light.png";

const Project = ({BG}) => {

  useEffect(() => {
    BG(Light)
  },[])

  return (
    <TransitionPage />
)
}

export default Project