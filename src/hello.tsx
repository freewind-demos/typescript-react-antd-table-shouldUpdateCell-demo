import React, {useCallback, useMemo, useState} from 'react'
import {Input, Table} from 'antd';
import {ColumnType} from "antd/lib/table";


type Person = {
    key: string,
    name: string,
    money: number,
    address: string,
}


export default function Hello() {
    const [data, setData] = useState<Person[]>([
        {
            key: '1',
            name: 'John Brown',
            money: 500,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            money: 44,
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            money: 45854,
            address: 'Sidney No. 1 Lake Park',
        },
    ])


    const updateValue = useCallback((newValue: unknown, rowIndex: number, fieldName: keyof Person) => {
        // NOTE keep original state unchanged, and create new state,
        //   otherwise shouldCellUpdate may not work
        return data.map(it => ({...it, [fieldName]: newValue}))
    }, [data])

    const columns: ColumnType<Person>[] = useMemo(() => [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (value, record, rowIndex) => {
                return <Input value={value} onChange={(newValue) => updateValue(newValue, rowIndex, 'name')}/>
            },
            shouldCellUpdate: (record, prevRecord) => record.name !== prevRecord.name,
        },
        {
            title: 'Cash Assets',
            className: 'column-money',
            dataIndex: 'money',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            render: (value, record, rowIndex) => {
                return <Input value={value} onChange={(newValue) => updateValue(newValue, rowIndex, 'address')}/>
            },
            shouldCellUpdate: (record, prevRecord) => record.address !== prevRecord.address,
        },
    ], []);


    return <div>
        <Table
            columns={columns}
            dataSource={data}
            bordered
            title={() => 'Header'}
            footer={() => 'Footer'}
        />
    </div>
};
