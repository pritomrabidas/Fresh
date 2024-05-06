const Collection = () => {
  return (
    <section className="pt-20 #FFFFFF">
      <div className="container mx-auto">
        <h2 className="justify-center font-bold flex text-5xl font-['interFont'] hover:delay-100 hover:text-red-700">
          New Collection
        </h2>
        <div className="flex mt-32 gap-24">
          <div className="w-1/3 relative">
            <img src="collection-1.png" alt="" className="h-[400px]" />
            <div className="w-60 h-12 bg-[#FFFFFF] text-[black] rounded-xl text-center items-center flex justify-center m-auto absolute bottom-10 left-1/2 -translate-x-1/2 hover:delay-100 hover:bg-black hover:text-white ">
              <p className="">Sweater</p>
            </div>
          </div>
          <div className="w-1/3 relative">
            <img src="collection-2.png" alt="" className="h-[400px]" />
            <div className="w-60 h-12 bg-[#FFFFFF] text-[black] rounded-xl text-center items-center flex justify-center mx-auto absolute bottom-10 left-1/2 -translate-x-1/2 hover:delay-100 hover:bg-black hover:text-white">
              <p>Jeans</p>
            </div>
          </div>
          <div className="w-1/3 relative">
            <img src="collection-3.png" alt="" className="h-[400px]" />
            <div className="w-60 h-12 bg-[#FFFFFF] text-[black] rounded-xl text-center items-center flex justify-center mx-auto absolute bottom-10 left-1/2 -translate-x-1/2 hover:delay-100 hover:bg-black hover:text-white">
              <p>Baskets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
