import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext"

const DashboardPage = () => {
  const { user, userLogout } = useContext(UserContext);
  
  return (
    <div>
      <button onClick={() => userLogout()}>Sair</button>
      <h2>{user?.name} . {user?.email}</h2>
    </div>
  )
}

export default DashboardPage