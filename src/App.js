import Costs from "./components/Costs/Costs"
import NewCost from "./components/NewCost/NewCost"
import React, { useState } from "react"


  const INITIAL_COSTS = [
    {
      id: "c1",
      date: new Date (2023, 6, 24),
      description: "Iphone",
      amount: 1200
    },
    {
      id: "c2",
      date: new Date (2024, 9, 9),
      description: "Laptop",
      amount: 1000
    },
    {
      id: "c3",
      date: new Date (2024, 2, 1),
      description: "Washing machine",
      amount: 1500
    }
  ]

  
const App = () => {

  const [costs, setCosts] = useState(INITIAL_COSTS)

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    })
  }

  return (
    <div>
      <NewCost onAddCost = {addCostHandler} />
      <Costs costs = {costs} />
    </div>
  )
}

export default App
