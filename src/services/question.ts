import axios, { ResDataType } from './ajax'

// 创建问卷
export async function createQuestionService(): Promise<ResDataType> {
    const url = '/api/question'
    const data = (await axios.post(url)) as ResDataType
    return data
}