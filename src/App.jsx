import bg from 'F:/tugas/cv/TravelTimeReact/gambar/bg.png';
import dolla from 'F:/tugas/cv/TravelTimeReact/gambar/dolla.png';
import Discount from "./discount";
import image from "F:/tugas/cv/TravelTimeReact/gambar/image.png";
import image2 from "F:/tugas/cv/TravelTimeReact/gambar/image2.png";
import image3 from "F:/tugas/cv/TravelTimeReact/gambar/image3.png";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ticket from './ticket';
import star from 'F:/tugas/cv/TravelTimeReact/gambar/star.svg'

function dropdownFunction() {
   var x = document.getElementById("list");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

const App = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
  <>
    <img src={bg} alt="bg" className="absolute top-0 w-[100%] -z-2"/>
    <h1 className="text-center font-bold bg-[#222831] text-white py-1 w-full cursor-pointer" onClick={dropdownFunction}>TravelTime.co</h1>
    <div className="text-white font-bold hidden absolute top-8 w-full bg-[#222831] px-20 h-50" id="list">
      <div className="flex flex-col gap-2">
        <a href='#'>Home</a>
        <a href='#'>Login</a>
        <a href='#'>Promo</a>
        <a href='#'>Hotels</a>
        <a href='#'>Vacation</a>
        <a href='#'>Refferal code</a>
      </div>
    </div>
    <h1 className="text-center font-bold mt-50 text-[50px] text-white drop-shadow-md">TravelTime.co</h1>
    <h4 className="text-center w-200 mx-auto text-white drop-shadow-md">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, nostrum accusamus, architecto error doloremque deleniti necessitatibus qui ab laudantium vel reprehenderit autem? Qui ratione laborum ullam deserunt veniam tempore fuga.</h4>
    
    <img src={dolla} alt="dolla" className="mx-auto mt-100 w-70" />
    <h1 className="text-center text-[50px] text-[#DFD0B8] font-bold mb-10">Get The Best Price</h1>

    <h1 className="text-white font-bold text-[20px] mb-10 text-center">Category</h1>
    <div className="flex flew-row mb-10 mx-25">
      <Discount image={image} name="Beach" />
      <Discount image={image2} name="Hotels" />
      <Discount image={image3} name="Actifity" />
    </div>
    <h1 className="text-center text-white font-bold text-[20px] mb-5">Explore New Country</h1>
    <div className="w-[85%] mx-auto mb-10">
      <Slider {...settings}>
      <Discount image={image} name="Japan" />
      <Discount image={image2} name="Korea" />
      <Discount image={image3} name="Indonesia" />
      <Discount image={image} name="Spain" />
      <Discount image={image2} name="Italy" />
      <Discount image={image3} name="London" />
      </Slider>
    </div>
    <h1 className="text-center text-white font-bold text-[20px] mb-5">Special Offer</h1>
    <div className="mx-25 flex flex-row mb-20">
      <Ticket image={image3} star={star} name="disneyland Ticket" price="Rp1.200.000" discount="Rp1.500.000" rating="4.8/5.0"/>
      <Ticket image={image} star={star} name="disneyland Ticket" price="Rp1.200.000" discount="Rp1.500.000" rating="4.8/5.0"/>
      <Ticket image={image2} star={star} name="disneyland Ticket" price="Rp1.200.000" discount="Rp1.500.000" rating="4.8/5.0"/>
    </div>

    <div>
      <h1 className="text-center text-white text-[20px] font-bold mb-5">About us</h1>
      <h4 className="text-center w-200 text-white mx-auto mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quisquam ab hic alias ratione adipisci eveniet dolores illo eos. Facere iste numquam vero laudantium iure ducimus, nobis sed fugiat consequatur.
      Esse culpa obcaecati unde quasi, qui nobis omnis cumque porro maiores vel voluptates quia molestias animi. Minus voluptate, deleniti quae non atque debitis, pariatur nobis expedita consequatur, unde earum aliquam.</h4>
    </div>
  </>
  )
}

export default App