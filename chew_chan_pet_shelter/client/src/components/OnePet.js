import React,{useEffect,useState} from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';
import DeleteButton from './Deletebutton';

const OnePet = () => {
    const {id} = useParams();
    const [onePet,setOnePet] = useState({});

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((res)=>{
            console.log(res.data)
            setOnePet(res.data)
        })
        .catch((err)=>{console.log(err)});
    },[]);

  //   const deleteHandler = (petId) =>{
  //     axios.delete (`http://localhost:8000/api/pets/${petId}`)
  //     .then((res)=>{
  //         const newPetList = onePet.filter((onePet)=>{
  //         return onePet._id !== petId;
  //         });
  //         setOnePet(newPetList);
  //         navigate('/')
  //     })
  //     .catch((err)=>{console.log(err)});
  // }; 

    return (
        <div>
            <div className='d-flex justify-content-between m-3'>
                <h2>Detials about: {onePet.petName} </h2>
                <DeleteButton petId ={onePet._id} successCallback={()=>navigate('/')}/>
            </div>
            <div className='card text-start col col-6 mx-auto' >
                <h3><strong>Pet Type:</strong> {onePet.petType}</h3>
                <h3><strong>Description:</strong> {onePet.petDescription}</h3>
                <h3><strong>Skills:</strong> 
                    <ul className='mx-auto col-col-4'>
                        <li className='list-group-item'>{onePet.petSkill1}</li>
                        <li className='list-group-item'>{onePet.petSkill2}</li>
                        <li className='list-group-item'>{onePet.petSkill3}</li>

                    </ul>

                </h3>
            </div>
        </div>

    )
}

export default OnePet