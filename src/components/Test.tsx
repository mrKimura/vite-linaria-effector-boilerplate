import React, { FC } from 'react'
import { styled } from '@linaria/react'

import { theme } from '../ui/theme'

interface Props {}

export const Test: FC<Props> = ({}) => {
  return <Container>Test</Container>
}

const Container = styled.div`
  display: flex;
  background-color: ${theme.second};
`
