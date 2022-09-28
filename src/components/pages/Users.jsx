import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput"
import { UserCard } from "../organisms/user/UserCard"


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
  return (
    <SContainer>
      <h2>This is Users page</h2>
      <SearchInput />
      <SUserArea>    {users.map((user) => (
        <UserCard key={user.id} user={user} />
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

