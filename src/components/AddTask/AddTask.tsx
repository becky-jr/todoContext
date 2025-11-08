
import { useState, useContext } from 'react'
import './AddTask.css'

import { TaskContext } from '../../Context'



const AddTask = () => {

    let taskContext = useContext(TaskContext)

    if (!taskContext) return null

    const { addTask } = taskContext


    let [inputValue, setInputVale] = useState<string>('')

    return (

        <>

            <div className="add-task">

                <div className="inp">
                    <input
                        onChange={e => setInputVale(e.target.value)}
                        type="text"
                        placeholder='new task...'
                        value={inputValue} />
                </div>

                <div className="btn">
                    <button onClick={() => {

                        addTask(inputValue)
                        setInputVale('')
                    }}>Add</button>
                </div>

                <div className="mode">
                    <button>
                        Dark
                    </button>
                </div>

            </div>




        </>


    )
}

export default AddTask