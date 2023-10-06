import React, { useState } from 'react'
import {Grid,TextField,Alert, Container} from '@mui/material';
import { FcPicture } from 'react-icons/fc';
import { BsFillSendFill,BsThreeDotsVertical } from 'react-icons/bs';
import profilepicture from "../assets/profile.png"
import postimg from "../assets/postimg.png"
import { getDatabase, push, ref, set } from "firebase/database";


const Home = () => {
 
    const db = getDatabase();

    let [values,setValues] = useState('');

    let handlesubmit = ()=>{
        set(push(ref(db, 'post/')), {
          whocreatpostname
        });
    }

  return (
    <Grid className='profile'>
    <Grid item xs={12}>
        <Container>
        <div className='newpost'>
            <text className='post_text'>new post</text>
            <div className='text_field'>
            <TextField onChange={(e)=> setValues(e.target.value)} id="standard-basic" label="What’s on your mind?" variant="standard" />
            <div className='post_icon'>
            <FcPicture className='picture_icon'/>
            <button onClick={handlesubmit}>
            <BsFillSendFill className='send_icon'/>
            </button>
            </div>
            </div>
        </div>


        <div className='newpost'>
            <div className='threedot_icon'><BsThreeDotsVertical/></div>
            <div className='parson'>
                    <img className='parson_img' src={profilepicture}/>
                    <div>
                    <h2 className='parson_name'>Kyle Fisher</h2>
                    <p className='parson_title'>Product designer at Commandor Corp.</p>
                    </div>
            </div>
                    <div className='caption'>
                        <h4>How’s your day going, guys?</h4>
                    </div>
                        <div>
                        <img className='post_img' src={postimg}/>
                        </div>
        </div> 

        <div className='newpost'>
            <div className='threedot_icon'><BsThreeDotsVertical/></div>
            <div className='parson'>
                    <img className='parson_img' src={profilepicture}/>
                    <div>
                    <h2 className='parson_name'>Kyle Fisher</h2>
                    <p className='parson_title'>Product designer at Commandor Corp.</p>
                    </div>
            </div>
                    <div className='caption'>
                        <h4>How’s your day going, guys?</h4>
                    </div>
                        <div>
                        <p className='post_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, deserunt harum iste esse molestiae cumque quidem itaque officia possimus, distinctio excepturi incidunt est? Autem aspernatur hic modi iusto provident molestiae!</p>
                        </div>
        </div> 
        </Container>
    </Grid>
  </Grid>
  )
}

export default Home