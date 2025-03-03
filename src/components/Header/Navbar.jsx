
const Navbar = () => {
    return (
      <div className="bg-gray-400 p-3">
            <div className="flex justify-between w-11/12 mx-auto p-5">
                <div>
                    <h2 className="uppercase text-xl">Logo</h2>
                </div>
                <div>
                    <ul className="flex gap-3  capitalize text-xl ">
                        <li>Home</li>
                        <li>product</li>
                        <li>cart1</li>
                        <li>$500</li>
                    </ul>
                </div>
            </div>
      </div>
    );
};

export default Navbar;