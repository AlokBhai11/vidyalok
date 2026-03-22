import { StepsCard } from '../UI Components/Card'
import style from './style.module.css'

function Process() {
    return (
    <>
        <h6 className={style.label}>How it Works</h6>
        <h1 className={style.processTitle}>Up and running in <br/> under 10 minutes</h1>
        <p className="processSub">No technical knowledge needed. Register your institution and go live today.</p>

        <div className="stepsCard">
            <StepsCard />
            <StepsCard />
            <StepsCard />
            <StepsCard />
        </div>
    </>
    )
}

export default Process