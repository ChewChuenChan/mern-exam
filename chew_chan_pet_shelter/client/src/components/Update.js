import { useState, useEffect } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((res)=>{
            console.log(res.data);
            setPetName(res.data.petName);
            setPetType(res.data.petType);
            setPetDescription(res.data.petDescription);
            setPetSkill1(res.data.petSkill1);
            setPetSkill2(res.data.petSkill2);
            setPetSkill3(res.data.petSkill3);
        })
        .catch((err)=>{
            console.log(err.res);
            setNotFound("Pet is not found with the given ID ");
        });
    },[]);

    const [petName,setPetName]=useState("");
    const [petType,setPetType]=useState("");
    const [petDescription,setPetDescription]=useState("");
    const [petSkill1,setPetSkill1]=useState("");
    const [petSkill2,setPetSkill2]=useState("");
    const [petSkill3,setPetSkill3]=useState("");
    const [notFound, setNotFound]= useState("");
    const [errors, setErrors] = useState({});

    const editHandler=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`,{
          petName,
          petType,
          petDescription,
          petSkill1,
          petSkill2,
          petSkill3

        })
        .then((res)=>{
            navigate('/');
        })
        .catch((err)=>{
            console.log(err.response.data.error.errors);
            setErrors(err.response.data.error.errors);
        });
    };

    return (
        <div className='container col col-10 mx-auto'>
            <h2>Edit {petName} </h2>
            <form  className='container col col-10 mx-auto border' onSubmit={editHandler}>
                {notFound ?
                <p className='text-danger'>
                    {notFound}
                <Link to="/new"> Click here to add author</Link>
                </p>:null
                }
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
                    <button className="btn btn-success">Edit Pet</button>
                </div>
                    
                </form>
        </div>
    )
}

export default Update