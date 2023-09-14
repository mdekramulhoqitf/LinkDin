import React from 'react'
import {Grid,TextField} from '@mui/material';
import Headertext from '../components/Headertext';
import Button from '@mui/material/Button';
import { BiLogoLinkedinSquare } from 'react-icons/bi';

const Ragistration = () => {
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
        <TextField id="outlined-basic" label="Email Addres" variant="outlined" />
        </div>
        <div className='Field'>
        <TextField id="outlined-basic" label="Full name" variant="outlined" />
        </div>
        <div className='Field'>
        <TextField id="outlined-basic" label="PassWord" variant="outlined" />
        </div>
        <div className='reg_sin'>
        <Button variant="contained">Sign Up</Button>
        </div>
        </div>
    </Grid>
  </Grid>
  )
}

export default Ragistration