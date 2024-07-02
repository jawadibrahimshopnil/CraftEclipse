import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper min-w-64 w-64 max-w-96"
        >
            <SwiperSlide><img src="https://s7d5.scene7.com/is/image/PaperSource/810094256210?resMode=sharp2&op_usm=2,1,25,1&fmt=jpg&qlt=85&fit=constrain,1&wid=600&hei=600" /></SwiperSlide>
            <SwiperSlide><img src="https://s7d5.scene7.com/is/image/PaperSource/810094256227?resMode=sharp2&op_usm=2,1,25,1&fmt=jpg&qlt=85&fit=constrain,1&wid=600&hei=600" /></SwiperSlide>
            <SwiperSlide><img src="https://s7d5.scene7.com/is/image/PaperSource/196940103519?resMode=sharp2&op_usm=2,1,25,1&fmt=jpg&qlt=85&fit=constrain,1&wid=600&hei=600" /></SwiperSlide>
            <SwiperSlide><img src="https://s7d5.scene7.com/is/image/PaperSource/810094256203?resMode=sharp2&op_usm=2,1,25,1&fmt=jpg&qlt=85&fit=constrain,1&wid=600&hei=600" /></SwiperSlide>
        </Swiper>
    );
};

export default Slider;