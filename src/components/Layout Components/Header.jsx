import vidyalogo from '../../assets/vidyalok.svg'
import Button from '../UI Components/Button'
import style from './style.module.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <>
            <div className={style.logo}>
                <img src={vidyalogo} className={style.headlogo} alt='Vidyalok Logo' />
                <Link to='/' className={style.logoTitle}>VidyAlok</Link>
            </div>
            <nav>
                <Link to="/feature">Feature</Link>
                <Link to="/how-it-works">How it Works</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to='/reviews'>Reviews</Link>
            </nav>
            <div className={style.btnsGroup}>
                <Button text='Sign In' className='transparentBtn' />
                <Button text='Register'/>
            </div>
        </>
    )
}

export default Header