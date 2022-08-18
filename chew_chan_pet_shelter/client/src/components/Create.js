import { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Create = () => {
    const [petName,setPetName]=useState("");
    const [petType,setPetType]=useState("");
    const [petDescription,setPetDescription]=useState("");
    const [petSkill1,setPetSkill1]=useState("");
    const [petSkill2,setPetSkill2]=useState("");
    const [petSkill3,setPetSkill3]=useState("");
    const [errors, setErrors]= useState({})

    const navigate =useNavigate();

    const submitHandler =(e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/create',{
            petName,
            petType,
            petDescription,
            petSkill1,
            petSkill2,
            petSkill3

        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            navigate('/');
        })
        .catch((err)=>{
            console.log(err)
            setErrors(err.response.data.error.errors)
        });
    }


    return (
        <div>
            <h2>Know a pet needing a home?</h2>
            <form  className='container col col-4 mx-auto border' onSubmit={submitHandler}>
            <div className='mb-3'>
                <label className='form-label'>Pet Name:</label>
                <input
                className='form-control'
                type="text"
                value={petName}
                onChange={(e)=>setPetName(e.target.value)}/>
                {errors.petName?
                <p className='text-danger'>{errors.petName.message}</p>:null
                }
            </div>
            <div className='mb-3'>
                <label className='form-label'>Pet Type:</label>
                <input
                className='form-control'
                type="text"
                value={petType}
                onChange={(e)=>setPetType(e.target.value)}/>
                {errors.petType?
                <p className='text-danger'>{errors.petType.message}</p>:null
                }
            </div>
            <div className='mb-3'>
                <label className='form-label'>Pet Description:</label>
                <input
                className='form-control'
                type="text"
                value={petDescription}
                onChange={(e)=>setPetDescription(e.target.value)}/>
                {errors.petDescription?
                <p className='text-danger'>{errors.petDescription.message}</p>:null
                }
            </div>
            <div className='mb-3'>
                <div>
                    Skills (optional):
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>Skill 1:</label>
                    <input
                    className='form-control'
                    type="text"
                    value={petSkill1}
                    onChange={(e)=>setPetSkill1(e.target.value)}/>
                    {errors.petSkill1?
                    <p className='text-danger'>{errors.petSkill1.message}</p>:null
                    }
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>Skill 2:</label>
                    <input
                    className='form-control'
                    type="text"
                    value={petSkill2}
                    onChange={(e)=>setPetSkill2(e.target.value)}/>
                    {errors.petSkill2?
                    <p className='text-danger'>{errors.petSkill2.message}</p>:null
                    }
                    </div>
                    <div className='mb-3'>
                    <label className='form-label'>Skill 3:</label>
                    <input
                    className='form-control'
                    type="text"
                    value={petSkill3}
                    onChange={(e)=>setPetSkill3(e.target.value)}/>
                    {errors.petSkill3?
                    <p className='text-danger'>{errors.petSkill3.message}</p>:null
                    }
                </div>
            </div>
            <div className='mb-3 d-flex justify-content-around'>
                <Link to={"/"}><button className='btn btn-info'>Cancel</button></Link>
                <button className="btn btn-success">Create</button>
            </div>
                
            </form>
        </div>
    )
}

export default Create