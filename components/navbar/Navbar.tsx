
import { ActiveLink } from "../active-link/ActiveLink";


export const Navbar = async() => {

 
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded gap-5'>
        <ActiveLink path="/about" texto="About"/>
        <ActiveLink path="/pricing" texto="Precios"/>
        <ActiveLink path="/contact" texto="Contact"/>
    </nav>
  )
}
