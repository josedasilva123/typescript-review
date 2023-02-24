import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useOutclick } from "../../hooks/useOutclick";
import { ILoginFormValues } from "../../providers/UserContext/@types";
import { UserContext } from "../../providers/UserContext/UserContext";
import Input from "../Input";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<ILoginFormValues>();
  const { userLogin } = useContext(UserContext);
  
  const submit: SubmitHandler<ILoginFormValues> = (formData) => {
    userLogin(formData);
  }  

  const ref = useOutclick<HTMLFormElement>(() => console.log("batata"));

  return (
    <form ref={ref} onSubmit={handleSubmit(submit)}>
        <Input label="Seu e-mail" type="email" register={register("email")} error={errors.email} />
        <Input label="Sua senha" type="password" register={register("password")} error={errors.password} />
        <button type="submit">Entrar</button>
    </form>
  )
}

export default LoginForm