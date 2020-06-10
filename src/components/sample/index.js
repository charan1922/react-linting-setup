import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import "../../main.scss";
// import {useDispatch, useSelector} from "react-redux";

export default function Sample() {
  //   const dispatch = useDispatch();

  return (
    <div className="container-fluid login-section">
      <div className="row">
        <div className="col">
          <div className="heading-sec">
            <h2>InstantAnalytics</h2>
            <p>
              Powered by <b>Lovelytics</b>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3"> </div>
        <div className="col-md-6">
          <div className="row login-form">
            <div className="col-md-6 form-card-1">
              <h3>Not a Customer?</h3>
              <p>
                Connect to and Visualize your data in minutes.
                <b>Sign Up today!</b>
              </p>
              <div className="signup-btn">
                <button type="button" className="btn btn-primary">
                  Sign Up!
                </button>
              </div>
            </div>
            <div className="col-md-6 form-card-2">
              <h3>Welcome</h3>
              <p>
                Sign in to your <b style={{color: "#4ebe96"}}>account</b>
              </p>

              <Formik
                initialValues={{email: "", password: ""}}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                // onSubmit={(values, { setSubmitting }) => {
                //   setTimeout(() => {
                //     alert(JSON.stringify(values, null, 2));
                //     setSubmitting(false);
                //   }, 400);
                // }
                onSubmit={(values) => {
                  const {email, password} = values;
                  const data = {
                    email,
                    password,
                  };
                  //   dispatch(showAuthLoader());
                  //   dispatch(userSignIn(data));
                }}
              >
                {({isSubmitting}) => (
                  <Form className="form-data">
                    <div className="form-group form-input">
                      {/* <i className="fa fa-user"></i> */}
                      <Field
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="E-mail"
                      />
                      <ErrorMessage name="email" component="div" />
                    </div>
                    <div className="form-group form-input">
                      {/* <i className="fa fa-lock"></i> */}

                      <Field
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                      />
                      <ErrorMessage name="password" component="div" />
                    </div>
                    <div className="form-group form-check">
                      <div className="form-check-field">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        {/* <label>Remember me</label> */}
                      </div>
                      <span className="fp-link">
                        <a href="#">Forgot password?</a>
                      </span>
                    </div>
                    <div className="login-btn">
                      <button type="button" disabled={isSubmitting} className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="col-md-3"> </div>
      </div>
    </div>
  );
}
