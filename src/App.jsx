import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection />
      </div>
    </>
  )
}

export default App 