import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "Flutter/Dart", text: 'Expert'},
  { number: "Java/Kotlin", text: 'Intermediate', },
  { number: "Python", text: 'Intermediate', },
  { number: "Django", text: 'Intermediate', },
  { number: "Flask", text: 'Intermediate', },
  { number: "C++", text: 'Intermediate', },
];

const Acomplishments = () => (
  <Section id="skills">
    <SectionTitle>Skills</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
