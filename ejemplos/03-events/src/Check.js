function Check() {
    const check = () => {
        console.log(document.getElementById('check').checked ? 'encendido' : 'apagdo');
    }
    return (
        <div>
            <input type="checkbox" id="check" onChange={check} />
        </div>
    )
}
export default Check;