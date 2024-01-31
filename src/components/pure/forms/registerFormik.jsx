import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


//Models 
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', // to confirm password
        role: ROLES.USER
    }

    const registerSchema = Yup.object().shape(

        {
            username: Yup.string().min(6, 'Username too short').max(12, 'Username too long'),
            email: Yup.string().email('Invalid email fomat').required('Email is requiered'),
            role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a role user').required('Role is requiered'),
            password: Yup.string().required('Password is requiered').min(8, 'Password to short'),
            confirm: Yup.string().when("password", {is: value => (value && value.length > 0 ? true : false), 
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    '¡Passwords must match!'
            )
        }).required('You must confirm the password')
        }

    )

    const submit = (values) => {
        alert('register user')
    }
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = {initialValues}
                validationSchema={registerSchema}
                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
                }}

            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => (
                        <Form>
                            <label htmlFor="username">Username</label>
                            <Field id="username" type="username" name="username" placeholder="Your username" />

                            {/* Username Errors */}
                            {
                                errors.username && touched.username && 
                                    (
                                        <div>
                                            <ErrorMessage name="username"></ErrorMessage>
                                        </div>
                                    ) 
                            }
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@emial.com" />

                            {/* Email Errors */}
                            {
                                errors.email && touched.email && 
                                (
                                    <div>
                                        <ErrorMessage name="email"></ErrorMessage>
                                    </div>
                                ) 
                            }

                            <label htmlFor="password">Password</label>
                            <Field id="password" type="password" name="password" placeholder="Password" />.
                    
                            {/* Password Errors */}
                            {
                                errors.password && touched.password && 
                                (
                                    <div>
                                        <ErrorMessage name="password"></ErrorMessage>
                                    </div>
                                ) 
                            }

                            <label htmlFor="password">Password</label>
                            <Field id="password" type="password" name="password" placeholder="Confirm Password" />.
                    
                            {/* Confirm Errors */}
                            {
                                errors.confirm && touched.confirm && 
                                (
                                    <div>
                                        <ErrorMessage name="confirm"></ErrorMessage>
                                    </div>
                                ) 
                            }
                            <button type="submit">Register Account</button>
                            {isSubmitting ? <p>Sending your credentials...</p> : null}
                        </Form>
                    )}
            </Formik>
        </div>
    );
}

export default RegisterFormik;
