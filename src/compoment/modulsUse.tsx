import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function ModuleUse() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sửa
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Quản lý khách hàng tiềm năng </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Tên Khách Hàng </Form.Label>
              <Form.Control type="text"  />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Gmail</Form.Label>
              <Form.Control type="email"  />
            </Form.Group>

            <Form.Group controlId="formRecipient">
              <Form.Label>Số Điện Thoại </Form.Label>
              <Form.Control type="text"  />
            </Form.Group>

            <Form.Group controlId="formCC">
              <Form.Label>Nghề Nghiệp </Form.Label>
              <Form.Control type="text"  />
            </Form.Group>

            <Form.Group controlId="formBCC">
              <Form.Label>Thông Tin Chi Tiết </Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModuleUse;
