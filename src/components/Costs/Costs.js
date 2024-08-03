import './Costs.css'
import Card from "../UI/Card"
import CostsFilter from "./CostsFilter"
import React, {useState} from "react"
import CostList from "./CostList"
import CostsDiagram from './CostsDiagram'

const Costs = (props) => {

  const [selectedYear, setSelectedYear] = useState("2024")

  const yearChangeHandler = (year) => {
   setSelectedYear(year)
    
  }

  const filteredCosts = props.costs.filter(cost =>
  {
    return cost.date.getFullYear().toString() === selectedYear
  }
  )

  //* CostsFilter - контролируемый компонент, обрабатывается все в Costs

    return (

      <div>

        <Card className="costs">

        <CostsFilter year = {selectedYear} 
        onChangeYear = {yearChangeHandler}/>

        <CostsDiagram costs = {filteredCosts}/>

        <CostList costs = {filteredCosts}/>
        </Card>

      </div>  
    )
}

export default Costs