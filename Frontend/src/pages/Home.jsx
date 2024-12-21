import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [openPanel, setOpenPanel] = useState(false);
  const panelRef = useRef(null);
  const panleClose = useRef(null);
  const uberLogo = useRef(null);
  const submitHandeler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    console.log(openPanel);
    if (openPanel) {
      gsap.to(panelRef.current, {
        height: "100%",
        duration: 0.5,
      });
      gsap.to(panleClose.current, {
        opacity: 1,
        duration: 0.5,
      });
      gsap.to(uberLogo.current, {
        opacity: 0,
        duration: 0.5,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "30%",
        duration: 0.5,
      });
      gsap.to(panleClose.current, {
        opacity: 0,
        duration: 0.5,
      });
      gsap.to(uberLogo.current, {
        opacity: 1,
        duration: 0.5,
      });
    }
  }, [openPanel, panleClose]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        ref={uberLogo}
        className="w-16 absolute left-5 top-5 z-10"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">{/* image for temporary use  */}</div>
      <div className="bg-[url(https://cdn.theatlantic.com/thumbor/BlEOtTo9L9mjMLuyCcjG3xYr4qE=/0x48:1231x740/960x540/media/img/mt/2017/04/IMG_7105/original.png)] flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative" ref={panelRef}>
          <h5
            className="absolute opacity-0 right-6 top-6 text-2xl"
            ref={panleClose}
            onClick={() => setOpenPanel(false)}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form className="relative py-3" onSubmit={submitHandeler}>
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => setOpenPanel(true)}
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setOpenPanel(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full">
            Find Trip
          </button>
          <div className="bg-white h-0">
            <LocationSearchPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
