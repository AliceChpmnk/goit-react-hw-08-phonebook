import React from 'react'
import { StyledForm } from './Form.styled'

export default function Form({children}) {
  return (
    <StyledForm>
      {children}
    </StyledForm>
  )
}
