const Footer = () => {
  return (
    <section className="bg-[#CFA485]  mt-40 pb-10 ">
      <div className="container mx-auto flex">
        <div className="">
          <h2 className=" font-bold flex text-4xl pt-20 font-['interFont']">
            Best Seller Product
          </h2>
          <p className="w-[530px] font-normal text-xl  mb-10 pt-12 font-['Popins']">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque,
            velit tortor quam at donec etiam bibendum sagittis. Libero tempor,
            lacus amet, scelerisque neque mauris odio risus nec. Nisl,
            parturient at morbi morbi sit arcu. At integer maecenas tortor non
            lectus.
          </p>
          <button className="font-semibold text-2xl rounded-xl border-2 bg-[#000000] text-[#FFFFFF] px-24 py-6 hover:delay-100 hover:bg-white hover:text-slate-950">
           Learn More
          </button>
        </div>
        <div className="w-[300px] h-[450px] mt-16 ml-20 mr-5">
          <img src="footer-1.png" alt="" />
        </div>
        <div className="w-[300px] h-[450px] mt-16">
          <img src="fotter-2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
