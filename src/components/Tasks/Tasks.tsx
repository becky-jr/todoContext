import { Link } from 'react-router'
import NewTask from '../NewTask/NewTask'
import './Tasks.css'

import AddTask from '../AddTask/AddTask'

import { useContext } from 'react'

import { TaskContext } from '../../Context'



const Tasks = () => {


  let taskContext = useContext(TaskContext)

  if (!taskContext) return null

  const { tasks, } = taskContext




  return (
    <>

      <AddTask />


      <div className="finished">
        <Link to='/finished'>
          Finished
        </Link>
      </div>


      {
        tasks.map((item, index) =>
          <NewTask
            key={index}
            index={index}
            text={item.text}
            finished={item.finished}

          />)
      }






    </>
  )
}

export default Tasks