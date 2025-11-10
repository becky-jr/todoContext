import { Route, Routes } from 'react-router'
import './App.css'
import Finished from './components/Finished/Finished'
import Tasks from './components/Tasks/Tasks'

function App() {

  // let [tasks, setTasks] = useState<TaskType[]>([])


  // const addNewTask = (inpVal: string) => {

  //   setTasks([...tasks, { text: inpVal, finished: false, changing: false }])

  // }
  // const finishedTask = () => {

  //   tasks.filter((item, index) => {
  //     item.finished !== item.finished
  //   })

  // }



  // const finishedTask = (index: number) => {
  //   setTasks(tasks.map((item, i) =>
  //     i === index ? { ...item, finished: !item.finished } : item
  //   ));

  //   setFinishedList(tasks.filter(item => []))
  // };

  return (

    <>

      <div className="container">

        <Routes>

          <Route path='/' element={<Tasks />} />

          <Route path='/finished' element={<Finished />} />

        </Routes>

      </div>
    </>
  )
}

export default App