import { Link } from 'react-router'
import NewTask from '../NewTask/NewTask'
import './Finished.css'

import { useContext } from 'react'

import { TaskContext } from '../../Context'





const Finished = () => {

    let taskContext = useContext(TaskContext)

    if (!taskContext) return null

    let { finishedList } = taskContext

    return (
        <>
            <div className='finished'>

                <Link to='/' className='back'>
                    Tasks
                </Link>

            </div>

            <h1>Finished tasks</h1>


            {
                finishedList.map((item, index) =>
                    <NewTask key={index}
                        index={index}
                        text={item.text}
                        finished={item.finished}
                    />)
            }

        </>
    )
}

export default Finished