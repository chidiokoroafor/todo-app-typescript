
import TodoApp from './components/TodoApp'

function App() {
 
  return (
    <main className="min-w-full min-h-screen relative bg-VeryLightGray dark:bg-VeryDarkBlue" >
      <div className='h-[30vh] sm:h-[40vh] w-full  top-0 right-0 left-0 bg-mobile-light sm:bg-desktop-light dark:sm:bg-desktop-dark dark:bg-mobile-dark bg-no-repeat bg-cover z-0' ></div>

      <TodoApp />
      
    </main>
  )
}

export default App
