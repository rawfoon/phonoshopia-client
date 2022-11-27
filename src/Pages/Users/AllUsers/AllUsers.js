import { useQuery } from '@tanstack/react-query';
import React,{useContext} from 'react';
import Loading from '../../Shared/Loading/Loading';
import UserRow from './UserRow';
import toast from 'react-hot-toast'


const AllUsers = () => {

    


    const {data: users , isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data;
        }
    });
    console.log(users);
    if(isLoading){
        return <Loading></Loading>
    }
    refetch()


    


    const handleMakeAdmin = id =>{



        fetch(`http://localhost:5000/users/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
        }
        })
       }

    

    


    return (
        <div>
            

            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Verified</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {
        users.map(user => <UserRow key={user._id}
        user={user}
        handleMakeAdmin={handleMakeAdmin}
        refetch={refetch}
        ></UserRow>)
      }
      
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default AllUsers;