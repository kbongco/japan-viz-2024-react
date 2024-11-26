import NavBar from './Components/NavBar'
import About from './Components/About'
import Welcome from './Components/Welcome'
import Visualized from './Components/Visualize'
import { CurrencyProvider } from './Context/CurrencyContext'
import Transportation from './Components/Transportation'

function App() {

  return (
    <>
      <CurrencyProvider>
        <NavBar />
        <Welcome />
        <About />
        <Visualized />
        <Transportation/>
      </CurrencyProvider>
    </>
  )
}

export default App
