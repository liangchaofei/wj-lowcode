import React from "react";
import { Space, Tooltip, Button } from 'antd'
import {
    DeleteOutlined,
    LockOutlined,
    CopyOutlined,
    BlockOutlined,
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import {
    removeSelectedComponent,
    toggleComponentLocked,
    copySelectedComponent,
    pasteCopiedComponent,
} from '@/store/componentsReducer'
import { useGetComponentInfo } from '@/hooks'

const EditToolbar = () => {
    const dispatch = useDispatch()
    const { selectedId, selectedComponent, copiedComponent } = useGetComponentInfo()
    const { isLocked } = selectedComponent || {}
     // 删除
     const handleDelete = () => {
        dispatch(removeSelectedComponent())
     }
     // 锁定组件
     function handleLock() {
        dispatch(toggleComponentLocked({ fe_id: selectedId }))
     }
    
     // 复制
     function copy() {
        dispatch(copySelectedComponent())
     }
    
    
     // 粘贴
     function paste() {
        dispatch(pasteCopiedComponent())
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
            <Tooltip title="复制">
                <Button shape="circle" icon={<CopyOutlined />} onClick={copy}></Button>
            </Tooltip>
            <Tooltip title="粘贴">
                <Button
                shape="circle"
                icon={<BlockOutlined />}
                onClick={paste}
                disabled={copiedComponent == null}
                ></Button>
            </Tooltip>
        </Space>
    )
}
export default EditToolbar;