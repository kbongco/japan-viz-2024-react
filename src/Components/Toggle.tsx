import { useState } from "react"


export default function Toggle({ props }: any) {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(true);
  
  return (
    <>
      {props}
    </>
  )
}