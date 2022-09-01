function Echo() {
    const handleChange = (e) => {
        console.log(e.target.value);
    }
    return (
        <input placeholder="Escribe algo" onChange={handleChange}/>
    )
}

export default Echo;