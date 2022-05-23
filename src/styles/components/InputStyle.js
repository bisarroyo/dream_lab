import styled from 'styled-components'

const InputStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.5rem;

  input {
    min-width: 200px;
    min-height: 2rem;
    border: none;
    border-bottom: 1px solid #344e41;
    padding: 0.1rem 0.3rem;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-color: #3a5a40;
    }

    &::placeholder {
      color: #344e41;
    }
  }

  label {
    font-size: 1.2rem;
    color: #344e41;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`

export default InputStyle
