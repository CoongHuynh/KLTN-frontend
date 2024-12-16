import styled from "styled-components";

export const PromoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
`;

export const PromoContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const PromoText = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 8px;
  max-width: 50%;
  margin-left: 20px;
`;

export const PromoTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const PromoButton = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #2ccf6d;
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #28b35d;
  }
`;
