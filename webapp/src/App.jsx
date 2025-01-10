import { BrowserRouter as Router, useLocation } from "react-router-dom"
import AppRouter from "./router"
import Footer from "./components/Footer/Footer"
import { CSSTransition, TransitionGroup } from "react-transition-group"

function App() {

  return (
    <>
      <Router>
        <div className="wrapper">

          <AppRouter></AppRouter>

          <Footer></Footer>

        </div>
      </Router>
    </>
  )
}

export default App
