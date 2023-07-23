import Services, { Response } from "."

const Auth = {
    async  login(email:string, password:string) : Promise<Response>{
        return await Services.post('/login',{email,password})
    },
}

export default Auth