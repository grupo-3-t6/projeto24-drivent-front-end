import styled from 'styled-components';

import ConfirmButton from '../../layouts/ConfirmButton';
import Subtitle from '../../layouts/Subtitle';

export default function OnlineOrderSummary({ finalPrice, recieve }) {
  return (
    <Container>
      <Subtitle>Fechado! O total ficou em <strong>R$ {finalPrice}</strong>. Agora é só confirmar:</Subtitle>
      <ConfirmButton onClick = {recieve} text = 'RESERVAR INGRESSO'/> 
    </Container> 
  );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
