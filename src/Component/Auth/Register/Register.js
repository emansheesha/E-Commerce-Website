import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";
import useRegisterHook from "../../../Hooks/Authentication/useRegisterHook";
import { ToastContainer } from "react-toastify";
function Register() {
  const [name, email, password, confirmPassword, number, loading, onChangeName,
    onChangeEmail, onChangePassword, onChangeConfirmPassword, onChangeNumber, onSubmit] = useRegisterHook()
  return (
    <Container>
      
        <Row className="d-flex justify-content-center my-5">
          <Col lg="4" md="6" xs="10">
            <h3> تسجيل الدخول لأول مره </h3>
            <Form onSubmit={(e) => onSubmit(e)}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="أسم المستخدم" value={name} onChange={(e) => onChangeName(e)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="الايميل" value={email} onChange={(e) => onChangeEmail(e)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder=" كلمة السر" value={password} onChange={(e) => onChangePassword(e)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder=" تأكيد كلمة السر" value={confirmPassword} onChange={(e) => onChangeConfirmPassword(e)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="الرقم " value={number} onChange={(e) => onChangeNumber(e)} />
              </Form.Group>
              <Button variant="primary" type="submit" className={classes.btn}>
                تسجيل
              </Button>
            </Form>
            <div className="my-3">
              <span className={classes.not_account}>لديك حساب بالفعل</span>{" "}
              <Link to="/login" className={classes.account_link}>
                <span className={classes.account_link}>أضغط هنا</span>
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="my-1">
          <Col lg="4" md="6" xs="10" className={classes.login}>
            <Link to="/admin" className={classes.login}>
              الدخول بحساب الأدمن
            </Link>
          </Col>
        </Row>
        <Row className="my-1">
          <Col lg="4" md="6" xs="10" className={classes.login}>
            <Link to="/user" className={classes.login}>
              الدخول بحساب المستخدم
            </Link>
          </Col>
        </Row>
      <ToastContainer/>
    </Container>
  );
}

export default Register;
