import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Yuvraj completely redesigned our restaurant website and gave it a modern, professional look.",
    quote: `The new website is fast, mobile-friendly, and much easier for customers to use. We've received several compliments from customers, and online inquiries have increased since the launch.`,
    name: "James Carter",
    designation: "Owner, Family Restaurant",
  },
  {
    message:
      "Our hotel booking website looks clean, modern, and works perfectly across all devices.",
    quote: `Yuvraj understood exactly what we wanted and delivered a responsive website with a smooth booking experience. Communication was excellent throughout the project, and everything was completed on time.`,
    name: "Sophia Mitchell",
    designation: "Manager of Hotel",
  },
  {
    message:
      "Our landscaping business finally has a professional online presence that represents our work.",
    quote: `The website showcases our services beautifully and has helped us receive more enquiries from potential clients. The entire process was straightforward, and the final result exceeded our expectations.`,
    name: "Daniel Brooks",
    designation: "Owner",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
