import Services from "."
import { Response } from "."

const User = {
   async  register(user : Record<string, any>) : Promise<Response>{
        return await Services.post('/register',user)
    },
   async get(id?:string) : Promise<Response>{
        return await Services.get(id ?"/user/"+id : "/user")
    },
   async update(id: string,user:Record<string, string|number|boolean>):Promise<Response>{
        return await Services.put("/user/"+id,user)
    },
   async completeProfile(user:Record<string, string|number|boolean|File>):Promise<Response>{
        const data = new FormData()
        data.append("socials", user.socials as string)
        data.append("description", user.description as string)
        data.append("picture", user.picture as string)
        return await Services.put("/user/complete-profile",data)
    },
   async delete(id: string) : Promise<Response>{
        return await Services.remove("/user/"+id)
    },
}

export default User