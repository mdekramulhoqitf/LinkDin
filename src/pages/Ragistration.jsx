import React, { useState } from 'react'
import {Grid,TextField} from '@mui/material';
import Headertext from '../components/Headertext';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import { getDatabase, ref, set } from "firebase/database";


let initialValues ={
  email: "",
  fullName: "",
  password: "",
  loading: false,
  error: ""
}

const Ragistration = () => {

  const db = getDatabase();

  const auth = getAuth();

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

    if(!email){
      setValues({
        ...values,
        error: "Please Enter a email"
      })
      return
    }

    if(!fullName){
      setValues({
        ...values,
        error: "Please Type Your Name"
      })
      return
    }

    if(!password){
      setValues({
        ...values,
        error: "Please Enter Password"
      })
      return
    }

    setValues({
      ...values,
      loading: true,
    })

    createUserWithEmailAndPassword(auth,email,password).then((user)=>{

    
      set(ref(db, 'users/' + user.user.uid), {
        username: values.fullName ,
        email: values.email,
        profile_picture : 'https://ibb.co/fdH5R0d"><img src="https://i.ibb.co/xq60v5q/207642-193.jpg'
      });

      setValues({
        email: "",
        fullName: "",
        password: "",
        loading: false,
      })
      navigate("/login")
    })
  }


  return (
    <Grid className='registration'>
      
    <Grid item xs={12}>
        <div className='reg_text'>
            <BiLogoLinkedinSquare className='reg_icon'/>
            <Headertext className="Headingtext" title="Get started with easily register"/>
            <p className='reg_title'>Free register and you can enjoy it</p>
        </div>
        <div className='textField'>
        <div className='Field'>
        <TextField value={values.email} onChange={handleValues} name='email' id="outlined-basic" label="Email Addres" variant="outlined" />
        {values.error.includes("email") && <Alert className='reg_error' severity="error">{values.error}</Alert>}
        
        </div>
        <div className='Field'>
        <TextField value={values.fullName} onChange={handleValues} name='fullName' id="outlined-basic" label="Full name" variant="outlined" />
        {values.error.includes("Name") && <Alert className='reg_error' severity="error">{values.error}</Alert>}
        </div>
        <div className='Field'>
        <TextField value={values.password} onChange={handleValues} name='password' id="outlined-basic" label="PassWord" variant="outlined" type='password' />
        {values.error.includes("Password") && <Alert className='reg_error' severity="error">{values.error}</Alert>}
   
        </div>
        <div className='reg_sin'>
          {values.loading
          ?
          <LoadingButton loading variant="outlined"></LoadingButton>
          :
          <Button onClick={handleSubmit} variant="contained">Sign Up</Button>
          }
        </div>
        <Alert className='have_account_tag' severity="warning">Already Have An Account <strong className='have_account_span'>Log In</strong></Alert>
        {/* <p className='have_account_tag'>Already  have an account ? <button className='have_account_span'>Log In</button></p> */}
        </div>
    </Grid>
  </Grid>
  )
}

export default Ragistration