import { Navbar } from '../cmps/Navbar';

export function About() {
  return (
    <>
      <Navbar />
      <section className='align-elemets text-center'>
        <div>
          <h1 className='capitalize mt-10 text-3xl sm:text-5xl'>we love <span className='bg-primary px-3 py-3 rounded-xl'>comfy</span></h1>
          <div className='mt-12'>
            <p className="mt-8 text-lg">
              Welcome to our furniture shop! We are passionate about providing comfortable and stylish furniture for your home. Whether you're looking for a cozy sofa, a sleek coffee table, or a luxurious bed, we have everything you need to create your ideal living space.
            </p>
            <p className="mt-4 text-lg">
              Our mission is to make your home a place where you can relax, unwind, and enjoy life's moments. With our carefully curated selection of furniture pieces, you can create a space that reflects your personal style and meets your comfort needs.
            </p>
            <p className="mt-4 text-lg">
              Thank you for choosing us for all your furniture needs. We look forward to helping you furnish your home with quality and comfort in mind.
            </p>
          </div>
          <img src='https://res.cloudinary.com/dxm0sqcfp/image/upload/v1711905770/comfy-store/unn0rvgtkovp1pul4ydw.svg' alt="" />
        </div>
      </section>
    </>
  )
}