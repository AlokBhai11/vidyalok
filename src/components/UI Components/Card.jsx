function Card() {
    return (
        <div className="CardContainer">
            Card
        </div>
    )
}

function StepsCard() {
    return(
        <div className="step-card" style={{opacity: 1, transform: "translateY(0px)", transition: "opacity 0.5s, transform 0.5s"}}>
        <div className="step-num">STEP 01</div>
        <div className="step-icon">🏫</div>
        <div className="step-title">Register Institution</div>
        <div className="step-desc">Fill a simple form with your school name, type, and contact details. Takes less than 2 minutes.</div>
        <div className="step-arrow">→</div>
      </div>
    )
}

export default Card
export { StepsCard }