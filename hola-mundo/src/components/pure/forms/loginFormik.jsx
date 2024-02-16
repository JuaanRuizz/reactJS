import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Invalid email fomat').required('Email is requiered'),
        password: Yup.string().required('Password is requiered')
    }
)



const LoginFormik = () => {

    const initialCredentials= { 
        email: '',
        password: ''
    }
    return (
        <div>
            <h1>Login Formik</h1>
            <Formik
                // Initial values that form will take
                initialValues={initialCredentials}
                // Yup Validation schema 
                validationSchema={loginSchema}
                // onSubmit Event
                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
                //We save the data in the local storage
                localStorage.setItem('credential', values)
                }}
            >

                {/* We obtain props from Formik */}

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@emial.com" />

                        {/* Email errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <div>
                                        <ErrorMessage name="email"></ErrorMessage>
                                    </div>
                                ) 
                            }

                            <label htmlFor="password">Password</label>
                            <Field id="password" type= "password" name="password" placeholder="password" />

                        {/* Password errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <div>
                                        <ErrorMessage name="password"></ErrorMessage>
                                    </div>
                                ) 
                            }

                            <button type="submit">Login</button>
                            {isSubmitting ? <p>Login your credentials...</p> : null}
                        </Form>

                )}
            </Formik>
        </div>
    );
}

export default LoginFormik;
