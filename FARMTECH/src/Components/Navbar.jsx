

const Navbar = () => {
    return (
        <header className="h-16 flex  justify-between items-center p-[40px]">
            <div>
            <h1 className="text-2xl font-bold">FARMTECH</h1>
            </div>
            <div className="w-[200px]  flex justify-between">
            <button  className="text-lg font-medium" onClick={Login}>Login</button>
            <link rel="import" href="component.html" />
            <button className="text-lg bg-[#222684] text-white font-medium border-2 border-solid border-[#222684] rounded-[10px] w-[100px]">Register</button>
            </div>
        </header>
    );
};

export default Navbar;