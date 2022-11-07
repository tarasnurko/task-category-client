import React from "react";
import styled from "styled-components";

import { ContainerVertical } from "../../common/container-vertical";
import { LinkWrapper } from "../../common/link-wrapper";
import { Text } from "../../common/text";
import { Title } from "../../common/title";

const Container = styled.div`
  padding: 5px;
  background-color: #f6f6f6;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
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
