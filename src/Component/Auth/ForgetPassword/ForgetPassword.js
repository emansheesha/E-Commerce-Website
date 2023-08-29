import { Col, Container, Row, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "../Login/Login.module.css";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import useForgetHook from "../../../Hooks/Authentication/useForgetHook";

const ForgetPassword = () => {
    const [email, loading, press, onChangeEmail, onSubmit] = useForgetHook()
    return (
        <Container style={{minHeight:'750px'}}>
            <ToastContainer />
            {loading && press ? (
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
                            <h3>  ارسال الكود </h3>
                            <Form onSubmit={(e) => { onSubmit(e) }}>
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" placeholder="Enter email" value={email}
                                        onChange={(e) => { onChangeEmail(e) }} />
                                </Form.Group>
                                <Button variant="primary" type="submit" className={classes.btn}>
                                    ارسال
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </>
            )}

        </Container>
    )
}

export default ForgetPassword
