const Header = () => {
  return (
    <div className="absolute w-full flex justify-center z-[100] top-[2rem] lg:top-[3rem]">
      <div className="relative flex justify-between border-solid border-[#ffffff80] bg-[#ffffff60] w-[80%] p-[0.5rem] border-[1px] rounded-[1rem] lg:w-[55%] lg:p-[1rem] lg:border-[2px] lg:rounded-[2rem]">
        <img
          className="h-[2rem] lg:min-h-[3rem]"
          src="/assets/images/logo.svg"
          alt=""
        />
        <div className='hidden lg:flex gap-[2rem] font-["Manrope-Bold"] text-[1.1rem]'>
          <div className="flex items-center">
            <a href="/#">Home</a>
          </div>
          <div className="flex items-center">
            <a href="/#">Features</a>
          </div>
          <div className="flex items-center">
            <a href="/#">Pricing</a>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <a
            href="/#"
            className="px-[1.5rem] py-[1rem] border-solid border-[1px] border-[#E4DDF6] rounded-[1rem] bg-white"
            style={{
              boxShadow:
                "2px 19px 8px rgba(97, 51, 142, 0.01), 1px 11px 7px rgba(97, 51, 142, 0.02), 0px 5px 5px rgba(97, 51, 142, 0.03), 0px 1px 3px rgba(97, 51, 142, 0.04)",
            }}
          >
            Get Started
          </a>
        </div>
        <img
          className="h-[2rem] lg:min-h-[3rem] lg:hidden"
          src="/assets/images/menu-drawer.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
