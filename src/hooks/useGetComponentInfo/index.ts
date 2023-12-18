import { store } from '@/store'

function useGetComponentInfo() {
  // component store
    const components = store.compoentStore.getState();
    const { componentList, selectedId} = components

    return {
        componentList,
        selectedId
    }
}

export default useGetComponentInfo
