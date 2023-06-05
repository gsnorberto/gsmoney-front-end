import { HeaderContainer } from "./styles"
import { Context } from "../../context/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { clearStorage } from "../../localStorage"

export default () => {
   // let navigate = useNavigate()
   // const { userLS, setUserLS } = useContext(Context)

   // const logout = () => {
   //    clearStorage()
   //    setUserLS(undefined)
   //    navigate("/")
   // }

   return (
      <>
         <HeaderContainer>
            Header
         </HeaderContainer>
      </>
   )
}
