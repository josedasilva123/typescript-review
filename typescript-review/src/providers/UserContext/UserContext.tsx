import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { IUserContext, IDefaultProviderProps, IUser, IRegisterFormValues, ILoginFormValues } from "./@types";

 /* loading, setLoading, user, userRegister, userLogin, userLogout */

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
   const [loading, setLoading] = useState(false);
   const [user, setUser] = useState<IUser | null>(null);

   const navigate = useNavigate();

   const userLoad = async () => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
         try {
            const response = await api.get("/users/profile", {
               headers: {
                  auth: token,
               },
            });
            setUser(response.data);
            navigate("/dashboard");
         } catch (error) {
            console.log(error);
            localStorage.removeItem("@TOKEN");
         }
      }
   };

   useEffect(() => {
    userLoad();
   }, []);

   const userRegister = async (formData: IRegisterFormValues) => {
      try {
         setLoading(true);
         const response = await api.post("/users", formData);
         setUser(response.data.user);
         localStorage.setItem("@TOKEN", response.data.token);
         console.log(response.data.message);
         navigate("/dashboard");
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   const userLogin = async (formData: ILoginFormValues) => {
      try {
         setLoading(true);
         const response = await api.post("/users/login", formData);
         setUser(response.data.user);
         localStorage.setItem("@TOKEN", response.data.token);
         console.log("Login realizado com sucesso!");
         navigate("/dashboard");
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   const userLogout = () => {
      setUser(null);
      localStorage.removeItem("@TOKEN");
      navigate("/");
   };

   return <UserContext.Provider value={{ loading, setLoading, user, userRegister, userLogin, userLogout}}>{children}</UserContext.Provider>;
};
