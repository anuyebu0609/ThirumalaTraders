import { ProductData } from "./ProductData";


// ================= PRODUCT CARD =================
const ProductCard = (props) => {
  return (
    <div className="group w-full overflow-hidden rounded-xl border border-gray-200 bg-white cursor-pointer
transition-all duration-300 ease-out hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_12px_30px_rgba(220,38,38,0.18)]"
    >

      {/* IMAGE */}
      <div className="w-full  aspect-[3/2]  overflow-hidden  bg-white  flex  items-center  justify-center">
        <img className="w-full h-full object-contain p-1 transition-transform duration-500 ease-out group-hover:scale-110"
          src={props.Image}
          alt={props.Type}
        />
      </div>


      {/* PRODUCT NAME */}
      <div
        className="px-2 py-3 border-t border-gray-100 bg-white"
      >
        <h3 className="text-[13px] md:text-[14px] lg:text-[15px] font-bold text-black text-center whitespace-nowrap
transition-colors duration-300 group-hover:text-[#E21B23] "
        >
          {props.Type}
        </h3>
      </div>


      {/* HOVER BOTTOM LINE */}
      <div className="h-[3px] w-full bg-[#E21B23] scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100"
      ></div>

    </div>
  );
};


// ================= PRODUCT SECTION =================
const ProductSection = () => {
  return (
    <section className="w-full py-10 md:py-14 bg-white">

      {/* ================= HEADING ================= */}
      <div className="w-[95%] md:w-[92%] mx-auto">

        <h2
          className="
            text-[26px]
            md:text-[30px]
            lg:text-[32px]

            font-bold
            text-center
            text-black
          "
        >
          OUR PRODUCT CATEGORIES
        </h2>

        {/* RED LINE */}
        <div className="w-14 h-1 bg-[#E21B23] rounded-full mx-auto mt-3"></div>

      </div>


      {/* ================= PRODUCT GRID ================= */}
      <div
        className="
          w-[95%]
          md:w-[92%]
          mx-auto

          grid
          grid-cols-2
          md:grid-cols-4
          

          gap-3
          md:gap-4

          mt-7
        "
      >

        {ProductData.map((item, index) => {
          return (
            <ProductCard
              key={item.ID || index}
              ID={item.ID}
              Image={item.Image}
              Type={item.Type}
            />
          );
        })}

      </div>

    </section>
  );
};

export default ProductSection;