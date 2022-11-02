import React from "react";
import styled from "styled-components";

import { ContainerVertical } from "../../common/container-vertical";
import { LinkWrapper } from "../../common/link-wrapper";
import { Text } from "../../common/text";
import { Title } from "../../common/title";

const Container = styled.div`
  padding: 5px;
  border: 1px solid #571b78;
  border-radius: 6px;
`;

const Component: React.FC<{ name: string; text: string; id: number }> = ({
  name,
  text,
  id,
}) => {
  return (
    <LinkWrapper to={`/projects/${id}`}>
      <Container>
        <ContainerVertical gap={3}>
          <Title>{name}</Title>
          <Text>{text}</Text>
        </ContainerVertical>
      </Container>
    </LinkWrapper>
  );
};

export default Component;
