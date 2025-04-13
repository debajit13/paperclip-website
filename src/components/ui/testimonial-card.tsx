const TestimonialCard = ({
  name = 'Jaycee',
  handle = '@loveitall0',
  rating = 5,
  testimonial = 'Paperclip is such a refreshing buy and sell app that is unique from others and lovely to use!',
  avatarUrl = '/api/placeholder/40/40',
}) => {
  return (
    <div
      className='bg-white rounded-2xl lg:p-4 p-2  md:max-w-[216px]'
      style={{
        boxShadow: '0px 4px 56px 0px #00000012',
      }}
    >
      {/* Star Rating */}
      <div className='flex mb-4'>
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className='bg-[#FFF8F9] mr-1 rounded-[4px] p-1 flex items-center justify-center'
            >
              <svg
                width='13'
                height='13'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='text-[#FF9CAA] mr-1'
              >
                <path
                  d='M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z'
                  fill='currentColor'
                />
              </svg>
            </div>
          ))}
      </div>

      {/* Testimonial Text */}
      <p className='text-[#1B1B1B] font-poppins mb-5 text-[8px] lg:text-[12px]  font-[500] text-left'>
        {testimonial}
      </p>

      {/* User Info */}
      <div className='flex items-center'>
        <div className='w-[25px] lg:w-[34px] h-[25px] lg:h-[34px] rounded-full overflow-hidden mr-2'>
          <img
            src={avatarUrl}
            alt={`${name}'s avatar`}
            className='w-full h-full object-cover'
          />
        </div>
        <div>
          <p className='font-normal font-poppins text-left text-[10px] lg:text-[12px] text-[#434141]'>
            {name}
          </p>
          <p className='text-[10px] lg:text-[12px] font-poppins font-normal text-left text-[#F71D3B]'>
            {handle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
