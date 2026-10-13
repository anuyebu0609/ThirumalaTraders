import AboutUsHeroSection from "./AboutUsHeroSection"
import AboutUsProcess from "./AboutUsProcess"
import OurDelivery from "./OurDelivery"
import OurStory from "./OurStory"
import ProductVideos from "./ProductVideos"
import WhyChooseUs from "./WhyChooseUs"

const AboutUs=()=>{
    return(
        <div>
            <AboutUsHeroSection/>
            <OurStory/>
            <OurDelivery/>
            <ProductVideos/>
            <WhyChooseUs/>
            <AboutUsProcess/>
        </div>
    )
}
export default AboutUs