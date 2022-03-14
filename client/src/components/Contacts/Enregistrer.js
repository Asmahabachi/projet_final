
import React,{useState} from 'react'
import {Form} from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {singnIN} from '../../redux/actions/actions'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'







function Enregistrer() {


    const dispatch = useDispatch();

    let history = useHistory();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const Submit = () => { 
        dispatch(singnIN({email,password},history))
      }



return(
    <div className='sinin'>

      <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3" color='#fff' >
        <h2 class="text-center text-dark mt-5" >Login Form</h2>
        <div class="text-center mb-5 text-dark"></div>
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
            <img src="https://www.nicepng.com/png/detail/401-4011596_people-ok-circle-snapchat-circle-logo-black-and.png" width="100" height="100"  
            class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"  alt="profile"/>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Username" aria-describedby="emailHelp" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div class="text-center" color='#fff'>
              <Link style={{textDecoration: 'none'}} to={'/'} > 
              <Form.Control onClick={()=> Submit()} type="text" className="btn btn-primary" defaultValue="Submit" /></Link></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not Registered? <Link to='/SignUP' class="text-dark fw-bold"> Create an Account</Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
    </div>
  )
}

export default Enregistrer