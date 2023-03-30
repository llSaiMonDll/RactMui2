import { Route, Routes } from 'react-router-dom'
import Calendar from "./pages/Calendar";
import HomePage from "./pages/Homepage";
import TodayPage from "./pages/Todaypage";
import TodoPage from "./pages/TodoPage";
import Home from "./components/Home"
function App() {
  return (
    <Routes>
        <Route exect path="/" element={<HomePage/>}/>
        <Route path="/todo" element={<TodoPage/>}/>
        <Route path ="/today" element ={<TodayPage/>}/>
        <Route path = "/calendar" element={<Calendar/>}/>
    </Routes>
  )
}

export default App