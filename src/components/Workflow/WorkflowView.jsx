import React from 'react';
import { WorflowContainer } from './styled';
import { SubTitle, Title } from '../styled/styled';

const WorkflowView = () => {
  return (
    <WorflowContainer>
      <Title style={{ textAlign: 'start' }}>Production Systems</Title>
      <section>
        <SubTitle style={{ textAlign: 'start' }}>Farm Crops</SubTitle>
      </section>
    </WorflowContainer>
  );
};

export default WorkflowView;
