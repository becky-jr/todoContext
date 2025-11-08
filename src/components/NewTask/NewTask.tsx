import './NewTask.css'

import { useContext } from 'react'
import { TaskContext } from '../../Context'

type NewTaskType = {
    index: number,
    text: string,
    finished: boolean,
}

const NewTask = ({ index, text, finished }: NewTaskType) => {

    let taskContext = useContext(TaskContext)

    if (!taskContext) return null

    let { finishTask } = taskContext



    return (
        <>

            <div className="new-task">

                <div className="task" style={{ textDecoration: finished ? 'line-through' : 'none' }}>
                    {text}
                </div>

                <div className="buttons">

                    <div className="change">
                        <button>
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