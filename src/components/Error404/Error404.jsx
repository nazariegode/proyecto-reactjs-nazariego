import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Error404 = () => {
    const [segundos, setSegundos] = useState(5)
    const navigate  = useNavigate()

    useEffect(() =>{
        setInterval(() => {
            setSegundos((state) => -1)
        }, 1000)
    }, [])

    useEffect (() => {
        if (segundos === 0) navigate ("/")
    }, [segundos])


    return (
        <div className="container my-5">
            <h2>404 NOT FOUND</h2>
            <br/>

            Será redirigido a la página de inicio en {segundos} segundos...
        </div>
    )
}

export default Error404