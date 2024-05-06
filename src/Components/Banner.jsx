const Banner = () => {
  return (
    <section className="p-24 bg-[#FAE3B6] ">
      <div className="container mx-auto flex ">
        <div className="w-1/2 font-semibold">
          <h1 className="w-[550px] text-6xl font-['interFont'] hover:delay-75 hover:text-red-500">
            Find The Best Fashion Style For You
          </h1>
          <p className="w-[530px] font-normal text-xl mt-10 mb-20 font-['Popins'] hover:delay-75 hover:text-yellow-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio
            pellentesque mattis pulvinar felis. At arcu ornare rhoncus,
            elementum non viverra.
          </p>
          <button className="font-semibold text-2xl rounded-xl border-2 bg-[#000000] text-[#FFFFFF] px-24 py-6 font-['nunitoFont'] hover:delay-100 hover:bg-white hover:text-slate-950">
            Sign up
          </button>
        </div>
        <div className="w-1/2">
          <img src="banner.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
