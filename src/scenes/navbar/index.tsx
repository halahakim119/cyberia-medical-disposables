import React, { useState, useEffect, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import Logo from "@/assets/CompanyLogo.png";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar: React.FC<Props> = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [shouldShowNavbar, setShouldShowNavbar] = useState<boolean>(true);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-gray-20 drop-shadow";
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setShouldShowNavbar(isTopOfPage || isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTopOfPage, prevScrollPos]);

  const closeMenu = () => {
    setIsMenuToggled(false);
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      closeMenu();
    }
  };

  return (
    <nav >
      <div className={`${navbarBackground} ${shouldShowNavbar ? "opacity-100" : "opacity-0 "} transition-opacity duration-300 ease-in-out fixed top-0 z-30 w-full  ${isAboveMediumScreens ? "p-10" : "p-5"}`}>

        <div className="flex items-center justify-between">
          {/* LEFT SIDE */}
          <div className="flex items-center">
            <img alt="Logo" src={Logo} className={isAboveMediumScreens ? "w-auto h-14" : "w-auto h-12"} />
            <h1 className={`text-primary-100 ${isAboveMediumScreens ? "text-5xl" : "text-4xl"} font-bold ml-2`}>YBERIA</h1>
          </div>



          {/* RIGHT SIDE */}
          {isAboveMediumScreens ? (
            <>
              <div className="flex space-x-8 text-sm">
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Our Products" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Certificates" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Sponsors" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </>


          ) : (
            <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
      </div>


      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black bg-opacity-50" onClick={handleOverlayClick} ref={overlayRef}>
          <div className="fixed right-0 bottom-0 z-50 h-full w-[200px] bg-gray-20  drop-shadow-xl">
            <div className=" flex flex-col items-center gap-10 text-1xl mt-20">
              <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Our Products" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Certificates" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page="Sponsors" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
