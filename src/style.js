import styled from 'styled-components';

export const ButtonRegular = styled.button`
  background-color: ${props => props.secondary ? props.theme.colors.white : props.theme.colors.main};
  color: ${props => props.secondary ? props.theme.colors.main : props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.main};
  display: block;
  padding: 0.65rem 0;
  width: 100%;
  margin: 1rem auto;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color border 0.25s;
  &:hover {
    cursor: pointer;
    background-color: ${ props => props.theme.colors.dark };
    color: ${ props => props.theme.colors.white };
  }
`

export const ButtonSmall = styled(ButtonRegular)`
  display: inline;
  width: auto;
  margin: 0;
  padding: 0.5rem;
  border: none;
  font-size: 0.9rem;
`

export const ButtonDelete = styled(ButtonRegular)`
  &:hover {
    background-color: ${ props => props.theme.colors.accent };
    border: 1px solid ${ props => props.theme.colors.accent };
  }
`

export const ButtonSmallDelete = styled(ButtonSmall)`
  width: 27px;
  height: 27px;
  padding: 0.25rem;
  &:hover {
    background-color: ${ props => props.theme.colors.accent };
    border: 1px solid ${ props => props.theme.colors.accent };
  }
`

export const MainSection = styled.section`
  width: 90vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid ${ props => props.theme.colors.light };
`

export const FormWrapper = styled.form`
  background: ${ props => props.theme.colors.light };
  padding: 3rem;
`

export const Label = styled.label`
  display: block;
  margin-top: 1rem;
  font-size: 0.9rem;
`

export const Input = styled.input`
  width: 100%;
  display: inline-block;
  padding: 0.7rem 1rem;
  color: ${ props => props.theme.colors.dark };
  border: 1px solid #ddd;
  box-sizing: border-box;
  line-height: 1.4;
`

export const ErrorText = styled.p`
  font-size: 0.9rem;
  font-style: italic;
  margin: 0;
`