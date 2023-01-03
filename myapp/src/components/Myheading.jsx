const Myheading = ({name,text,a}) => {
    

    const obj = {
        n:"hihi",
        b:"popo"
    }
    const {n,b} = obj //this is known as distructuring

    return (
        <>
            <h1>{name}</h1>
            <p>{text}</p>
            <h1>This is me with value of {a}</h1>
            <h1>This is imported heading</h1>
            <p>this is b from obj: {b}</p>
            <Myheading2 value= {text}/>
            <footer>{n}</footer>
        </>
    )
}

const Myheading2 = ({value}) => <h1>{value}</h1>

const Myheading3 = () => <h2>This is heading 3</h2>

export default Myheading
export { Myheading2, Myheading3 }