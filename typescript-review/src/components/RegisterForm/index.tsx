import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form"
import { IRegisterFormValues } from "../../providers/UserContext/@types";
import { UserContext } from "../../providers/UserContext/UserContext";
import Input from "../Input";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<IRegisterFormValues>(); 
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
  }
  
  return (
    <form onSubmit={handleSubmit(submit)}>
        <Input type="text" label="Seu nome" register={register("name")} error={errors.name} />
        <Input type="email" label="Seu e-mail" register={register("email")} error={errors.email} />
        <Input type="password" label="Cria uma senha" register={register("password")} error={errors.password} />
        <button type="submit">Enviar</button>
    </form>
  )
}

export default RegisterForm