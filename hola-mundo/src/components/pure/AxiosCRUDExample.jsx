import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { getAllUsers, getAllPagedUsers, login, getUserByID, createUser, updateUserByID, deleteUserByID } from '../../services/axiosCRUDService';
import * as Yup from 'yup';

const AxiosCRUDExample = () => {

    const authUser = (values) => {
        login(values.email, values.password)
            .then((response) => {
                if(response.data.token){
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem ('token', response.data.token)
                }else {
                    sessionStorage.removeItem('token')
                    throw new Error('Login failure')
                }
            })
            .catch((error) => {
                alert(`Something went wrong: ${error}`)
                sessionStorage.removeItem('token')
            })
            .finally(() => {
                console.log ('Login done')
            })
    }

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string().email('Invalid email fomat').required('Email is requiered'),
            password: Yup.string().required('Password is requiered')
        }
    )

    const initialCredentials= { 
        email: '',
        password: ''
    }

    //CRUD Examples
    const obtainAllUsers = () => {
        getAllUsers()
            .then((response) => {
                if(response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error('Not users found')
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`))
    }

    const obtainAllPagedUsers = (page) => {
        getAllPagedUsers(page)
            .then((response) => {
                if(response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error(`Not users found in page ${page}`)
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`))
    }

    const obtainUserByID = (id) => {
        getUserByID(id)
            .then((response) => {
                if(response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data))
                }else{
                    throw new Error('User not found')
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`))
    }

    const createnNewUser = (name, job) => {
        createUser(name, job)
            .then((response) => {
                if(response.data && response.status === 201){
                    alert(JSON.stringify(response.data))
                }else{
                    throw new Error('User not created')
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`))
    }

    const updateUser = (id, name, job) => {
        updateUserByID(id, name, job)
            .then((response) => {
                if(response.data && response.status === 200){
                    alert(JSON.stringify(response.data))
                }else{
                    throw new Error('User not found & not updated done')
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`))
    }


    const deleteUser = (id) => {
        deleteUserByID(id)
            .then((response) => {
                if(response.status === 204){
                    alert(`User with id: ${id} successfully deleted`)
                }else{
                    throw new Error('User not found & not updated done')
                }
            })
            .catch((error) => alert(`Something went wrong ${error}`))
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
                    authUser(values)
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
            {/* Example buttons to test API responses */}
            <div>
                <button onClick={obtainAllUsers}>
                            Get all users with AXIOS
                </button>

                <button onClick={() => obtainAllPagedUsers(1)}>
                            Get all (Page 1) users with Axios
                </button>
                
                <button onClick={() => obtainUserByID(1)}>
                            Get User 1
                </button>

                <button onClick={() => createnNewUser('morpheus', 'leader')}>
                            Create User
                </button>

                <button onClick={() => updateUser('morpheus', 'Developer')}>
                            Update User
                </button>

                <button onClick={() => deleteUser(1)}>
                            Delete User
                </button>

            </div>
        </div>
    );
}

export default AxiosCRUDExample;
