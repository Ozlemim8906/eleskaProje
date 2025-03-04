import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Category = ({ slides }) => {
  const image = "assest/homeGrid/335.jpg";

  return (
    <div className="w-full mt-10 ">
      <div className="md:w-[80%] lg:w-[66%] mx-auto ">
        <div className="flex items-center justify-center mb-10 sm:flex-row gap-20">
          <div className=" items-center md:w-1/2 lg:w-1/3 p-2  w-1/2 ">
            <h3 className="font-semibold text-2xl leading-10 py-3">
              Zengin Kategoriler
            </h3>
            <p className="leading-7 py-5">
              Geniş menümüzle herkesindamak zevkine düşkünseçenekler bulunur.
              Özenle seçilmiş, şeflerimiz tarafından hazırlanan özel
              tariflerimizi deneyin.
            </p>
            <Link to="/menu">
              <button className=" font-extrabold tracking-widest  border-2 border-black  text-black p-2 px-3 text-sm hover:bg-black hover:text-white">
                HIZLI SİPARİŞ
              </button>
            </Link>
          </div>
          <div className="right sm:inline-block md:basis-1/2 lg:basis-1/3 flex justify-center sm:hidden ">
            <img src={image} alt="" className="rounded-full w-40 h-40" />
          </div>
        </div>
        <div className="flex justify-center flex-wrap">
          {slides.map((slide, index) => {
            return (
              <div className="category-card grid" key={index}>
                <a href="#">
                  <div
                    className="category-card-image"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  ></div>
                </a>
                <div className="slider-content">
                  <p className="slider-card-title">
                    <a href="#">{slide.title} </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
