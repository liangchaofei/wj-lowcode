import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useLoadQuestionData, useBindCanvasKeyPress } from "@/hooks";
import { changeSelectedId } from "@/store/componentsReducer";
import EditHeader from "./EditHeader";
import EditCanvas from "./EditCanvas";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import styles from "./index.module.scss";

const Editor: FC = () => {
    const { loading } = useLoadQuestionData();
    const dispatch = useDispatch();
    function clearSelectedId() {
        dispatch(changeSelectedId(""));
    }

    // 绑定快捷键
    useBindCanvasKeyPress();

    return (
        <div className={styles.container}>
            <EditHeader />
            <div className={styles["content-wrapper"]}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <LeftPanel />
                    </div>
                    <div className={styles.main} onClick={clearSelectedId}>
                        <div className={styles["canvas-wrapper"]}>
                            <EditCanvas loading={loading} />
                        </div>
                    </div>
                    <div className={styles.right}>
                        <RightPanel />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Editor;
