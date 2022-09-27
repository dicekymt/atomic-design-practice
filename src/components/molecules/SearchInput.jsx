import styled from "styled-components"

import { PrimaryButton} from "../atoms/button/PrimaryButtton"
import { Input } from "../atoms/input/Input"

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="input word here" />
      <SButtonWrapper>
        <PrimaryButton>Search</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  )
}

const SContainer = styled.div`
  display: flex;
  align-items: center;
`

const SButtonWrapper = styled.div`
  padding-left: 8px;
`

