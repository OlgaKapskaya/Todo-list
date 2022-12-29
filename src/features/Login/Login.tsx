import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {loginTC} from "./authReducer";
import {useNavigate} from "react-router-dom";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    isLoggedIn && navigate('/')

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 3)
                errors.password = 'Field should be more 3 symbols'
            return errors
        },
        onSubmit: (values, {resetForm}) => {
            dispatch(loginTC({...values}))
            resetForm()
        }
    })


    return <Grid container justifyContent='center'>
        <Grid item justifyContent='center'>
            <FormControl>
                <FormLabel>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </FormLabel>
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>

                        <TextField label="Email"
                                   margin="normal"
                                   helperText={formik.touched.email && formik.errors.email}
                                   error={!!formik.errors.email && !!formik.touched.email}
                                   {...formik.getFieldProps('email')}
                        />
                        <TextField type="password"
                                   label="Password"
                                   margin="normal"
                                   helperText={formik.touched.password && formik.errors.password}
                                   error={!!formik.errors.password && !!formik.touched.password}
                                   {...formik.getFieldProps('password')}
                        />
                        <FormControlLabel label='Remember me'
                                          control={<Checkbox {...formik.getFieldProps('rememberMe')}
                                                             checked={formik.values.rememberMe}/>}

                        />
                        <Button type='submit' variant='contained' color='primary'>
                            Login
                        </Button>

                    </FormGroup>
                </form>
            </FormControl>

        </Grid>
    </Grid>
}