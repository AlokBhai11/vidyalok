function Badge(prop) {
    return (
        <span className={prop.className}>{prop.text}</span>
    )
}

export default Badge