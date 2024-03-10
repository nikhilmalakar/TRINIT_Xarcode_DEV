import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      {/* <h1 className="h1 mb-6 text-center">Languages</h1> */}
      {/* {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-[#0699cd] transition-colors hover:text-[#0699cd] ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-[#0699cd]"
                    : "lg:text-[#0699cd]"
                } lg:leading-5 lg:hover:text-blue-900 xl:px-12`}
              >
                {item.title}
              </a>
            ))} */}
      <ul className="flex">
        {companyLogos.map((obj) => (
          <li
            className="flex items-center justify-center space-evenly flex-1 h-[8.5rem]"
            key={obj.id}
          >
            <div className="flex flex-col items-center justify-center">
              <img
                src={obj.logo}
                width={60}
                height={10}
                alt={obj.logo}
                class="transform hover:scale-110 transition duration-300 ease-in-out"
              />

              <h3 className="m-2 font-bold">{obj.title}</h3>
            </div>
          </li>
        ))}
      </ul>
      <p className=" mt-10 text-center text-xl">
        {" "}
        We have teachers in over 70 languages!
      </p>
    </div>
  );
};

export default CompanyLogos;
