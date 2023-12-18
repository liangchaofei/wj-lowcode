import { produce } from 'immer'
import { Model } from '@/hooks/useModel';
import { Store } from '.';
import { ComponentPropsType } from '@/components/QuestionComponents'

export type ComponentInfoType = {
    fe_id: string 
    type: string
    title: string
    isHidden?: boolean
    isLocked?: boolean
    props: ComponentPropsType
}
export type ComponentsStateType = {
    componentList: ComponentInfoType[];
    selectedId: string;
}

const INIT_STATE: ComponentsStateType = {
    componentList: [],
    selectedId: ''
}

export class CompoentStore extends Model<ComponentsStateType> {
    constructor(public store: Store) {
        super({
            state: INIT_STATE,
            effects: {
                changeSelectedId: produce((draft: ComponentsStateType, id: string) => {
                    this.setState({
                        selectedId: id
                    })
                })
            }
        })
    }

    setCompoentData(componentData: ComponentsStateType): void {
        console.log('componentData', componentData)
        this.setState(componentData)
    }
}