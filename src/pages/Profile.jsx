import React from 'react'
import {Grid,TextField,Alert, Container} from '@mui/material';
import coverpicture from "../assets/coverpic.png"
import profilepicture from "../assets/profile.png"
import projectimgone from "../assets/projectimgone.png"
import projectimgtwo from "../assets/projectimgtwo.png"
import projectimgthree from "../assets/projectimgthree.png"
import ex_iconone from "../assets/Group1.png"
import ex_icon from "../assets/Group.png"
import ex_iconthree from "../assets/Rectangle 2.2.png"
import Button from '@mui/material/Button';
import { BiLogoLinkedinSquare } from 'react-icons/bi';
import { BsSendFill } from 'react-icons/bs';
import { Link, useLocation,} from "react-router-dom";


const Profile = () => {

    let location = useLocation();

  return (
    <Grid className='profile'>
    <Grid item xs={12}>
        <div>
        <Container className='container'>
          
            <div className='profilediv'>
                <img className='cover_img' src={coverpicture}/>
                <div className='profile_main'>
                    <img className='profile_img' src={profilepicture}/>
                </div>
                    <div className='profileInfo'>
                        <div className='pro_hed'>
                        <h1 className='profile_name'>Dmitry Kargaev</h1>
                        <BiLogoLinkedinSquare className='profile_icon_linkdin'/>
                        <p className='pro_ptag'><BsSendFill className='profile_sent_icon'/>Saint Petersburg, Russian Federation</p>
                        </div>
                        <p className='Pinfo'>Freelance UX/UI designer, 80+ projects in web design, mobile apps  (iOS & android) and creative projects. Open to offers.</p>
                        <Button variant="contained">CONTACT INFO</Button>
                    </div>
            </div>
        <div>
            <Link to={"/profile"}>
        <Button id='threebtn' 
         className={
             location.pathname ==
             "/profile"
             ? "profile_button_active"
             : "profile_button"
            } variant="contained">Profile</Button>
            </Link>
            <Link to={"/social/profile"}>
        <Button id='threebtn' 
         className={
             location.pathname ==
             "/social/profile"
             ? "profile_button_active"
             : "profile_button"
            } variant="contained">Friends</Button>
            </Link>
            <Link to={"/home"}>
        <Button id='threebtn' 
         className={
             location.pathname ==
             "/home"
             ? "profile_button_active"
             : "profile_button"
            } variant="contained">Post</Button>
            </Link>
        </div>
        <div className='about_section'>
            <h3 className='about_title'>About</h3>
            <p>I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites. </p>
            <span>SEE MORE</span>
        </div>
        <div className='project_section'>
            <h3 className='project_title'>Project <span className='project_span'>3 of 12</span></h3>
            <div className='project_img'>
                <img className='projectimg' src={projectimgone}/>
                <img className='projectimg' src={projectimgtwo}/>
                <img className='projectimg' src={projectimgthree}/>
            </div>
        </div>
        <div className='ex_section'>
            <h3 className='ex_title'>Experience</h3>
            <div className="ex_div">
             <img className='ex_icon' src={ex_iconone}/>
             <div>
                <h1>Freelance UX/UI designer</h1>
                <div className='ex-p-one'>
                <p>Self Employed</p>
                <span>Around the world</span>
                </div>
                <div className='ex-p-two'>
                <p>Jun 2016 — Present</p>
                <span>3 yrs 3 mos</span>
                </div>
                <p>Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.</p>
             </div>
            </div>
            <div className="ex_div">
             <img className='ex_icon' src={ex_iconthree}/>
             <div>
                <h1>UX/UI designer</h1>
                <div className='ex-p-one'>
                <p>Upwork</p>
                <span>International</span>
                </div>
                <div className='ex-p-two'>
                <p>Jun 2019 — Present</p>
                <span>3 mos</span>
                </div>
                <p>New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.</p>
             </div>
            </div>
        </div>
        <div className='ex_section'>
            <h3 className='ex_title'>Education</h3>
            <div className="ex_div">
             <img className='ex_icon' src={ex_icon}/>
             <div>
                <h1>Moscow State Linguistic University</h1>
                <p>Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance</p>
                <p>2013 — 2017</p>
                <p>Additional English classes and UX profile courses​.</p>
             </div>
            </div>
        </div>
        </Container>
        </div>
    </Grid>
  </Grid>
  )
}

export default Profile