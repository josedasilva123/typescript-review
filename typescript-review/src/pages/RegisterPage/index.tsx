import { Link } from "react-router-dom"
import RegisterForm from "../../components/RegisterForm"

const RegisterPage = () => {
  return (
    <div>
      <Link to="/">Voltar</Link>
      <RegisterForm />
    </div>
  )
}

export default RegisterPage