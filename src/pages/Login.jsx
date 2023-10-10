import React, { useState } from 'react'
import {Grid,TextField,Alert} from '@mui/material';
import Headertext from '../components/Headertext';
import Button from '@mui/material/Button';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import LoadingButton from '@mui/lab/LoadingButton';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { json, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { userData } from '../features/counter/counterSlice';
import { userdata } from '../features/counter/counterSlice';




let initialValues ={
    email: "",
    password: "",
    loading: false,
  }

const Login = () => {

  const auth = getAuth();

  let dispatch = useDispatch()

  let navigate = useNavigate()

    let [values,setValues] = useState(initialValues)

    
  let handleValues = (e)=>{
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  let handleSubmit = ()=>{

    let {email,fullName,password}= values

    setValues({
      ...values,
      loading: true,
    })

    signInWithEmailAndPassword(auth,email,password).then((user)=>{

      dispatch(userdata(user.user))

      localStorage.setItem("user",JSON.stringify(user.user));

      setValues({
        email: "",
        fullName: "",
        password: "",
        loading: false,
      })
      navigate("/profile")
    })
  }


    return (
        <Grid className='registration'>
        <Grid item xs={12}>
            <div className='reg_text'>
                <BiLogoLinkedinSquare className='reg_icon'/>
                <Headertext className="Headingtext" title="Login"/>
                <p className='reg_title'>Free register and you can enjoy it</p>
            </div>
            <div className='textField'>
            <div className='Field'>
            <TextField value={values.email} onChange={handleValues} name='email' id="outlined-basic" label="Email Addres" variant="outlined" />
            </div>
            <div className='Field'>
            <TextField value={values.password} onChange={handleValues} name='password' id="outlined-basic" label="PassWord" variant="outlined" type='password' />
            </div>
            <div className='reg_sin'>  
            {values.loading
            ?
            <LoadingButton loading variant="outlined"></LoadingButton>
            :
            <Button onClick={handleSubmit} variant="contained">Log in</Button>
            }
            </div>
            <Alert className='have_account_tag' severity="warning">Dont Have An Account <strong className='have_account_span'>Sign Up</strong></Alert>
            </div>
        </Grid>
      </Grid>
      )
}

export default Login