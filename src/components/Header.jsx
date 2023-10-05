import logo from "../assets/Images/disney.png";

const Header = () => {
  return (
    <div className="bg-black">
      <img src={logo} alt="logo" className="w-[80px]" />
    </div>
  );
};

export default Header;
