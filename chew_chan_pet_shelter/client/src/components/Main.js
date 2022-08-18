import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './Deletebutton';


const Main = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pets')
        .then((res)=>{
            console.log(res.data);
            setList(res.data);
        })
        .catch((err)=>{console.log(err)});
    },[]);

    const deleteFromDom = (petId) =>{
        setList(list.filter(pet =>list._id != petId))
    };    

    return (
        <div className='container col col-8 mx-auto'>
            <div className='text-end mb-3'>
                <Link to={`/new`}>Add a pet to the shelter</Link>
            </div>
            <h2 className='mb-3'>These pets are looking for a good home:</h2>
            <table  className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope='col'>Name</th>
                        <th scope='col'>Type</th>
                        <th scope ='col'>Actions</th>
                    </tr>
                </thead>
                    <tbody>
                    {
                        list.map((pet,index)=>{
                            return(
                                <tr key={index}>
                                    <th>{pet.petName}</th>
                                    <th>{pet.petType}</th>
                                    <th className='d-flex justify-content-around '>
                                        <Link to={`/onepet/${pet._id}`}>details</Link>
                                        <span>  | </span>
                                        <Link to={`/edit/${pet._id}`}>edit</Link>
                                    </th>
                                </tr>
                            );
                        })
                    }    
                    </tbody>
                            
            </table>
        </div>
    )
}

export default Main