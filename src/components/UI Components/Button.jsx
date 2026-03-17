function Button(prop) {
    return(
        <button className={`defaultBtn ${prop.className}`}>
            {prop.text}
        </button>
    )
}

export default Button