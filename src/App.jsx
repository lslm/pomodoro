import Header from './components/Header'
import PomodoroTimer from './components/PomodoroTimer'
import './App.css'
import Instructions from './components/Instructions'
import TaskForm from './components/TaskForm'
import TasksList from './components/TasksList'
import { TaskProvider } from './contexts/TaskContext'

function App() {

  return (
    <>
      <Header />

      <TaskProvider>
        <div className="content">
          <div className='main'>
            <div className='form'>
              <Instructions />

              <TaskForm />
              <TasksList />
            </div>

            <PomodoroTimer />
          </div>
        </div>
      </TaskProvider>
    </>
  )
}

export default App
