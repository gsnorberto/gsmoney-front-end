import { HeaderArea, HeaderContainer, LeftContent, MiddleContent, RightContent, MenuItem } from "./styles"
import { Link } from "react-router-dom";

export default () => {
   return (
      <HeaderArea>
         <HeaderContainer>
            <LeftContent>
               Olá, Marcus
            </LeftContent>
            <MiddleContent>
               GSmoney
            </MiddleContent>
            <RightContent>
               <Link to='/'><MenuItem>INÍCIO</MenuItem></Link>
               <Link to='/minhas-metas'>
                  <MenuItem>MINHAS METAS</MenuItem>
               </Link>
               <Link to='/historico-anual'>
                  <MenuItem>HISTÓRICO ANUAL</MenuItem>
               </Link>
            </RightContent>
         </HeaderContainer>
      </HeaderArea>
   )
}
