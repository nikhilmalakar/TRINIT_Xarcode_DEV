import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useEffect, useState ,React} from "react";

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import StudentLoginModal from "../components/register/StudentLoginModal.jsx";
import StudentSignupModal from "../components/register/StudentSignupModal.jsx"
import TutorSignupModal from "../components/register/TutorSignupModal.jsx"
import TutorLoginModal from "../components/register/TutorLoginModal.jsx"



const Header = () => {

  const [studentLoginModal, setStudentLoginModal] = useState(false);
  const [studentSignupModal, setStudentSignupModal] = useState(false);
  const [tutorLoginModal, setTutorLoginModal] = useState(false);
  const [tutorSigupModal, setTutorSignupModal] = useState(false);

  const pathname = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);
  const [isHomePage, setIsHomePage] = useState(
    pathname.pathname === "/" || pathname.pathname === "/onetoone"
  );

  useEffect(() => {
    setIsHomePage(
      pathname.pathname === "/" || pathname.pathname === "/onetoone"
    );
  }, [pathname]);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  const [loc,setloc] = useState(false);

  const signInHandler = () => {
    setloc(true);
  }
  return (
    <div
      className={`${
        isHomePage
          ? "fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-white lg:border-none"
          : "hidden top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-white lg:border-none"
      } bg-white ${
        isHomePage && openNavigation ? "bg-white" : "bg-white lg:bg-transparent"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="/">
          <h1 className=" text-3xl font-bold text-[#5bbcde] transition-colors hover:text-blue-1000">
            LINGUA<span className="text-[#2e4057]">Connect.</span>
          </h1>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 border-b-0 bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-xs uppercase text-[#0699cd] transition-colors hover:text-[#0699cd] ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-[#0699cd]"
                    : "lg:text-[#0699cd]"
                } lg:leading-5 lg:hover:text-blue-900 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {!loc && (
          <>
            <a
              href="#signup"
              className="button text-sm hidden mr-8 text-[#0699cd] transition-colors hover:text-[#0699cd] lg:block"
              onClick={() => {
                setStudentLoginModal(true);
                signInHandler();
              }}
            >
              Sign In
            </a>

            <Button
              className="hidden font-semibold lg:flex"
              onClick={() => setTutorSignupModal(true)}
            >
              Become a Tutor
            </Button>
          </>
        )}

        {studentLoginModal && (
          <StudentLoginModal
            setLogin={() => setStudentLoginModal(false)}
            setSignup={() => setStudentSignupModal(true)}
            onClose={() => setStudentLoginModal(false)}
          />
        )}

        {studentSignupModal && (
          <StudentSignupModal
            setLogin={() => setStudentLoginModal(true)}
            setSignup={() => setStudentSignupModal(false)}
            onClose={() => setStudentSignupModal(false)}
          />
        )}

        {tutorLoginModal && (
          <TutorLoginModal
            setLogin={() => setTutorLoginModal(false)}
            setSignup={() => setTutorSignupModal(true)}
            onClose={() => setTutorLoginModal(false)}
          />
        )}
        {tutorSigupModal && (
          <TutorSignupModal
            setLogin={() => setTutorLoginModal(true)}
            setSignup={() => setTutorSignupModal(false)}
            onClose={() => setTutorSignupModal(false)}
          />
        )}

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
