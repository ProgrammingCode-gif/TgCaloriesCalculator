import { BrowserRouter as Router } from "react-router-dom"
import Header from "./components/Header/Header"
import AppRouter from "./router"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Router>
        <div className="wrapper">
        <Header></Header>

        <AppRouter></AppRouter>

        <Footer></Footer>


        </div>
      </Router>
    </>
  )
}

export default App
