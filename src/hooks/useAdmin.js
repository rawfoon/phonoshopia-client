import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/user/admin?email=${email}`)
                .then(res => res.json())
                .then(data => {
                 if(data[0].role === 'admin'){
                     
                     setIsAdmin(true);
                     setIsAdminLoading(false);
                
                 }
                // setIsAdmin(data)
                //      setIsAdminLoading(false);
                // console.log(data);

                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;