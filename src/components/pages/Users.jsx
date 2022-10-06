import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard"
import {SecondaryButton} from "../atoms/button/SecondaryButton";
// import {UserContext} from "../../providers/UserProvieder";
import { useRecoilState } from "recoil";
import {userState} from "../../store/userState";

// samle date of user
const users = [...Array(10).keys()].map((val) => {
  return {
  id: val,
  name: `moto:${val}`,
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "hogehoge@hoge.com",
  phone: "090-1111-2222",
  company: {
    name: "hogehoge.inc"
  },
  website : "https://hogehoge.com"
  }
})

export const Users = () => {
  // const { userInfo, setUserInfo } = useContext(UserContext); 

  const [userInfo, setUserInfo] = useRecoilState(userState)

  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin}) 

  return (
    <SContainer>
      <h2>This is Users page</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>switch</SecondaryButton>
      <SUserArea>    {users.map((user) => (
        <UserCard key={user.id} user={user}/>
        ))}
      </SUserArea>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`

