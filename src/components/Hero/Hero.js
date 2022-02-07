import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi! I'm JD <br />
          Welcome to my portfolio
        </SectionTitle>
        <SectionText>
        I am an experienced full stack web developer proficient in building real world applications covering C#, ASP.NET, MySQL, HTML,CSS, Boostrap, Javascript and more.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;