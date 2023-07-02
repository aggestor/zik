import axios,{type AxiosResponse, type AxiosError} from "axios"

axios.defaults.withCredentials = true
const baseURL =  process.env.NODE_ENV == "development" ? "http://localhost:8000" : 'https://server.something.com/api'
export const store = process.env.NODE_ENV == "development" ? "http://localhost:8000/storage" : 'https://server.something.com/storage'
const headers = {
    'X-Requested-With': 'XMLHttpRequest'
}
const instance = axios.create({baseURL,headers})
export type Response = AxiosError & AxiosResponse<any, any>
const csrf = () => instance.get("/sanctum/csrf-cookie")
    export async function get(path:string){
        await csrf()
        try {
            const response = await instance.get(path)
            return response as Response
        } catch (e) {
            return e as Response
        }
    }
    export async function  remove(path:string) {
        await csrf()
        try {
            const response = await instance.delete(path)
            return response as Response
        } catch (e) {
            return e as Response
        }
    }
    export async function  post(path:string, body = {}, binary = false) {
        await csrf()
        try {
            if (binary) {
                const response = await instance.post(path, body, {headers:{"Content-Type":"multipart/form-data"}})
                return response as Response
            } else {
                 const response = await instance.post(path, body)
                return response as  Response
            }
        }catch(e){
            return e as Response
        }
    }
    export async function  put(path:string, body = {}, binary = false) {
        await csrf()
        try {
            if (binary) {
                return await instance.put(path, body, {headers:{"Content-Type":"multipart/form-data"}}) as Response
            } else {
                 return await instance.put(path, body) as Response
            }
        }catch (e) {
            return e as Response
        }
    }

 const Services = {
    post,remove,get,put
 }

export default Services