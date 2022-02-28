import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './design.css';
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as yup from "yup";
function App() {
  //const [state, setState] = useState({
    const initialValues={
    name: "",
    password: "",
    confirmpassword: ""
    }
 // })
  //const handleChange = (e) => {
   //const { name, value } = e.target
    //setState({ ...state, [name]: value })
 // }

  //console.log(state.name)
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("required")
      .min(2, "too short name")
      .max(10,)
      .matches(/^[aA-zZ\s]+$/, 'Please enter valid name'),
    password: yup
      .string()
      .min(6, "too short")
      .max(16, "too long")
      .required()
      .label("Password"),
    confirmpassword: yup
      .string()
      .min(6, "too short")
      .max(16, "too long")
      .required("required")
      .oneOf([yup.ref("password"), null], "password does not match")
  })
  return (
    <div className="container pt-4">
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {({ handleSubmit, handleChange }) => (
          <form onSubmit={(e) => {
            e.preventDefault()
           
          }}>
            <div className="d-flex  ">
              <div className="w-25">
                <label>Name</label>

              </div>
              <div className="w-25">
                <Field type="text" name="name" placeholder="First Name" onChange={handleChange} className="form-control" />
                <ErrorMessage component="div" name="name" className="text-danger error" />
              </div>
            </div>
            <div className="d-flex pt-2">
              <div className="w-25">
                <label>password</label>
              </div>
              <div className="w-25">
                <Field type="text" name="password" placeholder="Password" onChange={handleChange}  className="form-control" />
                <ErrorMessage component="div" name="password" className="text-danger error" />
              </div>
            </div>
            <div className="d-flex pt-2">
              <div className="w-25">
                <lable>Confirm Password</lable>
              </div>
              <div className="w-25">
                <Field type="text" name="confirmpassword" placeholder="confirmpassword"  onChange={handleChange} className="form-control" />
                <ErrorMessage component="div" name="confirmpassword" className="text-danger error" />
              </div>
            </div>
            <input type="submit" className="btn btn-primary" />
          </form>
        )}
      </Formik>


    </div>
  );
}

export default App;
