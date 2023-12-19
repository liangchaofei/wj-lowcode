import React, { FC } from "react";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { MANAGE_INDEX_PATHNAME } from "@/router";
import styles from "./index.module.scss";

const { Title, Paragraph } = Typography;

const Home: FC = () => {
    const nav = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <Title>问卷调查 | 在线投票</Title>
                <Paragraph>已累计创建问卷 100 份，发布问卷 10 份，收到答卷 80 份</Paragraph>
                <div>
                    <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>
                        开始使用
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
