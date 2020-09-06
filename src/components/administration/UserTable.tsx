import React from 'react'
import { Pagination } from 'antd'
import { UserTableInterface } from '../../types/app.types'

export const UserTable = ({
    data,
    current_page,
    setCurrent,
    loadUser,
    setEditShow,
}: UserTableInterface): JSX.Element => {
    const total = 6868

    const toggleEditor = (loadedUser) => {
        loadUser(loadedUser)
        setEditShow(true)
    }

    return (
        <div className="users-list">
            <div className="list-container">
                <div className="list-table">
                    <div className="column-list">
                        <div className="column-list-elements">
                            <div id="nu1">
                                <p>ID</p>
                            </div>
                            <div id="nu2">
                                <p>Master</p>
                            </div>
                            <div id="nu3">
                                <p>Affiliate</p>
                            </div>
                            <div id="nu4">
                                <p>Email</p>
                            </div>
                            <div id="nu5">
                                <p>Name</p>
                            </div>
                            <div id="nu6">
                                <p>Mobile</p>
                            </div>
                            <div id="nu7">
                                <p>Balance</p>
                            </div>
                            <div id="nu8">
                                <p>Status</p>
                            </div>
                            <div id="nu9">
                                <p>Actions</p>
                            </div>
                        </div>
                    </div>
                    {!data ? (
                        <div className="loading">
                            <h4>loading...</h4>
                        </div>
                    ) : null}
                    {data !== undefined && data.length === 0 ? (
                        <div className="loading">
                            <h4>No users found :(</h4>
                        </div>
                    ) : null}
                    <div className="row-list">
                        {data?.map((user) => {
                            return (
                                <div className="row-list-elements" key={user.id}>
                                    <div id="nu1">
                                        <p>{user.id}</p>
                                    </div>
                                    <div id="nu2">
                                        <p>{user.master_id}</p>
                                    </div>
                                    <div id="nu3">
                                        <p>{user.affiliate.name}</p>
                                    </div>
                                    <div id="nu4">
                                        <p>{user.email}</p>
                                    </div>
                                    <div id="nu5">
                                        <p>{user.name}</p>
                                    </div>
                                    <div id="nu6">
                                        <p>{user.mobile}</p>
                                    </div>
                                    <div id="nu7">
                                        <p>{user.balance.balance}</p>
                                    </div>
                                    <div id="nu8">
                                        <p>{user.status}</p>
                                    </div>
                                    <div id="nu9">
                                        <div
                                            role="button"
                                            onKeyDown={toggleEditor}
                                            tabIndex={0}
                                            className="link"
                                            onClick={() => toggleEditor(user)}
                                        >
                                            <img
                                                width="15px"
                                                src={require('../../images/pencil.svg')}
                                                alt="edit"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Pagination
                    current={current_page}
                    onChange={(page) => setCurrent(page)}
                    total={total}
                    showSizeChanger={false}
                />
            </div>
        </div>
    )
}
