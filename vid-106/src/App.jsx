import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Card from "./components/Card.jsx"

function App() {
  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title="Code. Create. Repeat." description="Build, break, and rebuild — it’s how great things are made."/>
        <Card title="Pixel Precision" description="Designs that look sharp on every screen, every time."/>
        <Card title="Fast & Fluid" description="Lightning-fast performance with buttery smooth UX."/>
        <Card title="Crafted with Care" description="Every component is designed with attention to detail and purpose."/>
      </div>
      <Footer/>
    </>
  )
}

export default App
