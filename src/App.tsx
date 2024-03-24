import React from 'react'
import './App.css'
import Leftbar from './bussiness_components/Leftbar/Leftbar'
import Plan from './bussiness_components/Plan/Plan'
import {Flex} from "@chakra-ui/react"
function App() {
  return (
    <Flex direction={"row"}>
      <Leftbar/>
      <Plan/>
    </Flex>
  )
}

export default App
