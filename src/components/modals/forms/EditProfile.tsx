import React from 'react'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { Form, Input, SubmitButton } from 'formik-antd'
import { Formik } from 'formik'
import { EditProfileType } from '../../../types/modals.types'

export const EditProfile = (props: EditProfileType): JSX.Element => {
    const { admin } = useSelector((state) => state.admin)
    const { onEdit, onHide } = props

    return (
        <div className="edit-profile">
            <Formik
                initialValues={{
                    name: admin.name,
                    password: '',
                    password_confirmation: '',
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().min(3, 'Invalid name').required('Enter the name'),
                    password: Yup.string()
                        .min(6, 'Minimum 6 characters')
                        .required('Enter your password'),
                    password_confirmation: Yup.string()
                        .oneOf([Yup.ref('password'), ''], 'passwords do not match')
                        .required('password must be confirmed'),
                })}
                onSubmit={(fields, { resetForm }) => {
                    onEdit(fields)
                    resetForm()
                }}
            >
                {({ values, handleChange, handleBlur, submitForm, isSubmitting }) => (
                    <Form layout="vertical" className="edit-profile-form">
                        <div className="inputs">
                            <Form.Item name="name" label="Name" className="form-item">
                                <Input
                                    id="formName"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                            </Form.Item>
                            <Form.Item name="password" label="Password" className="form-item">
                                <Input
                                    id="formPassword"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                            </Form.Item>
                            <Form.Item
                                name="password_confirmation"
                                label="Confirm Password"
                                className="form-item"
                            >
                                <Input
                                    id="formPasswordConfirmation"
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password_confirmation}
                                />
                            </Form.Item>
                        </div>
                        <br />
                        {isSubmitting}
                        <br />
                        <div className="form-buttons">
                            <SubmitButton
                                className="submit-button"
                                type="primary"
                                htmlType="submit"
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Save
                            </SubmitButton>
                            <SubmitButton
                                className="cancel-button"
                                type="default"
                                htmlType="button"
                                disabled={isSubmitting}
                                onClick={onHide}
                            >
                                Cancel
                            </SubmitButton>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
