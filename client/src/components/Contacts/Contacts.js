import React,{useEffect, useState} from 'react'
// import Mobile from './Mobile'
import {Form} from "react-bootstrap"
import {singnUp} from '../../redux/actions/actions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'


function Contacts() {
 const dispatch = useDispatch();

  
 const [nom,setNom] = useState('')
 const [prenom,setPrenom] = useState('')
 const [telephone,setTelephone] = useState('')
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const [adress,setAdress] = useState('')
 const [postal,setPostal] = useState('')
 const [ville,setVille] = useState('')
 const Submit = () => {

  dispatch(singnUp({nom,prenom,telephone,email,password,adress,postal,ville}))
}


  return (
    <div> 

         {/* <Mobile/> */}
        
         <section className="get-in-touch">
<h1 className="title">SignUp</h1>
<form className="contact-form row">
<div className="form-field col-lg-6">
  <input
    id="name"
    className="input-text js-input"
    type="text"
    required=""
    onChange={(e) => setNom(e.target.value)}
  />
  <label className="label" htmlFor="name">
    Nom
  </label>
</div>
<div className="form-field col-lg-6 ">
  <input
    id="prenom"
    className="input-text js-input"
    type="text"
    required=""
    onChange={(e) => setPrenom(e.target.value)}
  />
  <label className="label" htmlFor="email">
    prenom
  </label>
</div>
<div className="form-field col-lg-6 ">
  <input
    id="email"
    className="input-text js-input"
    type="email"
    required=""
    onChange={(e) => setEmail (e.target.value)}
  />
  <label className="label" htmlFor="email">
    E-mail
  </label>
</div>
<div className="form-field col-lg-6 ">
  <input
    id="phone"
    className="input-text js-input"
    type="text"
    required=""
    onChange={(e) => setTelephone(e.target.value)}
  />
  <label className="label" htmlFor="phone">
    num telephone
  </label>
</div>
<div className="form-field col-lg-12">
  <input
    id="password"
    className="input-text js-input"
    type="password"
    required=""
    onChange={(e) => setPassword(e.target.value)}
  />
  <label className="label" htmlFor="address">
   password
  </label>
</div>
<div className="form-field col-lg-12">
  <input
    id="address"
    className="input-text js-input"
    type="text"
    required=""
    onChange={(e) => setAdress(e.target.value)}
  />
  <label className="label" htmlFor="address">
    Address
  </label>
</div>
<div className="form-field col-lg-12">
  <input
    id="postal"
    className="input-text js-input"
    type="text"
    required=""
    onChange={(e) => setPostal(e.target.value)}
  />
  <label className="label" htmlFor="address">
    code postal
  </label>
</div>
<div className="form-field col-lg-12">
  <input
    id="message"
    className="input-text js-input"
    type="text"
    required=""
    onChange={(e) => setVille(e.target.value)}
  />
  <label className="label" htmlFor="address">
    ville
  </label>
</div>

<div className="form-field col-lg-12">
<Link to={'/'} >  <input  onClick ={Submit} className="submit-btn"  defaultValue="Submit" /></Link>
</div>
</form>
</section>




    </div>
  )
}

export default Contacts