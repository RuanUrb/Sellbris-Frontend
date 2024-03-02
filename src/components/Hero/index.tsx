import React from "react";
import * as S from "./style";
import PrimaryButton from "@/components/Button/PrimaryButton";
import arrow from "@/assets/arrow-button.svg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    console.log('ive been clicked') 
    navigate('/register')
  }
  return (
    <S.Background>
      <S.Container>
        <S.Side>
          <h1>Your #1 Used Goods Marketplace</h1>
          <S.Description>
            <S.Label>
              <p>2000+</p>
              <span>Products</span>
            </S.Label>
            <S.Label>
              <p>100+</p>
              <span>Users</span>
            </S.Label>
          </S.Description>
          <PrimaryButton label="Join us" variant="dark" onClick={handleClick}  icon={arrow} />
        </S.Side>
        <S.HeroImg></S.HeroImg>
      </S.Container>
    </S.Background>
  );
};

export default Hero;
