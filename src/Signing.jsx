import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Signing = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body></Modal.Body>
        </Modal>

        <div>
          <h5 className="account">Don't have an Account ?</h5>
          <button className="button">Sign up</button>
          <br />
          <h5 className="account">Already have an Account ?</h5>
          <button className="button" onClick={handleShow}>
            Sign in
          </button>
        </div>
      </>
    </div>
  );
};

export default Signing;
