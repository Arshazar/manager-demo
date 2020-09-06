import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Form, Input, SubmitButton } from 'formik-antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { loginAPI } from '../../api/api'
import { LoginReqType } from '../../types/app.types'
import { useRouter } from 'next/router'

export const Login: React.FC = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const reduceState = (action, data) => {
        dispatch(action(data))
    }

    const onRouteDashboard = (fields: LoginReqType) => {
        loginAPI(fields, router, reduceState)
    }

    return (
        <div className="login-page">
            <div className="login-component">
                <div className="login-box">
                    <h1>Login</h1>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email('Invalid email').required('Enter your email'),
                            password: Yup.string()
                                .min(6, 'Minimum 6 characters')
                                .required('Enter your password'),
                        })}
                        onSubmit={(fields, { resetForm }) => {
                            onRouteDashboard(fields)
                            resetForm()
                        }}
                    >
                        {({ values, handleChange, handleBlur, submitForm, isSubmitting }) => (
                            <Form layout="vertical" className="login-form">
                                <Form.Item label="Email" className="form-item" name="email">
                                    <Input
                                        prefix={<UserOutlined className="site-form-item-icon" />}
                                        value={values.email}
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Item>
                                <Form.Item label="Password" className="form-item" name="password">
                                    <Input.Password
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        value={values.password}
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                </Form.Item>
                                <br />
                                {isSubmitting}
                                <br />
                                <SubmitButton
                                    className="submit-button"
                                    type="primary"
                                    htmlType="submit"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                    Submit
                                </SubmitButton>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
