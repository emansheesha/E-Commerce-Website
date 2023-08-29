import { Col, Container, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "../Login/Login.module.css";
import { Link } from "react-router-dom";
import useNewPasswordHook from "../../../Hooks/Authentication/useNewPasswordHook";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
function NewPassword() {
    const [password, confirmPassword, loading, Press, onChangePassword, onChangeConfirmPassword, onSubmit] = useNewPasswordHook()
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
                            <h3>ادخل كلمة سر جديده </h3>
                            <Form onSubmit={(e) => { onSubmit(e) }}>
                                <Form.Group className="mb-3">
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => { onChangePassword(e) }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => { onChangeConfirmPassword(e) }} />
                                </Form.Group>
                                <Button variant="primary" type="submit" className={classes.btn}>
                                    تأكيد
                                </Button>
                            </Form>

                            {/* <div className="my-3">
                <Link to="/forgetpassword" className={classes.account_link}>
                  <span className={classes.account_link}>هل نسيت كلمة السر</span>
                </Link>
              </div> */}
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

export default NewPassword;
