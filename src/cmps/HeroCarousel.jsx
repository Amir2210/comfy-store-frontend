import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export function HeroCarousel() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass="container rounded-lg"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 1
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 1
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <img
        src="https://res.cloudinary.com/dxm0sqcfp/image/upload/v1711618649/comfy-store/pob7wpkxpj2c3m37pj4i.webp"
        style={{
          display: 'block',
          height: '100%',
          margin: 'auto',
          width: '100%',
          borderRadius: '0.5rem'
        }}
      />
      <img
        src="https://res.cloudinary.com/dxm0sqcfp/image/upload/v1711618656/comfy-store/bob2bohwob6t0ero3ibv.webp"
        style={{
          display: 'block',
          height: '100%',
          margin: 'auto',
          width: '100%',
          borderRadius: '0.5rem'
        }}
      />
      <img
        src="https://res.cloudinary.com/dxm0sqcfp/image/upload/v1711618653/comfy-store/o2b2ha7gngavn8cforlp.jpg"
        style={{
          display: 'block',
          height: '100%',
          margin: 'auto',
          width: '100%',
          borderRadius: '0.5rem'
        }}
      />
      <img
        src="https://res.cloudinary.com/dxm0sqcfp/image/upload/v1711618842/comfy-store/ezwkit7fumi1p5h9rabl.webp"
        style={{
          display: 'block',
          height: '100%',
          margin: 'auto',
          width: '100%',
          borderRadius: '0.5rem'
        }}
      />
    </Carousel>
  )
}