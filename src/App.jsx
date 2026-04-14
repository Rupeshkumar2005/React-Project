import MainRoutes from "../Router/MainRoutes"
import Navbar from "../components/Navbar"

const App = () => {
  return (
    <div className="py-10 px-[10%] w-screen h-screen bg-gray-700 text-white font-thin">
      <Navbar />
      <MainRoutes />
     
    </div>
  )
}

export default App