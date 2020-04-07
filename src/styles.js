import styled from 'styled-components';
 

export const Container = styled.div`
  width: 100%;
	max-width: 1120px;
	height: 100vh;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;

  section.form {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
  }
  section.form form {
    margin-top: 100px;
  }
  section.form form h1{
    font-size: 32px;
    margin-bottom: 32px;
  }
  `

export const HeaderText = styled.h1`
width: 50%;
font-size: 45px;
margin-left: 10px;
margin-bottom: 10px;
color: #4b4646;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`


export const StyledForm = styled.form`
  border: 1px solid gray;
  border-radius: 8px;
  padding: 10px;
  width: 50%;
  background: radial-gradient(ellipse at center, #4b4646 0%, #2d2d2d 100%);
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.span`
  margin: 10px;
  font-size: 18px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: #ababab;
`

export const BinaryTextInput = styled.input`
  width: 50%;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid #ababab;
  padding: 10px;
  border-radius: 8px;
  background: #e7e7e7;
  outline: none;
  &:focus {
    border: 1px solid #8d2663;
  }
`

export const DecimalTextInput = styled.input`
  width: 50%;
  font-size: 18px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid #ababab;
  padding: 10px;
  border-radius: 8px;
  background: #e7e7e7;
  outline: none;
`

export const Button = styled.button`
  width: 30%;
  margin-bottom: 10px;
  margin-left: 10px;
  padding: 10px;
  border: 1px solid;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    border: 1px solid #8d2663;
    color: #8d2663;
  }
`