import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function ModuleUse(data: any) {
  const [show, setShow] = useState(false);
  const [ten, setTen] = useState(data.data.Ten);
  const [sdt, setSdt] = useState(data.data.SDT);
  const [nghenghiep, setNgheNghiep] = useState(data.data.NgheNghiep);
  const [email, setEmail] = useState(data.data.Email);
  const [thongtin, setThongtin] = useState(data.data.ThongTinChung);

  const handleTenChange = (e: any) => setTen(e.target.value);
  const handleSdtChange = (e: any) => setSdt(e.target.value);
  const handleNgheNghiepChange = (e: any) => setNgheNghiep(e.target.value);
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handleThongtinChange = (e: any) => setThongtin(e.target.value);

  const handleClose = () => {
    setTen(data.data.Ten);
    setSdt(data.data.SDT);
    setNgheNghiep(data.data.NgheNghiep);
    setEmail(data.data.Email);
    setThongtin(data.data.ThongTinChung);

    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleSave = () => {








    
  };

  console.log(data);
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
              <Form.Control
                type="text"
                value={ten}
                onChange={handleTenChange}
              />
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Gmail</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group controlId="formRecipient">
              <Form.Label>Số Điện Thoại </Form.Label>
              <Form.Control
                type="text"
                value={sdt}
                onChange={handleSdtChange}
              />
            </Form.Group>

            <Form.Group controlId="formCC">
              <Form.Label>Nghề Nghiệp </Form.Label>
              <Form.Control
                type="text"
                value={nghenghiep}
                onChange={handleNgheNghiepChange}
              />
            </Form.Group>

            <Form.Group controlId="formBCC">
              <Form.Label>Thông Tin Chi Tiết </Form.Label>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                onChange={handleThongtinChange}
                value={thongtin}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModuleUse;
