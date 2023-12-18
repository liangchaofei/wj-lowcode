import React from "react";
import { Space, Tooltip, Button } from 'antd'
import {
    DeleteOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import {
    removeSelectedComponent,
} from '@/store/componentsReducer'

const EditToolbar = () => {
    const dispatch = useDispatch()
     // 删除
     const handleDelete = () => {
        dispatch(removeSelectedComponent())
     }
    
    return (
        <Space>
            <Tooltip title="删除">
                <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete}></Button>
            </Tooltip>
        </Space>
    )
}
export default EditToolbar;