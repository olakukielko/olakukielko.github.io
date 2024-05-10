import React, {useState, useContext, useEffect} from 'react'
import { TabContext } from "../App"

export default function Help() {
  const {ActiveLink, setActiveLink} = useContext(TabContext)
  useEffect(() => {
    setActiveLink("Help")
  });
  return (
    <div className="centerContent">
      Help
    </div>
  )
}
