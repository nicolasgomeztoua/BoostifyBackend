import styled from "styled-components";

import { Filter1 } from "@styled-icons/material/Filter1";
import { Filter2 } from "@styled-icons/material/Filter2";
import { Filter3 } from "@styled-icons/material/Filter3";
import { Filter4 } from "@styled-icons/material/Filter4";
import { People } from "@styled-icons/ionicons-outline/People";
import { LiveTv } from "@styled-icons/material-twotone/LiveTv";
import { Speed } from "@styled-icons/material-twotone/Speed";
import { EyeSlash } from "@styled-icons/bootstrap/EyeSlash";
export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;

  width: auto;
  height: 100%;
  margin-bottom: 50px;
  margin-top: 50px;
  border: 10px solid #e43403;
  margin-right: 100px;
  margin-left: 100px;

  border-radius: 100px;
  @media (max-width: 1030px) {
    grid-template-columns: 0fr 1fr 0fr;
    margin-right: 0;
    margin-left: 0;
    width: 97vw;
    height: 0%;
  }
`;
export const ProductWrap = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-rows: 1fr 0.5fr 0.5fr 0.3fr;
  background-color: #fdfef9;
  height: auto;

  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  @media (max-width: 1381px) {
    padding: 5px;
  }
  @media (max-width: 1317px) {
  }
  @media (max-width: 811px) {
    width: 92vw;
  }
  @media (max-width: 580px) {
    width: 92vw;
  }
  @media (max-width: 500px) {
    width: 92vw;
  }
  @media (max-width: 454px) {
    height: 4100px;
    width: 90vw;

    width: 92vw;
  }
  @media (max-width: 420px) {
    width: 90vw;
  }
`;

export const StepOneTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #111;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 45.23px;
  font-weight: 700;
  line-height: 48px;

  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 415px) {
    height: 100px;
    margin-top: 100px;
    margin-bottom: 50px;
    max-width: 90vw;
    font-size: 31.23px;
  }
`;

export const F1 = styled(Filter1)`
  height: 75px;
  color: #e43403;
  margin-right: 15px;
  @media (max-width: 410px) {
    margin-right: 0px;
    margin-left: 15px;
  }
`;

export const Step2Container = styled.div`
  display: grid;

  grid-template-rows: 1fr;
  @media (max-width: 810px) {
    height: auto;

    justify-content: flex-start;
  }
`;
export const StepOneSLidersWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 810px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: 1600px;
  }
`;
export const F2 = styled(Filter2)`
  height: 75px;
  color: #e43403;
  margin-right: 15px;
  @media (max-width: 410px) {
    margin-right: 0px;
    margin-left: 15px;
  }
`;
export const InitialRank = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
  height: 700px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  @media (max-width: 810px) {
    width: 100%;

    max-width: 80vw;
    justify-self: center;
    margin-right: 0px;
    height: 700px;
  }
