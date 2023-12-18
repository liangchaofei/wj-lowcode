import React from "react";
import { useNavigate } from 'react-router-dom'
import { Button, Space} from 'antd'
import { LeftOutlined} from '@ant-design/icons'
import EditToolbar from '../EditToolbar';
import styles from './index.module.scss'

const EditHeader = () => {
    const nav = useNavigate()
    return (
        <div className={styles['header-wrapper']}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Space>
                        <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
                            返回
                        </Button>
                        TitleElem
                    </Space>
                </div>
                <div className={styles.main}>
                    <EditToolbar />
                </div>
                <div className={styles.right}>
                    <Space>
                    SaveButton
                    PublishButton
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default EditHeader;