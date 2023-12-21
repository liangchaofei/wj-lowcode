import React, { FC } from "react";
import { useNavigate } from 'react-router-dom'
import { Spin, Result, Button } from 'antd'
import { useTitle } from 'ahooks'
import { useLoadQuestionData, useGetPageInfo } from "@/hooks";
import StatHeader from "./StatHeader";
import styles from './index.module.scss'

const Stat: FC = () => {
    const nav = useNavigate()
    const { loading } = useLoadQuestionData();
    const { isPublished, title } = useGetPageInfo()

    // 修改标题
    useTitle(`问卷统计 - ${title}`)
    
    // loading 效果
    const LoadingELem = (
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Spin />
        </div>
    )

    
    function genContentElem() {
        // 未发布
        if (typeof isPublished === 'boolean' && !isPublished) {
            return (
                <div style={{ flex: '1' }}>
                    <Result
                        status="warning"
                        title="该页面尚未发布"
                        extra={
                            <Button type="primary" onClick={() => nav(-1)}>
                                返回
                            </Button>
                        }
                    ></Result>
                </div>
            )
        }
        // 已发布
        return (
            <>
                <div className={styles.left}>
                    left
                </div>
                <div className={styles.main}>
                    main
                </div>
                <div className={styles.right}>
                    right
                </div>
            </>
        )
    }
    return (
        <div className={styles.container}>
            <StatHeader />
            <div className={styles['content-wrapper']}>
                {loading && LoadingELem}
                {!loading && <div className={styles.content}>{genContentElem()}</div>}
            </div>
        </div>
    );
};

export default Stat;
