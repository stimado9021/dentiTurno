import { useRevalidator } from "react-router-dom"

interface turnDto{
    description:string,
    fechaCita:string,
    horaCita:string,
    userId:number     
}

export default turnDto;