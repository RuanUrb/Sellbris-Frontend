import styled from 'styled-components';
import arrow from '@/assets/custom-arrow.svg'

export const Container = styled.section`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  gap:40px;
  margin-bottom: 8rem;

  @media (max-width:1024px) {
    margin-bottom: 6rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const Side = styled.div`
  position: relative;
  
  &::after {
    display: block;
    position: absolute;
    rotate: 100deg;
    top: -40px;
    right: -50px;
    content: '';
    background-image: url(${arrow});
    width: 73px;
    height: 24px;
  }

  h2 {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    color: ${({ theme }) => theme.colors.black100};
    max-width: 10ch;
    margin-bottom: .75rem;
  }

  p {
    max-width: 20ch;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.gray70};
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin-bottom: 1.5rem;
  }

  @media (max-width:1024px) {

    &::after {
      display: none;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
    p, h2 {
      margin-bottom: 0rem;
    }
  }

  @media (max-width:768px) {
    flex-wrap: wrap;
    h2 {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      line-height: 2rem;
    }

    p {
      font-size: ${({ theme }) => theme.fontSizes.extraSmall};
    }
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  overflow-x: auto;
  margin: 0 40px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    // Retain the current behavior (flex and horizontal scroll) for smaller devices
    display: flex;
    overflow-x: auto;
    gap: 80px;
  }
`;

export const Card = styled.div`
display: flex;
flex-direction: column;
flex: 1;

img {
  width: 200px; /* Ensures the image takes up the full width of its container */
  height: 200px; /* Set a fixed height for the squared image */
  object-fit: cover; /* Maintain aspect ratio while covering the container */
  margin-bottom: .75rem;
}

  h3 {
    font-weight: 400;
    max-width: 20ch;
    font-size: ${({ theme }) => theme.fontSizes.base};
    color:${({ theme }) => theme.colors.black100};
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    margin-bottom: .5rem;
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.gray60};
    flex: 1;
  }
`
