import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="h-screen w-full bg-[url('https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex justify-between flex-col">
                <img loading='lazy' className="w-20 mt-5 ml-5 filter invert" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Logo" />
                <div className="bg-white py-8 px-10 flex flex-col">
                    <h2 className="text-3xl text-center font-extrabold">Get Started With Uber</h2>
                    <Link to={'/login'} className="bg-black flex justify-center items-center mt-2 text-white py-2 px-4 text-center text-xl">Continue</Link>
                </div>
            </div>
        </div>
    );
}

export default Home