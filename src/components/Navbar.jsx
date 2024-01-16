import { useState } from 'react'
import navLinks from '../utilities/nav_links'
import { Link } from 'react-router-dom'
import menu from '../assets/menu.svg'
import close from '../assets/close.svg'
import user from '../assets/user.webp'
function Navbar () {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <nav className='p-2 text-white font-semibold h-10'>
        <section className='flex justify-between'>
          <button onClick={() => setOpen(!open)}>
            <img src={menu} alt="menu" className='h-7 w-10' />
          </button>
          <Link to={'/'}>
            <img src="Logo.png" alt="logo minga" className='h-7 w-12' />
          </Link>
        </section>
        {
          open && (
            <div className='fixed inset-0 bg-black bg-opacity-50 z-0' onClick={() => setOpen(false)}></div>
          )
        }
        <section className={`fixed inset-y-0 left-0 flex flex-col w-64 bg-main p-4 transform ${open ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out`}>
          <div className='flex justify-between items-center'>
            <img src={user} alt="user" className='h-8 w-8'/>
            <p>usuario@gmail.com</p>
            <button onClick={() => setOpen(false)}>
              <img src={close} alt="close" className='h-4 w-4 mt-1' />
            </button>
          </div>
          <ul className='mt-5'>
            {
              navLinks.map((e) => (
                <li key={e.name} className='mt-4 mb-4 cursor-pointer w-fit'>
                  {e.name}
                </li>
              )
              )
            }
          </ul>
        </section>
      </nav>
    </header>
  )
}

export default Navbar
