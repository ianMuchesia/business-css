import React, {useState} from 'react'
import { AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import styles from '@/styles/navbar.module.css'
const Navbar = () => {


    const [ toggle , setToggle ] = useState(false)
  return (
   <header>
    <nav className={styles.navbar}>
        <div className={styles.logo}>
        <h1>Phlox</h1>
        <h1 className={styles.logoBusiness}>Business</h1>
        </div>
        <div className={styles.menu} onClick={()=>{setToggle(prevToggle=>!prevToggle)}}>
            <span>
               { toggle? <AiOutlineClose size={40}/>:
               <AiOutlineMenu size={40}/>}
            </span>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Services</li>

        </ul>
      
    </nav>
   </header>
  )
}

export default Navbar