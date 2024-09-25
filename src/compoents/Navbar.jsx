import Link from 'next/link';

export default function Navbar() {
  return (
 <nav className='container'>
  
  <Link className='home' href="/" >Thoughts</Link>
  <Link className='link' href="/addThoughts" >Add Thoughts</Link>
 </nav> 
 )
}
