import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { EditUserType } from '../../../types/modals.types'
import { Form, Input, Select, SubmitButton } from 'formik-antd'
import { Formik } from 'formik'
import { Col, Row } from 'antd'

export const EditUser = (props: EditUserType): JSX.Element => {
    const { saveEditedUser, onCancel, user } = props
    const { TextArea } = Input
    const screenWidth = window.innerWidth

    const [span, setSpan] = useState<number>(12)

    useEffect(() => {
        if (typeof window !== 'undefined' && screenWidth <= 576) {
            setSpan(24)
        }
    }, [screenWidth, setSpan])

    return (
        <div className="edit-user">
            <Formik
                initialValues={{
                    name: user.name,
                    verification: user.verification,
                    language_id: user.language.id,
                    status: user.status,
                    user_level: user.user_type,
                    notes: user.notes === undefined ? '' : user.notes,
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().min(3, 'Invalid name').required('Enter the name'),
                    verification: Yup.string().required('Set the verification'),
                    language_id: Yup.number().min(0).max(100).required('Set the language id'),
                    status: Yup.string().required('Set the status'),
                    user_level: Yup.number().min(0).max(100).required('Set the user type'),
                    notes: Yup.string().when('status', {
                        is: (status) => status === 'notes',
                        then: Yup.string().required('Please specify why the user is notes'),
                    }),
                })}
                onSubmit={(fields, { resetForm }) => {
                    saveEditedUser(fields)
                    resetForm()
                }}
            >
                {({ values, handleChange, handleBlur, submitForm, isSubmitting }) => (
                    <Form layout="vertical">
                        <Row gutter={24}>
                            <Col span={span}>
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
                                <Form.Item
                                    name="verification"
                                    label="Verification"
                                    className="form-item"
                                >
                                    <Select
                                        id="formVerification"
                                        name="verification"
                                        placeholder="Verification"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.verification}
                                    >
                                        <Select.Option value="">
                                            <p />
                                        </Select.Option>
                                        <Select.Option value="normal">
                                            <p>Normal</p>
                                        </Select.Option>
                                        <Select.Option value="need_verify">
                                            <p>Need verify</p>
                                        </Select.Option>
                                        <Select.Option value="pending_verification">
                                            <p>Pending verification</p>
                                        </Select.Option>
                                        <Select.Option value="verified">
                                            <p>Verified</p>
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={span}>
                                <Form.Item
                                    name="language_id"
                                    label="Language ID"
                                    className="form-item"
                                >
                                    <Input
                                        id="formLanguageId"
                                        type="number"
                                        name="language_id"
                                        placeholder="Language ID"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.language_id}
                                    />
                                </Form.Item>
                                <Form.Item name="status" label="Status" className="form-item">
                                    <Select
                                        id="formStatus"
                                        name="status"
                                        placeholder="Status"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.status}
                                    >
                                        <Select.Option value="">
                                            <p />
                                        </Select.Option>
                                        <Select.Option value="active">
                                            <p>active</p>
                                        </Select.Option>
                                        <Select.Option value="waiting">
                                            <p>waiting</p>
                                        </Select.Option>
                                        <Select.Option value="banned">
                                            <p>banned</p>
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={span}>
                                <Form.Item name="notes" label="Notes" className="form-item">
                                    <TextArea
                                        id="formNotes"
                                        rows={2}
                                        name="notes"
                                        placeholder="Notes"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.notes}
                                    />
                                </Form.Item>
                                <Form.Item
                                    name="user_level"
                                    label="User Level"
                                    className="form-item"
                                >
                                    <Input
                                        id="formUserLevel"
                                        type="number"
                                        name="user_level"
                                        placeholder="User Level"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.user_level}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
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
                                onClick={onCancel}
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
