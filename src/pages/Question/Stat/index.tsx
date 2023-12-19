import React, { FC } from "react";
import { useLoadQuestionData } from "@/hooks";

const Stat: FC = () => {
    const { loading } = useLoadQuestionData();
    return (
        <div>
            <p>Stat page {loading}</p>
        </div>
    );
};

export default Stat;
