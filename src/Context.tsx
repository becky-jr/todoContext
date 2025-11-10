import { createContext, useState } from "react";
import type { ReactNode } from "react"
import type { TaskType } from "./model";

export const MyContext1 = createContext('default value 1')

type CounterContextType = {
    num: number;
    increment: () => void;
}


export const CounterContext = createContext<CounterContextType | null>(null)

export const CounterProvider = ({ children }: { children: ReactNode }) => {
    let [num, setNum] = useState(0)

    const increment = () => setNum(num + 1)


    return (
        <CounterContext.Provider value={{ num, increment }}>

            {children}

        </CounterContext.Provider>
    )
}

type TaskContextType = {
    tasks: TaskType[];
    addTask: (inpal: string) => void;
    finishedList: TaskType[];
    finishTask: (index: number) => void;
    changeTaskBool: (index: number) => void;
    changeTask: (id: number, inpValue: string) => void;
}

export let TaskContext = createContext<TaskContextType | null>(null)

export let TaskProvider = ({ children }: { children: ReactNode }) => {

    let [tasks, setTasks] = useState<TaskType[]>([])
    console.log(tasks);



    const addTask = (inpVal: string) => {

        setTasks([...tasks, { text: inpVal, finished: false, changing: false }])
    }


    let [finishedList, setFinishedList] = useState<TaskType[]>([])

    const finishTask = (index: number) => {
        // Toggle the "finished" state of the clicked task
        const updatedTasks = tasks.map((item, i) =>
            i === index ? { ...item, finished: !item.finished } : item
        );

        // Update main tasks list
        setTasks(updatedTasks);

        // Update finished list based on updated tasks
        setFinishedList(updatedTasks.filter(item => item.finished));
    };


    const changeTaskBool = (index: number) => {
        const updateChange = tasks.map((item, i) => i === index ? { ...item, changing: !item.changing } : item)

        setTasks(updateChange)
    }


    // const changeTask = (inpValue: string) => {
    //     setTasks([...tasks, { text: inpValue, finished: false, changing: false }])
    // }

    const changeTask = (id: number, inpValue: string) => {
        setTasks(tasks.map((task, index) =>
            index === id
                ? { ...task, text: inpValue, changing: false }
                : task
        ));
    };

    return (

        <TaskContext.Provider value={{ tasks, addTask, finishedList, finishTask, changeTaskBool, changeTask }}>

            {children}

        </TaskContext.Provider>
    )

}








