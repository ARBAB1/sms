
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }) => {


  return (
    <div className="w-full " style={{ backgroundColor:'#1D2430' ,padding:50 }}>
      <div className="rounded-sm shadow-three hover:shadow-gray-dark lg:px-5 xl:px-8">
   
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-8 text-white text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          {`“${testimonial?.content}`}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <Image src=  {`${testimonial?.image}`} alt={testimonial?.name}  width={50} height={50}/>
          </div>
          <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-white dark:text-white lg:text-base xl:text-lg">
              {testimonial?.name}
            </h3>
            <p className="text-sm text-body-color text-white">{testimonial?.designation}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
