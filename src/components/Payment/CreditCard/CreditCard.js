import React, { useState } from 'react';
import styled from 'styled-components';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default function CreditCard() {
  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focused: '',
  });

  function handleInputFocus(e) {
    setCardData({ ...cardData, focused: e.target.name });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;

    setCardData({ ...cardData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { name, number, expiry, cvc, focused } = cardData;

  return (
    <Container className="Card">
      <Cards number={number} name={name} expiry={expiry} cvc={cvc} focused={focused} />
      <form onSubmit={handleSubmit}>
        <InputsContainer>
          <StyledInput
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <small>E.g.: 49..., 51..., 36..., 37...</small>
          <StyledInput
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <InputSubcontainer>
            <ExpiryInput
              type="text"
              name="expiry"
              placeholder="Valid Thru"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
            <CvcInput type="tel" name="cvc" placeholder="CVC" onChange={handleInputChange} onFocus={handleInputFocus} />
          </InputSubcontainer>
        </InputsContainer>
        <button type="submit">FINALIZAR PAGAMENTO</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  max-width: 706px;
  height: 225px;
  display: flex;
  padding-top: 20px;
  form {
    width: 100%;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  height: 185px;
  input {
    height: 42px;
    border: 0.5px solid #e0e0e0;
    border-radius: 5px;
    padding-left: 5px;
    outline: none;
    &::placeholder {
      font: 400 18px 'Roboto', sans-serif;
      color: #8e8e8e;
    }
  }
  small {
    font: 400 15px 'Roboto', sans-serif;
    color: #8e8e8e;
    margin-top: 7px;
    margin-bottom: 15px;
  }
`;

const StyledInput = styled.input`
  width: 95%;
`;

const InputSubcontainer = styled.div`
  display: flex;
  gap: 5%;
  margin-top: 18px;
`;

const ExpiryInput = styled.input`
  width: 65%;
`;
const CvcInput = styled.input`
  width: 25%;
`;
