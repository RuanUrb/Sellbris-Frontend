import React from "react";
import * as S from "./style";
import aboutCardsData from "@/utils/aboutCardsData";

const AboutUs = () => {
  return (
    <S.Container>
      <h2>About us</h2>
      <p>Welcome to Sellbris Marketplace! Discover a diverse range of items for a sustainable shopping experience. Buy and sell with confidence in our secure community. Your next find awaits at a click!</p>
      <S.Cards>
        {aboutCardsData.map((card) => (
          <S.Card key={card.title}>
            <S.ImgWrapper>
              <img src={card.imgSrc} alt={card.imgAlt} />
            </S.ImgWrapper>
            <S.CardTitle>{card.title}</S.CardTitle>
            <S.CardText>{card.text}</S.CardText>
          </S.Card>
        ))}
      </S.Cards>
    </S.Container>
  );
};

export default AboutUs;
