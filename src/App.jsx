import MainRoutes from "../Router/MainRoutes"
import Navbar from "../components/Navbar"


const App = () => {
  return (
    // <div className="py-10 px-[10%] w-screen h-screen bg-gray-700 text-white font-thin">
    //   <Navbar />
    //   <MainRoutes />
     
    // </div>
    <div className="relative min-h-screen">

  {/* 🎬 Background Video */}
  <video
    autoPlay
    loop
    muted
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  >
     <source src="/143762-784138214_medium.mp4" type="video/mp4" />
  </video>

  {/* 🔲 Overlay (optional but important) */}
  <div className="absolute inset-0 bg-black/40 -z-10"></div>

  {/* 📦 Your content */}
  <div className="py-10 px-[10%] w-screen min-h-screen text-white font-thin">
    <Navbar />
    <MainRoutes />
  </div>

</div>
  )
}

export default App