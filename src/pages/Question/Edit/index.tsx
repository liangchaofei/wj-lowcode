import React, { FC } from 'react'
import styles from './index.module.scss'

const Editor: FC = () => {
    return (
        <div className={styles.container}>
            <div>header</div>
            <div className={styles['content-wrapper']}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        left
                    </div>
                    <div className={styles.main}>
                        <div className={styles['canvas-wrapper']}>
                            middle
                        </div>
                    </div>
                    <div className={styles.right}>
                        right
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor;