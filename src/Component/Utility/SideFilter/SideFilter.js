import React from "react";
import { Form } from "react-bootstrap";

const SideFilter = () => {
  return (
    <div className="side-filter">
      <h4>الفئة</h4>
      <Form.Check label="الكل" type="checkbox" reverse />
      <Form.Check label="الكل" type="checkbox" reverse />
      <Form.Check label="الكل" type="checkbox" reverse />
      <Form.Check label="الكل" type="checkbox" reverse />
      <Form.Check label="الكل" type="checkbox" reverse />
      <Form.Check label="الكل" type="checkbox" reverse />
      <Form.Check label="الكل" type="checkbox" reverse />
      <h4>الماركة</h4>
      <Form.Check label="الكل" type="checkbox" reverse />
      <Form.Check label="الكل" type="checkbox" reverse />
      <Form.Check label="الكل" type="checkbox" reverse />{" "}
      <Form.Check label="الكل" type="checkbox" reverse />
      <h4>السعر</h4>
      <div className="d-flex">
        <label htmlFor="from">من</label>
        <input className="price-inp my-1" type="number" id="from" ></input>
      </div>
      <div className="d-flex">
      <label htmlFor="to">الى</label>
      <input className="price-inp my-1" type="number" id="to"></input>
      </div>
    </div>
  );
};

export default SideFilter;
