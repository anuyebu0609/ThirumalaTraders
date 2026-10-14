import AboutUsHeroSection from "./AboutUsHeroSection"
import AboutUsProcess from "./AboutUsProcess"
import ClientHandling from "./ClientHandling"
import OurDelivery from "./OurDelivery"
import OurStory from "./OurStory"
import ProductVideos from "./ProductVideos"
import WhyChooseUs from "./WhyChooseUs"

const AboutUs=()=>{
    return(
        <div>
            <AboutUsHeroSection/>
            <OurStory/>
            <ClientHandling/>
            <OurDelivery/>
            <ProductVideos/>
            <WhyChooseUs/>
            <AboutUsProcess/>
        </div>
    )
}
export default AboutUs