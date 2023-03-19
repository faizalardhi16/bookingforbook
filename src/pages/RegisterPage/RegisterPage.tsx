import React, { BaseSyntheticEvent, SyntheticEvent, useEffect, useState } from 'react'
import useRegisterUser from '../../api/useRegisterUser';
import { IFormRegister } from '../../interface/IFormRegister'
import { registerApi, getTestApi } from '../../constant/apiUrl';
import RegisterForm from './components/RegisterForm';
import axios from 'axios';
import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldErrors, SubmitHandler } from 'react-hook-form/dist/types';
import Swal from 'sweetalert2';
import { IResponseAPI } from '../../interface/IResponseAPI';

const RegisterFormZod = z.object({
    firstName: z.string().min(1, { message: "Fist name cannot be empty" }),
    lastName: z.string().min(1, { message: "Last name cannot be empty " }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password minimal berisikan 8 karakter" })
})


type registerFormZod = z.infer<typeof RegisterFormZod>;

const defaultValueForm: IFormRegister = {
    firstName: "",
    lastName: "",
    password: "",
    email: ""
}


export default function RegisterPage() {
    const { control, watch, setValue, handleSubmit, formState: { errors }, reset } = useForm<registerFormZod>({
        resolver: zodResolver(RegisterFormZod),
        defaultValues: defaultValueForm
    })
    const [form, setForm] = useState<IFormRegister>({
        firstName: "",
        lastName: "",
        password: "",
        email: ""
    });
    const [loading, setLoading] = useState<boolean>(false);

    const values = watch();

    useEffect(() => {
        console.log(values)
    }, [values])

    const onSubmit = async (e: IFormRegister, event: BaseSyntheticEvent | undefined) => {
        if (event) {
            event.preventDefault();
        }
        setLoading(true);

        try {

            const response: IResponseAPI = await useRegisterUser(values);

            setLoading(false);

            reset()

            Swal.fire(
                "Info Success",
                `${response.meta.message}`,
                "success"
            )

        } catch (error) {
            setLoading(false);
        }

    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: [e.target.value][0] })
    }

    const onError = (e: FieldErrors<IFormRegister>) => {
        console.log(e)
    }

    return (
        <div className="bg-[url(/img/work.jpg)] w-full h-[100vh] bg-cover bg-center">
            <div className="w-full h-[100vh] bg-stone-900/50">
                <RegisterForm form={form} submit={handleSubmit((e, event) => onSubmit(e, event), onError)} onChange={onChange} control={control} errors={errors} />
            </div>
        </div>
    )
}
