import React, {useState, useEffect} from 'react'
import {Card,Form, Modal, CardGroup, Button} from 'react-bootstrap'
import {addDevis, Affiche_Cour} from '../redux/actions/actions'
import {useDispatch, useSelector} from 'react-redux'




function Cours_de_Coaching() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)
  const dispatch = useDispatch();
  const [nom,setNom] = useState('')
  const [prenom,setPrenom] = useState('')
  const [telephone,setTelephone] = useState('')
  const [email,setEmail] = useState('')
  const [adress,setAdress] = useState('')
  const [superficie,setSuperficie] = useState('')
  const [motif,setMotif] = useState('')
  const Envoyervotredemande = () => {
   dispatch(addDevis({nom,prenom,telephone,email,adress,superficie,motif}))
   alert("demande envoyee avec succes")}

// pour l'affichage des cours : on utilise use effect pour que de redux dispatche l'action quand la page est ouverte
//use selector pour extraire le state du redux 
useEffect(()=>{
  dispatch(Affiche_Cour())
},[])
//what are excatly trainings that are being map??
const coaching = useSelector((state) => state.UserReducer.afficheCours)

  return (
    <div>
    <div style={{fontFamily:' Satisfy', fontSize:'50px', }}>Les cours disponibles sont les suivants: </div>
    {coaching?.map((el, key) =>( <div> <Card>
      <Card.Body>
        <Card.Title>
          <h5>{el.title}</h5>
          <h3>{el.date}</h3>
        </Card.Title>
        <Card.Text>
         <li>{el.description}</li>
         <img src = {el.image}/>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
      <Button onClick={handleShow} variant="primary"> RESERVER</Button>
      </Card.Footer>
    </Card></div>))}
    
   
   
 
  <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Please fill this form and the team team will contact you</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <Form className="MODALDEVIS">
         <Form.Group className="mb-3" controlId="formtext">
           <Form.Label>Nom</Form.Label>
           <Form.Control type="text" placeholder="Entrer Nom" onChange={(e)=> setNom(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formtext">
           <Form.Label>Prénom</Form.Label>
           <Form.Control type="text" placeholder="Entrer Prenom" onChange={(e)=> setPrenom(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formtext">
           <Form.Label>Téléphone</Form.Label>
           <Form.Control type="text" placeholder="Entrer Téléphone" onChange={(e)=> setTelephone(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formtext">
           <Form.Label>Email</Form.Label>
           <Form.Control type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formtext">
           <Form.Label>Adresse</Form.Label>
           <Form.Control type="text" placeholder="Enter Adress" onChange={(e)=> setAdress(e.target.value)}/>
         </Form.Group>
      
         <Form.Group className="mb-3" controlId="fformtext">
           <Form.Label>Superficie (en m²)</Form.Label>
           <Form.Control type="text" placeholder="postal" onChange={(e)=> setSuperficie(e.target.value)}/>
         </Form.Group>
         <Form.Select onChange={(e)=> setMotif(e.target.value)} aria-label="Default select example">
  <option>Motif</option>
  <option value={'devis' }> devis</option>
  <option value={'coaching' }>coaching</option>
  <option value={'forfait' }>forfait</option>
</Form.Select>
       
            <Form.Control onClick={()=> Envoyervotredemande()} type="text" className="btn btn-primary" defaultValue="Envoyer votre demande" />
          
         
       </Form>
    </Modal.Body>
        </Modal>
  
  
  </div>
  )
}

export default Cours_de_Coaching