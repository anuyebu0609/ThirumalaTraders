import { OurStoryImage } from "./assets/AboutUsImage/OurStoryImage"

const OurStory=()=>{
    return(
           <div className="max-w-[100%] py-10">
<div className="w-[95%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col  justify-center">
          <h2
          className="text-[28px] md:text-[32px] lg:text-[36px] font-bold  text-black"
        >
          Quality Products.
        </h2>  
        <h2
          className="text-[28px] md:text-[32px] lg:text-[36px] font-bold  text-[#E21B23]"
        >
          Long-Lasting RelationShips
        </h2> 
        <p className="text-[16px] font-semibold text-black">Thirumala Traders is a well-established and popular traders</p>
        <p className="text-[16px] font-semibold text-black">with an excellent track record for customer satisfaction</p>
        <p className="text-[16px] font-semibold text-black">we deal in all types of pipe fittings and valves and have never</p>
        <p className="text-[16px] font-semibold text-black">compromised on quality or the services provided to the customer.</p>
        
        <p className="text-[16px] font-semibold text-black mt-6">Our goal is to keep our customers happy and provide them</p>
        <p className="text-[16px] font-semibold text-black">with products at a very competitive price. We assure you</p>
        <p className="text-[16px] font-semibold text-black">that we will give you the bestt service at any time.</p>


</div>

<div>
    <img src={OurStoryImage} alt="Story.img" />
</div>
</div>
           </div>

    )
}
export default OurStory