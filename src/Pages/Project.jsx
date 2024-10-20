import React, { useEffect, useState } from 'react'
import TransitionPage from '../components/Project/TransitionPage'
import Light from "../assets/images/grainy-light.png";

const Project = ({BG}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    BG(Light);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Adjust this time based on your actual loading time

    return () => clearTimeout(timer);
  }, [])

  if (!isLoaded) {
    return null
    ; // Or return null if you want to keep showing the IntroLoader
  }
  return (
    <TransitionPage />
)
}

export default Project