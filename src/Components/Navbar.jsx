const Navbar = () => {
  return (
    <nav className=" bg-[#FAE3B6] ">
      <div className="container m-auto flex justify-between text-center">
        <div className=" py-6">
        <h1 className="text-5xl justify-start flex font-semibold font-['nunitoFont'] text-amber-900">Fresh</h1> 
        </div>
        <div className="py-9">
          <ul className="flex gap-x-14 font-semibold text-2xl font-['nunitoFont'] ">
            <li className=" hover:text-red-500 hover:delay-150">
              Home
            </li>
            <li className=" hover:text-red-500 hover:delay-150">
              Woman
            </li>
            <li className=" hover:text-red-500 hover:delay-150">
              Kids
            </li>
            <li  className=" hover:text-red-500 hover:delay-150">
              Collection
            </li>
            <li className=" hover:text-red-500 hover:delay-150">
              Trends
            </li>
          </ul>
        </div>
        <div className=" py-6 ">
          <button className="font-semibold text-2xl rounded-xl border-2 bg-[#FDBB57] py-3 px-3 mr-2 font-['nunitoFont'] hover:delay-100 hover:bg-white hover:text-slate-950 ">
          Login
          </button>
          <button className="font-semibold text-2xl rounded-xl border-2 bg-[#FDBB57] py-3 px-3 font-['nunitoFont'] hover:delay-100 hover:bg-white hover:text-slate-950  ">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
