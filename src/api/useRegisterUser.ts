import { IFormRegister } from '../interface/IFormRegister';
import axios from 'axios';
import { registerApi } from '../constant/apiUrl';
import bodyForm from '../function/bodyForm';

export default async function useRegisterUser(body: IFormRegister){
    try {
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        console.log(body, "BODY")
    
        const response = await axios.post(registerApi, bodyForm(body), config)

        return response.data;
    } catch (error) {
        console.log(error)
    }
}