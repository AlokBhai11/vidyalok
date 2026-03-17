import style from './style.module.css'
import Badge from '../UI Components/Badge'
import Button from '../UI Components/Button'
import StatCard from '../UI Components/StatCard'

function Home() {
    return (
        <>
            <div className={style.hero}>
                <div className={style.herogrid} />
                <Badge text='NOW LIVE – TRUSTED BY 500+ INSTITUTIONS' className='badgeShow'/>
                <h1 className={style.slogan}>One Platform.<br/><span>Every School.</span><br /> infinite <span>Futures.</span></h1>
                <p className={style.description}>Vidyalok gives every school, college, and institute their own branded digital identity — with student portals, management tools, and smart automation. Free to start. Built to scale.</p>
                <div className={style.btnGrp}>
                    <Button text='Register Your School – Free'/>
                    <Button text='See How it Works' className='transparentBtn'/>
                </div>
                <div className={style.heroStat} >
                    <StatCard />
                    <StatCard />
                    <StatCard />
                    <StatCard />
                </div>
            </div>
        </>
    )
}

export default Home