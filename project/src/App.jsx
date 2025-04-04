import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
import "./App.css"

function App() {

  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <AppRoutes/>
      </BrowserRouter>
        <Footer/>
    </>
  )
}

export default App
