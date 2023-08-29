import { Col, Container, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import useLoginHook from "../../../Hooks/Authentication/useLoginHook";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
function Login() {
  const [password, email, loading, Press, onChangePassword, onChangeEmail, onSubmit] = useLoginHook()
  useEffect(() => { console.log(loading, Press) }, [])
  return (
    <Container>
      <ToastContainer />
      {loading && Press ? (
        <Row className="mt-5 pt-5">
          <Spinner
            animation="border"
            role="status"
            className="mt-5  mx-auto"
          >
          </Spinner>
        </Row>) : (
        <>
          <Row className="d-flex justify-content-center my-5">
            <Col lg="4" md="6" xs="10">
              <h3> تسجيل الدخول</h3>
              <Form onSubmit={(e) => { onSubmit(e) }}>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Enter email" value={email}
                    onChange={(e) => { onChangeEmail(e) }} />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { onChangePassword(e) }} />
                </Form.Group>
                <Button variant="primary" type="submit" className={classes.btn}>
                  تسجيل الدخول
                </Button>
              </Form>
              <div className="my-3">
                <span className={classes.not_account}>ليس حسابك</span>{" "}
                <Link to="/register" className={classes.account_link}>
                  <span className={classes.account_link}>أضغط هنا</span>
                </Link>
              </div>
              <div className="my-3">
                <Link to="/forgetpassword" className={classes.account_link}>
                  <span className={classes.account_link}>هل نسيت كلمة السر</span>
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
        </>
      )}

    </Container>
  );
}

export default Login;
