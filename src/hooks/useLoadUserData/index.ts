import { useEffect, useState } from 'react'
import { useRequest } from 'ahooks'
import { useGetUserInfo } from '@/hooks'
import { getUserInfoService } from '@/services/user'
import { store } from '@/store';


function useLoadUserData() {
  const [waitingUserData, setWaitingUserData] = useState(true)

  // ajax 加载用户信息
  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result
      store.userStore.setUserData({ username, nickname })
    },
    onFinally() {
      setWaitingUserData(false)
    },
  })

  // // 判断当前 user store 是否已经存在用户信息
  const { username } = useGetUserInfo() // user store
  console.log('username', username)
  useEffect(() => {
    if (username) {
      setWaitingUserData(false) // 如果 user store 已经存在用户信息，就不用重新加载了
      return
    }
    run() // 如果 user store 中没有用户信息，则进行加载
  }, [username])

  return { waitingUserData }
}

export default useLoadUserData;
