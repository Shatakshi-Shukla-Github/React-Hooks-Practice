import { useState, useCallback } from "react"
export default function UseCallbackExample() {
    const [tasks, setTasks] = useState([])
    const addTask = () => {
        setTasks((prevState) => [...prevState, "Some Other Task"])
    }
    return (
        <div>
            UseCallback
        </div>
    )
}