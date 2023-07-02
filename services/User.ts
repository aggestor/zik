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
   async delete(id: string) : Promise<Response>{
        return await Services.remove("/user/"+id)
    },
}

export default User