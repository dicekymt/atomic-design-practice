import { PrimaryButton} from "./components/atoms/button/PrimaryButtton"
import { SecondaryButton} from "./components/atoms/button/SecondaryButton"
import { SearchInput} from "./components/molecules/SearchInput"
import { UserCard} from "./components/organisms/user/UserCard"
import { HeaderOnly } from "./components/templates/HeaderOnly"
import './App.css';


const user = {
  name: "Mira",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "hogehoge@hoge.com",
  phone: "090-1111-2222",
  company: {
    name: "hogehoge.inc"
  },
  website : "https://hogehoge.com"
}


function App() {
  return (
    <>
    <HeaderOnly>
      <PrimaryButton>Primary</PrimaryButton>
      <SecondaryButton>Secondary</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </HeaderOnly>
    </>
  );
}

export default App;
