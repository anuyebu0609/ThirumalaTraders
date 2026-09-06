import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Heading from "./Heading"
import Header from "./Header"
import HeroSection from "./HeroSection"
import ProductSection from "./ProductSection"
import OurBrands from "./OurBrands"
import WhyChoose from "./WhyChoose"
import About from "./About"
import ContactNow from "./ContactNow"
import Footer from "./Footer"


const Applayout=()=>{
    return(
        <div>
            <Heading/>
           <Header/>
           <HeroSection/>
           <ProductSection/>
           <OurBrands/>
           <WhyChoose/>
           <About/>
           <ContactNow/>
           <Footer/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Applayout/>)