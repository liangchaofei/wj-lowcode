import React, { FC, useState, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Space, Input, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useRequest, useKeyPress, useDebounceEffect } from "ahooks";
import { LeftOutlined, EditOutlined, LoadingOutlined } from "@ant-design/icons";
import { changePageTitle } from "@/store/pageInfoReducer";
import { useGetPageInfo, useGetComponentInfo } from "@/hooks";
import { updateQuestionService } from "@/services/question";
import EditToolbar from "../EditToolbar";
import styles from "./index.module.scss";

const { Title } = Typography;

// 显示和修改标题
const TitleElem: FC = () => {
    const { title } = useGetPageInfo();
    const dispatch = useDispatch();

    const [editState, SetEditState] = useState(false);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const newTitle = event.target.value.trim();
        if (!newTitle) return;
        dispatch(changePageTitle(newTitle));
    }

    if (editState) {
        return (
            <Input
                value={title}
                onChange={handleChange}
                onPressEnter={() => SetEditState(false)}
                onBlur={() => SetEditState(false)}
            />
        );
    }

    return (
        <Space>
            <Title>{title}</Title>
            <Button icon={<EditOutlined />} type="text" onClick={() => SetEditState(true)} />
        </Space>
    );
};

// 保存按钮
const SaveButton: FC = () => {
    const { id } = useParams();
    const { componentList = [] } = useGetComponentInfo();
    const pageInfo = useGetPageInfo();

    const { loading, run: save } = useRequest(
        async () => {
            if (!id) return;
            await updateQuestionService(id, { ...pageInfo, componentList });
        },
        { manual: true },
    );
    // 快捷键
    useKeyPress(["ctrl.s", "meta.s"], (event: KeyboardEvent) => {
        event.preventDefault();
        if (!loading) save();
    });
    // 自定保存（不是定期保存，不是定时器）
    useDebounceEffect(
        () => {
            save();
        },
        [componentList, pageInfo],
        {
            wait: 1000,
        },
    );

    return (
        <Button onClick={save} disabled={loading} icon={loading ? <LoadingOutlined /> : null}>
            保存
        </Button>
    );
};

const EditHeader = () => {
    const nav = useNavigate();
    return (
        <div className={styles["header-wrapper"]}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <Space>
                        <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
                            返回
                        </Button>
                        <TitleElem />
                    </Space>
                </div>
                <div className={styles.main}>
                    <EditToolbar />
                </div>
                <div className={styles.right}>
                    <Space>
                        <SaveButton />
                        PublishButton
                    </Space>
                </div>
            </div>
        </div>
    );
};

export default EditHeader;
