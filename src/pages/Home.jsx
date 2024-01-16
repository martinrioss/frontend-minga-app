import { Link } from "react-router-dom"
export default function Home () {
  return (
    <main>
        <section className="bg-homebg md:bg-[center_top_-10rem] bg-no-repeat bg-cover h-[80vh] w-full relative -top-10 -z-10 flex flex-col justify-center items-center font-semibold">
          <h1 className="md:text-4xl text-2xl">Your comic book store ✨</h1>
          <p className="font-normal">Explore our catalog to live adventure of</p>
          <p className="font-normal">your life</p>
          <Link to={'/mangas'} className='mt-2 mb-2 flex items-center justify-center bg-gradient-to-b from-gradient-start to-gradient-end w-32 h-10 rounded-lg md:w-44'>
            <p>Let’s go</p>
          </Link>
        </section>
    </main>
  )
}
