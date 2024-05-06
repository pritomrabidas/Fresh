const Fashion = () => {
  return (
    <section>
      <div className="container mx-auto flex pt-40 relative">
        <div className="flex ">
          <div className="">
            <img src="fashion.png" alt="" />
          </div>
          <div className="">
          <h2 className="font-bold flex text-5xl pl-28 pt-20 w-[432px] font-['interFont'] hover:delay-75 hover:text-red-500">Best Fashion Since 2010</h2>
          <p className="w-[530px] font-normal text-xl mt-10 mb-20 pl-28  pt-12 font-['Popins'] hover:delay-75 hover:text-teal-900">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
            pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
            elementum non viverra.
          </p>
          </div>
        </div>
        <div className="">
        <div className=" xl:p-16 md:p-10 md:ml-14 sm:p-8 bg-[#FEECC8] rounded-[20px] flex sm:gap-5 md:gap-10 xl:gap-14 absolute sm:top-[104%] xl:top-[93%] sm:left-0 md:-left-[6%] lg:left-[10%] xl:left-[27%] -z-10">
            <div className="w-[140px]">
              <p className="text-6xl font-bold pb-6">2010</p>
              <h3 className="text-2xl font-medium text-center">Founded</h3>
            </div>
             <div className="w-[2px] bg-black"></div>
            <div className="w-[182px]">
              <p className="text-6xl font-bold pb-6">5000+</p>
              <h3 className="text-2xl font-medium text-center">Product Sold</h3>
            </div>
            <div className="w-[2px] bg-black"></div>
            <div className="w-[185px]">
              <p className="text-6xl font-bold pb-6">4500+</p>
              <h3 className="text-2xl font-medium text-center">Best Reviews</h3>
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
};

export default Fashion;