`;
export const DesiredRankBoost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  height: 700px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  @media (max-width: 810px) {
    width: 100%;
    margin-bottom: 50px;
    max-width: 80vw;
    justify-self: center;
    margin-left: 0px;
    height: 700px;
  }
`;
export const Slider = styled.input.attrs({
  type: "range",
  name: "points",
  min: "0",
  max: "20000",
})`
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  height: 20px;
  width: 300px;
  border-radius: 40px;
  background: ${(props) =>
    `linear-gradient(to right, #e43403 0%, #ff9800 ${
      props.value / 200
    }%, #fff ${props.value / 200}%, #fff 100%);`};
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 1);
  }

  ::-moz-range-thumb {
    width: 24px;
    height: 24px;
    -moz-appearance: none;
    background-image: radial-gradient(circle, #f7f7fc 40%, #ff9800 45%);
    border-radius: 50%;
    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 400px) {
    width: 150px;
  }
`;

export const InputTyped = styled.input.attrs({
  maxLength: "10",
})`
  display: block;
  margin: 10px auto;
  color: black;
  height: ${(props) => props.height};
  border: 4px solid #e43403;
  border-radius: 50px;
  padding-left: 30px;
  margin-top: 30px;
  width: ${(props) => props.width};
  background: repeating-linear-gradient(
      90deg,
      white 0,
      white 1ch,
      transparent 0,
      transparent 1ch
    )
    0 100% / 5ch 2px no-repeat;
  font-size: ${(props) => props.fontSize};
  letter-spacing: 0ch;

  &:focus {
    outline: none;
    color: grey;
  }
  @media (max-width: 376px) {
    width: 200px;
    font-size: 50px;
  }
`;
export const F3 = styled(Filter3)`
  height: 75px;
  color: #e43403;
  margin-right: 15px;
  @media (max-width: 410px) {
    margin-right: 0px;
    margin-left: 15px;
  }
`;

export const StepTwoWarningContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  background-color: #f44336; /* Red */
  color: white;
`;
export const StepTwoWarning = styled.span`
  margin-left: auto;

  color: white;
  font-weight: bold;

  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
  }
`;

export const ExtrasContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
export const ExtrasTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  height: 100px;
  color: #111;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 45.23px;
  font-weight: 700;
  line-height: 48px;
  margin: 0 0 24px;

  text-align: center;
  text-transform: uppercase;
  @media (max-width: 415px) {
    height: 100px;
    margin-top: 0px;
    margin-bottom: 50px;
    max-width: 90vw;
    font-size: 31.23px;
  }
`;
export const ExtrasOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: flex-end;
  height: 320px;
  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 420px) {
    transform: scale(0.8);

    width: 95vw;
  }
`;

export const ExtraIconButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 120px;
`;
export const ExtraCheckBox = styled.input.attrs({
  type: "checkbox",
  name: "extra",
})`
  position: relative;
  height: 40px;
  width: 80px;
  display: ${(props) => (props.display ? props.display : "flex")};
  -webkit-appearance: none;
  background: #c6c6c6;
  outline: none;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  &:checked {
    background: #e43403;
  }
  &:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border: 0.2px solid #c6c6c6;
    border-radius: 20px;
    bottom: 0px;
    left: 0px;
    transform: scale(1.1);
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
  &:checked:before {
    left: 40px;
  }
`;

export const IconDescWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;
export const IconOffline = styled(EyeSlash)`
  height: 55px;
  width: 80px;
  color: #e43403;
  margin-bottom: 3px;
`;
export const IconDuo = styled(People)`
  height: 55px;
  width: 80px;
  color: #e43403;
  margin-bottom: 3px;
`;
export const IconStream = styled(LiveTv)`
  height: 55px;
  width: 80px;
  color: #e43403;
  margin-bottom: 3px;
`;

export const IconSpeed = styled(Speed)`
  height: 55px;
  width: 80px;
  color: #e43403;
  margin-bottom: 3px;
`;
export const TotalContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  align-items: flex-start;
  height: 300px;

  @media (max-width: 420px) {
    height: 400px;
  }
`;
export const TotalTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #111;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 45.23px;
  font-weight: 700;
  line-height: 48px;
  margin: 0 0 24px;
  height: 100px;

  text-align: center;
  text-transform: uppercase;
  @media (max-width: 420px) {
    font-size: 22.99px;
    height: 150px;
    width: 89vw;
    margin-top: 50px;
    margin-bottom: 0;
  }
`;
export const F4 = styled(Filter4)`
  height: 75px;
  color: #e43403;
  margin-right: 15px;
  @media (max-width: 410px) {
    margin-right: 0px;
    margin-left: 15px;
  }
`;
export const TotalMoneyCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.2fr 0.2fr 0.2fr 0.4fr;
  box-sizing: border-box;
  color: rgb(44, 44, 44);

  justify-self: center;
  align-self: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 360px;
  @media (max-width: 415px) {
    width: 90vw;
    margin-top: 0px;
    justify-self: flex-start;
  }
`;

export const TotalMoneyHeader = styled.h1`
  background-color: rgb(236, 236, 236);
  border-bottom-color: rgb(221, 221, 221);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-top-color: rgb(221, 221, 221);
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 11px 8px -10px inset,
    rgba(0, 0, 0, 0.05) 0px -11px 8px -10px inset;
  box-sizing: border-box;
  color: rgb(44, 44, 44);
  font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
  font-size: 17.6px;
  font-weight: 300;
  line-height: 26.4px;

  overflow-wrap: break-word;
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
  @media (max-width: 415px) {
    width: 80vw;
  }
`;
export const DiscountContainer = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  align-self: flex-start;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  &:before {
    margin-right: 0.5em;
    content: "";
    flex: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  &:after {
    content: "";
    flex: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const TotalMoney = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  color: rgb(44, 44, 44);
  display: flex;
  flex-wrap: wrap;
  font-family: "Saira", "Helvetica Neue", Arial, sans-serif;
  font-size: 17.6px;
  font-weight: 300;
  justify-content: center;
  line-height: 26.4px;
  overflow-wrap: break-word;
  text-align: center;
`;
export const CurrencyBTN = styled.button``;
