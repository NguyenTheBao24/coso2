import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Module() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sửa
      </Button>

      <Modal show={show} onHide={handleClose} animation={false} size="lg">
       
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Tên</Form.Label>
              <Form.Control type="text" placeholder="Nhập tên" />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control type="text" placeholder="Nhập địa chỉ" />
            </Form.Group>

            <Form.Group controlId="formRecipient">
              <Form.Label>Đối tượng</Form.Label>
              <Form.Control type="text" placeholder="Nhập đối tượng" />
            </Form.Group>

            <Form.Group controlId="formCC">
              <Form.Label>CC</Form.Label>
              <Form.Control type="email" placeholder="Nhập CC" />
            </Form.Group>

            <Form.Group controlId="formBCC">
              <Form.Label>BCC</Form.Label>
              <Form.Control type="email" placeholder="Nhập BCC" />
            </Form.Group>

            <Form.Group controlId="formSubject">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control type="text" placeholder="Nhập tiêu đề" />
            </Form.Group>

            <Form.Group controlId="formContent">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Nhập nội dung" />
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

export default Module;
