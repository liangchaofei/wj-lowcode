import { Model  } from '@/hooks/useModel';
import { Store } from '.'

export type UserStateType = {
    username: string
    nickname: string
}
const INIT_STATE: UserStateType = { username: '', nickname: '' }
  
export class UserStore extends Model<UserStateType> {
    constructor(public store: Store) {
        super({
            state: INIT_STATE,
        })
    }

    // 存储 用户 信息 - 登录
    setUserData(userData: UserStateType): void {
        this.setState(userData)
    }

    // 清除 用户 信息 - 登出
    clearUserdData(): void {
        this.setState(INIT_STATE)
    }
}