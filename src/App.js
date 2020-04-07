import React, { useState } from 'react';
import { StyledForm, BinaryTextInput, Label, Button, DecimalTextInput, Field, Container, HeaderText } from './styles';

function App() {

  const [binary, setBinary] = useState('');
  const [decimal, setDecimal] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {

    //prevent page from refreshing
    e.preventDefault();

    // Make sure we accept only either 0 or 1
    if (binary.match(/^[0-1]+$/g) === null) {
      setError('Please enter only 0 or 1')
      return
    }

    //reset error
    setError('');

    //Get the binary input, split all characters, convert the string to a number and reverse
    const binaryReversed = binary.split('').map(Number).reverse();

    // input = 1 => output = 1 * (2^0) = 1
    // input = 10 => output = (0 * (2^0)) + (1 * (2^1)) = 2 , so the input needs to be reversed
    //accumulate values and set a result
    const binaryResult = binaryReversed.reduce((acc, cur, idx) => acc + cur * Math.pow(2, idx))

    //setDecimal gets the result
    setDecimal(binaryResult);
  };
  //ask for input of any binary (only 0 and 1 should be recognized) and return a decimal equivalent


  //constraints : Arrays may not be used to contain the binary digits entered by the user
  //Determining the decimal equivalent of a particular binary digit in the sequence must be calculated using a single mathematical function,
  // for example the natural logarithm. It's up to you to figure out which function to use.
  return (

    <Container>
      <HeaderText>Binary to Decimal Converter</HeaderText>

      <StyledForm onSubmit={handleSubmit}>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <br />
        <Field>
          <Label>Binary</Label>
          <div>
            <BinaryTextInput
              autoComplete="off"
              type="text"
              name="binary"
              placeholder="Enter a binary combination"
              value={binary}
              onChange={e => setBinary(e.target.value)}
            />
            <Button type="submit">Convert</Button>
          </div>
        </Field>
        <Field>
          <Label>Decimal</Label>
          <DecimalTextInput
            type="text"
            name="decimal"
            value={decimal}
            disabled
          />
        </Field>
      </StyledForm>
      </Container>

  );
}

export default App;
