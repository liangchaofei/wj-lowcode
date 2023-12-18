import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import produce from 'immer'
import { ComponentPropsType } from '@/components/QuestionComponents'

export type ComponentInfoType = {
  fe_id: string // 前端生成的 id ，服务端 Mongodb 不认这种格式，所以自定义一个 fe_id
  type: string
  title: string
  isHidden?: boolean
  isLocked?: boolean
  props: ComponentPropsType
}

export type ComponentsStateType = {
  selectedId: string
  componentList: ComponentInfoType[]
  copiedComponent: ComponentInfoType | null
}

const INIT_STATE: ComponentsStateType = {
  selectedId: '',
  componentList: [],
  copiedComponent: null,
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents: (state: ComponentsStateType, action: PayloadAction<ComponentsStateType>) => action.payload,
    
   // 修改 selectedId
   changeSelectedId: produce((draft: ComponentsStateType, action: PayloadAction<string>) => {
      draft.selectedId = action.payload
   }),
  }
})

export const {
  resetComponents,
  changeSelectedId,
} = componentsSlice.actions

export default componentsSlice.reducer