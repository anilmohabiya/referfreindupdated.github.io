
import React,{ useState } from 'react';
import Footer from './Footer';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

    function Refer() {
  const [show, setShow] = useState(false);

  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className=" col-md-10 col-10 mx-auto">

       
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title  ">
          <div className=" title-center">
         <p className=" ">  Refer Freinds. Get rewards</p>
          </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body Modal-lg>
          <p class="five text-primary">

      <div className=" text-dark text-center mt-5 ">
     Give your friends 20% off on all products. get 20% off
     products when they shop from your link
      </div>
       
      <div class="card text-white  bg-secondary  mb-3 mt-5" >
      <div className=" text-end">
      <button 
  onClick={() =>  navigator.clipboard.writeText('www.w3schools.com')}
>
 <i class="fas fa-copy fa-2x "></i>
</button>
<p>copy</p>
      </div>
  <div class="card-body title-right">
  <h5 class="card-title mt-2 text-center px-5 pb-5 p-4 ">www.w3schools.com</h5>
  </div>
</div>           
          </p>

          <p className=" text-center font-weight-bold"> Share on Social-Media</p>
                  

                     <div className=" text-center">
     
                     <Link to="#" class="fab fa-instagram fa-3x"></Link>
                
                <Link to="#" class="fab fa-facebook fa-3x "></Link>
                 <Link to="#" class="fab fa-twitter"></Link>
                <Link to="#" class="fab fa-whatsapp fa-3x "></Link>


       </div>
        </Modal.Body>
      </Modal>

      </div>
      </div>
    </div>
    <Footer/>
    </>


  );

}



export default Refer;