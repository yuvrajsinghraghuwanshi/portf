import person from "../../assets/images/person2.png";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">

        {/* Profile Image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-[430px] h-[500px] overflow-hidden rounded-xl">
            <img
              className="w-full h-full object-cover object-top"
              src={person}
              alt="Yuvraj Singh Raghuwanshi"
            />
          </div>

          {/* Social Media */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 bg-white rounded-[4px] shadow-2xl">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="max-sm:w-full w-[33rem]">

          <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-6">
            Yuvraj Singh Raghuwanshi

            <span className="block text-picto-primary text-xl sm:text-2xl mt-2 font-medium">
              Full Stack Web Developer
            </span>
          </h2>

          <div className="text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600">

            <p>
              I'm a Software Engineering student at IIIT Kota with a passion
              for building modern, responsive and user-friendly websites.
              I enjoy transforming ideas into beautiful digital experiences
              using React, JavaScript and modern frontend technologies.
            </p>

            <p className="mt-4">
              My expertise includes React, HTML, CSS, JavaScript, Python,
              C++, Git and responsive web development. Whether it's a business
              website, landing page or portfolio, I focus on delivering
              high-quality solutions that are fast, elegant and optimized
              for every device.
            </p>

          </div>

          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#contact"
            >
              Hire Me
            </a>

            <a
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 bg-white duration-300 transition-all hover:border-picto-primary hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
              href="#portfolio"
            >
              View Portfolio
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;