import React from 'react'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import { Form, Input, SubmitButton, Select, DatePicker } from 'formik-antd'
import { Formik } from 'formik'
import { SearchUserType } from '../../../types/modals.types'

export const SearchUser = ({ onHide, onSearch }: SearchUserType): JSX.Element => {
    const { filter } = useSelector((state) => state.filter)
    return (
        <div>
            <Formik
                initialValues={{
                    id: filter === null ? '' : filter.id,
                    status: filter === null ? '' : filter.status,
                    created_at_from: filter === null ? '' : filter.created_at_from,
                }}
                validationSchema={Yup.object().shape({
                    id: Yup.number(),
                    status: Yup.string(),
                    created_at_from: Yup.string(),
                })}
                onSubmit={(fields, { resetForm }) => {
                    onSearch(fields)
                    resetForm()
                }}
            >
                {({
                    values,
                    handleChange,
                    handleBlur,
                    submitForm,
                    isSubmitting,
                    setFieldValue,
                }) => (
                    <Form layout="vertical">
                        <div>
                            <Form.Item name="id" label="ID" className="form-item">
                                <Input
                                    id="formId"
                                    type="number"
                                    name="id"
                                    placeholder="ID"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.id}
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
                            <Form.Item
                                name="created_at_from"
                                label="Created At From"
                                className="form-item"
                            >
                                <DatePicker
                                    id="formCreatedAtFrom"
                                    name="created_at_from"
                                    onBlur={handleBlur}
                                    onChange={(e) =>
                                        setFieldValue('created_at_from', e === null ? '' : e)
                                    }
                                    value={values.created_at_from}
                                    showTime
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
                                Search
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
