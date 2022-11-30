import { useEffect } from "react"



const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - PhonoShopia`
    },[title])
}

export default useTitle