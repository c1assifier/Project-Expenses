import React, {useState} from 'react'
import './CostForm.css'


const CostForm = (props) => {

    const [inputName, setInputName] = useState("")
    const [inputAmount, setInputAmount] = useState("")
    const [inputDate, setInputDate] = useState("")

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // })

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)

        //?----------------------------------------------

        //! setUserInput({
        //!     ...userInput,
        //!     name: event.target.value - ПЛОХОЙ ПОДХОД
        //! })

        //* setUserInput((previousState) => {
        //*     return {
        //*         ...previousState,         - ХОРОШИЙ ПОДХОД
        //*         name: event.target.value
        //*     }
        //* })

         //?----------------------------------------------

    }

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)

         //?----------------------------------------------


        //! setUserInput({
        //!     ...userInput,
        //!     amount: event.target.value
        //! })

        //* setUserInput((previousState) => {
        //*     return {
        //*         ...previousState,
        //*         amount: event.target.value
        //*     }
        //* })

         //?----------------------------------------------

    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)

         //?----------------------------------------------


        //! setUserInput({
        //!     ...userInput,
        //!     date: event.target.value
        //! })

        //* setUserInput((previousState) => {
        //*     return {
        //*         ...previousState,
        //*         date: event.target.value
        //*     }
        //* })

         //?----------------------------------------------

    }

    const submitHandler = (event) => {
        event.preventDefault()   //* Нужно для того, чтобы старница не обновлялась. Зарпос не отправляется.

        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date (inputDate)
        }
        
        props.onSaveCostData(costData) 
        setInputName("")
        setInputAmount("")
        setInputDate("")
    }

    //* Тут используется двухсторонее связывание. С помощью value, программно устанавливаем пустое значение.
    
    return <form onSubmit = {submitHandler}> 
        <div className="new-cost__controls">

            <div className="new-cost__control">
                <label>Название</label>
                <input type="text" value = {inputName} 
                onChange = {nameChangeHandler}/>   
            </div>

            <div className="new-cost__control">
                <label>Сумма</label>
                <input type="number" value = {inputAmount} 
                onChange={amountChangeHandler}  min = '0.01' step = '0.01'/>
            </div>

            <div className="new-cost__control">
                <label>Дата</label>
                <input type="date" value = {inputDate} 
                onChange={dateChangeHandler} min = '2022-01-01' step = '2024-12-31'/>
            </div>

            <div className="new-cost__actions">
                <button type = "submit" >Добавить расход</button>
                <button type="button" onClick = {props.onCancel}>Отмена</button>
            </div>

        </div>
    </form>
}

export default CostForm