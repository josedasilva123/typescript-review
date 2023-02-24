import { UserProvider } from "./providers/UserContext/UserContext"
import AppRoutes from "./routes/routes"

function App() {
  return (
    <div className="App">
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </div>
  )
}

export default App
