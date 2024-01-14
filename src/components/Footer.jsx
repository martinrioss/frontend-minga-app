import { Link } from 'react-router-dom'
import footer from '../assets/footer.webp'
import minga from '../assets/minga.jpg'
import heart from '../assets/heart.svg'
import vimeo from '../assets/Vimeo.svg'
import facebook from '../assets/facebook-black.svg'
import youtube from '../assets/Youtube.svg'
import twitter from '../assets/Twitter.svg'
export default function Footer () {
  return (
    <footer className='shadow-lg border-t'>
      <img src={footer} alt="footer image" className='hidden md:block w-full h-40 object-center rounded-b-[100px]' />
      <section className='flex flex-col md:flex-row items-center mt-5 mb-5 w-full'>
        <div className='flex justify-evenly w-full md:w-[33%] m-3 font-semibold '>
          <Link to={'/'}>Home</Link>
          <Link to={'/mangas'}>Mangas</Link>
        </div>
        <div className='md:w-[33%] flex justify-center'>
          <Link to={'/j'}>
            <img src={minga} alt="logo minga" className='h-10 w-32 md:h-11 md:w-44' />
          </Link>
        </div>
        <div className='mt-5 mb-5 md:w-[33%] md:flex md:flex-col md:items-center'>
          <div className='flex justify-evenly md:w-[50%]'>
            <a href="https://es-la.facebook.com" target="_blank" rel="noreferrer">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://vimeo.com/" target="_blank" rel="noreferrer">
              <img src={vimeo} alt="vimeo" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
          <Link className='mt-2 mb-2 flex items-center justify-center text-white bg-gradient-to-b from-gradient-start to-gradient-end w-32 h-10 rounded-lg md:w-44'>
            <p>Donate</p>
            <img src={heart} alt="heart" className='w-5 h-5 mt-1 ml-1'/>
          </Link>
        </div>
      </section>
    </footer>
  )
}
