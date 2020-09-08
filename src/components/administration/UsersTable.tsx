import React from 'react'
import { Pagination, Table } from 'antd'
import { UserTableInterface } from '../../types/app.types'
import { UsersInterface } from '../../types/users.types'

export const UsersTable = ({
    data,
    current_page,
    setCurrent,
    loadUser,
    setEditShow,
}: UserTableInterface): JSX.Element => {
    const total = 6868

    const toggleEditor = ([loadedUser]: UsersInterface[]) => {
        loadUser(loadedUser)
        setEditShow(true)
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: 100,
        },
        {
            title: 'Master',
            dataIndex: 'master_id',
            width: 130,
        },
        {
            title: 'Affiliate',
            dataIndex: 'affiliate',
            render: (affiliate) => affiliate.name,
            width: 130,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            width: 240,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            width: 200,
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
            width: 130,
        },
        {
            title: 'Balance',
            dataIndex: 'balance',
            width: 130,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            width: 100,
        },
        {
            title: 'Actions',
            dataIndex: 'id',
            width: 80,
            fixed: 'right',
            render: (id) => (
                <div
                    className="link"
                    onClick={() =>
                        toggleEditor(
                            data.filter((user) => {
                                if (user.id === id) {
                                    return user
                                }
                            })
                        )
                    }
                >
                    <img width="15px" src={require('../../images/pencil.svg')} alt="edit" />
                </div>
            ),
        },
    ]

    return (
        <div className="users-list">
            <div className="list-container">
                <Table
                    columns={columns}
                    rowKey={(record) => record.id}
                    dataSource={data}
                    pagination={{
                        current: current_page,
                        onChange: (page) => setCurrent(page),
                        total,
                        showSizeChanger: false,
                    }}
                    scroll={{ x: '100vw', y: '60vh' }}
                    width="900"
                />
            </div>
        </div>
    )
}
