import React, { FC } from "react";
import { Spin } from 'antd'
import { useDispatch } from 'react-redux'
import classNames from 'classnames';
import { useGetComponentInfo } from '@/hooks'
import {
    ComponentInfoType,
    changeSelectedId,
} from '@/store/componentsReducer'
import { getComponentConfByType } from '@/components/QuestionComponents'
import styles from './index.module.scss'

type PropsType = {
    loading: boolean
}

function genComponent(componentInfo: ComponentInfoType) {
    const { type, props } = componentInfo // 每个组件的信息，是从 redux store 获取的（服务端获取）
  
    const componentConf = getComponentConfByType(type)
    if (componentConf == null) return null
  
    const { Component } = componentConf
    return <Component {...props} />
}

const EditCanvas: FC<PropsType> = ({ loading }) => {
    const { componentList, selectedId } = useGetComponentInfo();
    const dispatch = useDispatch()
    // 点击组件，选中
    function handleClick(event: MouseEvent, id: string) {
        event.stopPropagation() // 阻止冒泡
        dispatch(changeSelectedId(id))
    }

    if (loading) {
        return (
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <Spin />
          </div>
        )
    }


    return (
        <div className={styles.canvas}>
            {
                componentList.length >0 && componentList?.map(item => {
                    const { fe_id, isLocked } = item;
                     // 拼接 class name
                    const wrapperDefaultClassName = styles['component-wrapper']
                    const selectedClassName = styles.selected
                    const lockedClassName = styles.locked
                    const wrapperClassName = classNames({
                        [wrapperDefaultClassName]: true,
                        [selectedClassName]: fe_id === selectedId,
                        [lockedClassName]: isLocked,
                    })
                    return (
                        <div key={fe_id} className={wrapperClassName} onClick={(e: any) => handleClick(e, item.fe_id)}>
                            <div className={styles.component}>
                                { genComponent(item)}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EditCanvas;