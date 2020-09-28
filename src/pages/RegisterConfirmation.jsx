import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../components/Button'
import { MainSection } from '../style'

export default function RegisterConfirmation() {
  return (
    <MainSection>
      <h2>Check your email for activation link</h2>
      <Link to="/"><Button>Go to Start Page</Button></Link>
    </MainSection>
  )
}
