import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionService } from '@/services/question'
import { store } from '@/store';

function useLoadQuestionData() {
  const { id = '' } = useParams()

  // ajax 加载
  const { data, loading, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error('没有问卷 id')
      const data = await getQuestionService(id)
      return data
    },
    {
      manual: true,
    }
  )

  // 根据获取的 data 设置 redux store
  useEffect(() => {
    if (!data) return
    const {
      componentList = []
    } = data

     // 获取默认的 selectedId
     let selectedId = ''
     if (componentList.length > 0) {
       selectedId = componentList[0].fe_id // 默认选中第一个组件
     }
    // 把 componentList 存储到 store 中
    store.compoentStore.setCompoentData({ componentList, selectedId})


  }, [data])

  // 判断 id 变化，执行 ajax 加载问卷数据
  useEffect(() => {
    run(id)
  }, [id])

  return { loading, error }
}

export default useLoadQuestionData
