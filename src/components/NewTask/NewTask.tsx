import './NewTask.css'

import { useContext, useRef, useState, useEffect } from 'react'
import { TaskContext } from '../../Context'

type NewTaskType = {
    index: number,
    text: string,
    finished: boolean,
    changing: boolean
}

const NewTask = ({ index, text, finished, changing }: NewTaskType) => {

    let taskContext = useContext(TaskContext)

    if (!taskContext) return null

    let { finishTask, changeTaskBool, changeTask } = taskContext

    let [newInpValue, setNewInpValue] = useState<string>('')


    let inputRef = useRef<HTMLInputElement>(null)


    useEffect(() => {
        if (changing) {
            inputRef.current?.focus();
            setNewInpValue(text)
        }
    }, [changing]);

    return (
        <>

            <div className="new-task">

                <div className="task" style={{ textDecoration: finished ? 'line-through' : 'none' }}>
                    {
                        changing === true ?
                            (<div>
                                <input
                                    ref={inputRef}
                                    value={newInpValue}
                                    type="text"
                                    onChange={e => setNewInpValue(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') changeTask(index, newInpValue)
                                    }} />
                                {/* <button onClick={() => changeTask(index, newInpValue)}>Change</button> */}
                            </div>)
                            : text
                    }
                </div>

                <div className="buttons">

                    <div className="change">
                        <button onClick={() => changeTaskBool(index)}>
                            Change
                        </button>
                    </div>

                    <div className="done">
                        <button onClick={() => finishTask(index)}>
                            {finished ? 'Undone' : 'Done'}
                        </button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default NewTask