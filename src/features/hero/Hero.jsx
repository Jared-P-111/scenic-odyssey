import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

//Hero Header

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  margin-top: 100px;
`;

const HeroInnerContainer = styled.div`
  display: flex;
  width: 70vw;
  align-items: center;
  flex-direction: column;
`;

const HeroHeader = styled(motion.h1)`
  font-family: 'Zen Tokyo Zoo', cursive;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 1rem;
  font-size: 5rem;
  color: #e5b3fe;

  @media screen and (max-width: 1300px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;

const HeroParagraph = styled(motion.p)`
  font-size: 3rem;
  font-family: 'Amatic SC', cursive;
  text-align: center;
  color: #e5b3fe;
  width: 70vw;

  @media screen and (max-width: 1300px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const inputSentence = 'We welcome you to Scenic Odyssey';

const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.07,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    textShadow:
      '2px 2px 8px #F72585, -2px -2px 8px #7209B7, 2px 2px 20px #3a0ca3, -2px -2px 20px #4361ee, 2px 2px 40px #4cc9f0',
    scale: 1,
  },
};

const paragraph = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.3,
      duration: 1.5,
    },
  },
};

const Hero = () => {
  return (
    <HeroContainer>
      <HeroInnerContainer>
        <HeroHeader variants={sentence} initial="hidden" animate="visible">
          {inputSentence.split('').map((char, index) => {
            return (
              <motion.span key={char + '-' + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </HeroHeader>
        <HeroParagraph variants={paragraph} initial="hidden" animate="visible" transition={2}>
          We stand for love and nature as we try to bring beautiful souls together through music and
          art. We believe in all genres and all types of art. We encourage all people to come visit
          and help us create community and spread love. Come embark on this emotional journey with
          us.
        </HeroParagraph>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export default Hero;