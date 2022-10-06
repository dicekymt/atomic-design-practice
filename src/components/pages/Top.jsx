import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton"
import { useHistory } from "react-router-dom"
// import {UserContext} from "../../providers/UserProvieder";
import { useSetRecoilState  } from "recoil";
import {userState} from "../../store/userState";

export const Top = () => {
  const history = useHistory();
  
  // const { setUserInfo } = useContext(UserContext);

  const setUserInfo = useSetRecoilState(userState)

  const onClickAdmin = () => {
    setUserInfo({ isAdmin:true});
    history.push('/users');
  } 
  const onClickGeneral = () => {
    setUserInfo({ isAdmin:false});
    history.push('/users')
  } 
  return (
    <SContainer>
      <h2>This is Top page</h2>
      <SecondaryButton onClick={onClickAdmin}>Admin</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>User</SecondaryButton>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`
