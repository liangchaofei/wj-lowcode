import React from "react";
import { Space, Tooltip, Button } from 'antd'
import {
    DeleteOutlined,
    LockOutlined
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import {
    removeSelectedComponent,
    toggleComponentLocked
} from '@/store/componentsReducer'
import { useGetComponentInfo } from '@/hooks'

const EditToolbar = () => {
    const dispatch = useDispatch()
    const { selectedId, selectedComponent } = useGetComponentInfo()
    const { isLocked } = selectedComponent || {}
     // 删除
     const handleDelete = () => {
        dispatch(removeSelectedComponent())
     }
     // 锁定组件
     function handleLock() {
        dispatch(toggleComponentLocked({ fe_id: selectedId }))
    }
    
    return (
        <Space>
            <Tooltip title="删除">
                <Button shape="circle" icon={<DeleteOutlined />} onClick={handleDelete}></Button>
            </Tooltip>
            <Tooltip title="锁定">
                <Button
                shape="circle"
                icon={<LockOutlined />}
                onClick={handleLock}
                type={isLocked ? 'primary' : 'default'}
                ></Button>
            </Tooltip>
        </Space>
    )
}
export default EditToolbar;