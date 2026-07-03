import React from "react";
import { useState, useCallback } from "react"
import Count from "./Count"
import Button from "./Button"
import Title from "./Title"
export default function ParentComponent() {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(25000)
    const incAge = useCallback(() => {
        setAge(prevAge => prevAge + 1)
    }, [])
    const incSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 1000)
    }, [])
    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incSalary}>Increment Salary</Button>
        </div>
    )
}
