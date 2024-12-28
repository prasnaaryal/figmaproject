import AboutUs from "./components/AboutUs"
import Banner from "./components/Banner"
import BestPlan from "./components/BestPlan"
import Companies from "./components/Companies"
import Programme from "./components/Programme"
import Services from "./components/Services"
import Testomonials from "./components/Testomonials"

const Home = () => {
  return (
    <div>
        
       <Banner/>
       <Companies/>
       <AboutUs/>
       <Programme/>
       <Services/>
       <BestPlan/>
       <Testomonials/> 
    </div>
  )
}

export default Home