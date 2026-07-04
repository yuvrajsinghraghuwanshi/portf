import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
// import card4 from "../../assets/images/portfolio-images/card-4.png";
// import card5 from "../../assets/images/portfolio-images/card-5.png";
// import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "UI-UX DESIGN",
    title: "Beauty Salon Website",
    description:
      "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
    link: "https://themewagon.github.io/pretty/",
  },
  {
  id: 2,
  image: card2,
  category: "WEB DEVELOPMENT",
  title: "Hotel Booking Website",
  description:
    "A modern hotel booking website featuring an elegant user interface, responsive design, room listings, and a seamless booking experience.",
  link: "https://themewagon.github.io/harbor-lights/",
},
{
  id: 3,
  image: card3,
  category: "WEB DEVELOPMENT",
  title: "Restaurant Website",
  description:
    "A responsive restaurant website with an attractive menu, online reservation section, and a modern layout designed to engage customers.",
  link: "https://themewagon.github.io/sarab/",
},

];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://www.linkedin.com/in/yuvraj-singh-raghuwanshi-8bb936311/"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
