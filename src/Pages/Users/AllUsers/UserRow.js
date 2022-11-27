import React,{useContext} from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import toast from 'react-hot-toast'

const UserRow = ({ user, handleMakeAdmin, refetch}) => {
    // console.log(user);

    const {removeUser} = useContext(AuthContext)
    const{_id, name , email, photoURL, role, verified} = user


    const handleDelete = id => {        
        // removeUser()
        // .then(()=>{
        //     deleteFromDb()
        // })
        // .catch(e => console.error(e))

       

            
        fetch(`http://localhost:5000/users/${id}`,{
            method: 'Delete'
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.error('User Deleted')
                refetch();
        }
        // console.log(data);
        })
        
        

    }


  return (

      <tr className="hover">
        <th><img className="w-12 h-12 rounded-full" src={photoURL} alt="" /></th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
        <td>{verified ? 'verified' : <button>Verify</button>}</td>
        <td>{role == 'admin' ? 'Admin' : <button onClick={()=>handleMakeAdmin(_id)} className="btn btn-primary">Make Admin</button>}</td>
        <td><button onClick={()=> handleDelete(_id)} className="btn btn-error ">Delete</button></td>
      </tr>
  
  );
};

export default UserRow;
