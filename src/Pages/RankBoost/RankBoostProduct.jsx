import React, { useState, useEffect } from "react";
import {
  ProductContainer,
  ProductWrap,
  StepOneContainer,
  StepOneTitle,
  F1,
  PS,
  XBX,
  PC,
  StepOneIcons,
  Step2Container,
  StepOneSLidersWrap,
  F2,
  InitialRank,
  DesiredRankBoost,
  Slider,
  InputTyped,
  StepTwoWarning,
  ExtrasTitle,
  F3,
  ExtrasContainer,
  ExtrasOptions,
  ExtraIconButtonWrap,
  StepTwoWarningContainer,
  ExtraCheckBox,
  IconDuo,
  IconDescWrapper,
  IconStream,
  IconSpeed,
  IconOffline,
  TotalContainer,
  TotalTitle,
  F4,
  TotalMoneyCard,
  TotalMoneyHeader,
  DiscountContainer,
  TotalMoney,
} from "./RankedBoostProductElements";
import masters from "../Images/Ranked_Tier6_Master.png";
import diamond from "../Images/Ranked_Tier5_Diamond.png";
import plat from "../Images/Ranked_Tier4_Platinum.png";
import gold from "../Images/Ranked_Tier3_Gold.png";
import silver from "../Images/Ranked_Tier2_Silver.png";
import bronze from "../Images/Ranked_Tier1_Bronze.jpeg";

/*  const [psSelected, setPSSelected] = useState(false);
  const [xboxSelected, setXboxSelected] = useState(false);
  const PSclick = () => {
    setPSSelected(!psSelected);
    setXboxSelected(!xboxSelected);
  }; */
// const XboxClick = () => {
//   setXboxSelected(!xboxSelected);
//   setPSSelected(!psSelected);
// };

const RankBoostProduct = () => {
  const [firstTier, setFirstTier] = useState("I");
  const [firstRankImg, setFirstRankImg] = useState("");
  const [firstValue, setFirstValue] = useState(1000);
  const [secondValue, setSecondValue] = useState(2000);
  const [secondRankImg, setSecondRankImg] = useState("");
  const [secondTier, setSecondTier] = useState("");
  const [Pscolor, setColor] = useState("");
  const [invalid, setInvalid] = useState("none");
  const [validPromo, setValidPromo] = useState(false);
  const [activeDuo, setActiveDuo] = useState(false);
  const [activeStream, setActiveStream] = useState(false);
  const [activePriority, setPriority] = useState(false);
  const [activeOffline, setActiveOffline] = useState(false);

  const [rankmultiplier, setRankMultiplier] = useState(0);
  const [totalpoints, setTotalPoints] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [moneyMultiplierDuo, setMoneyMultiplierDuo] = useState(0);
  const [moneyMultiplierStream, setMoneyMultiplierStream] = useState(0);
  const [moneyMultiplierPriority, setMoneyMultipliePriority] = useState(0);

  const psCLick = () => {
    setColor({
      color: "#003087",
    });
  };
  useEffect(() => {
    if (totalMoney < 0) {
      setTotalMoney(0);
    }
  });
  useEffect(() => {
    if (isNaN(firstValue)) {
      setFirstValue(4800);
    }
  }, [firstValue]);
  useEffect(() => {
    if (isNaN(secondValue)) {
      setSecondValue(10000);
    }
  }, [secondValue]);
  useEffect(() => {
    setTotalMoney((totalpoints * rankmultiplier * 0.9) / 100);
  }, [totalpoints, rankmultiplier]);

  useEffect(() => {
    if (activeDuo) {
      setMoneyMultiplierDuo(totalMoney * 0.75);
    }
    if (!activeDuo) {
      setMoneyMultiplierDuo(0);
    }
  }, [activeDuo, totalMoney]);

  useEffect(() => {
    if (activePriority) {
      setMoneyMultipliePriority(totalMoney * 0.25);
    }
    if (!activePriority) {
      setMoneyMultipliePriority(0);
    }
  }, [activePriority]);

  useEffect(() => {
    if (activeStream) {
      setMoneyMultiplierStream(totalMoney * 0.15);
    }
    if (!activeStream) {
      setMoneyMultiplierStream(0);
    }
  }, [activeStream]);

  useEffect(() => {
    setTotalPoints(secondValue - firstValue);
  }, [firstValue, secondValue]);

  useEffect(() => {
    if (Number(secondValue) < Number(firstValue)) {
      setInvalid("flex");
    }
  }, [secondValue, firstValue]);
  useEffect(() => {
    if (Number(secondValue) > Number(firstValue)) {
      setInvalid("none");
    }
  }, [secondValue, firstValue]);

  useEffect(() => {
    if (firstValue > 19900) {
      setFirstValue(19900);
    }
  }, [firstValue]);

  useEffect(() => {
    if (secondValue > 20000) {
      setSecondValue(20000);
    }
  }, [secondValue]);

  useEffect(() => {
    if (firstValue >= 0) {
      setFirstTier("IV");
    }
    if (firstValue > 300) {
      setFirstTier("III");
    }
    if (firstValue > 600) {
      setFirstTier("II");
    }
    if (firstValue > 900) {
      setFirstTier("I");
    }
    if (firstValue >= 1200) {
      setFirstTier("IV");
    }
    if (firstValue > 1600) {
      setFirstTier("III");
    }
    if (firstValue > 2000) {
      setFirstTier("II");
    }
    if (firstValue > 2400) {
      setFirstTier("I");
    }
    if (firstValue >= 2800) {
      setFirstTier("IV");
    }
    if (firstValue > 3300) {
      setFirstTier("III");
    }
    if (firstValue > 3800) {
      setFirstTier("II");
    }
    if (firstValue > 4300) {
      setFirstTier("I");
    }
    if (firstValue >= 4800) {
      setFirstTier("IV");
    }
    if (firstValue > 5400) {
      setFirstTier("III");
    }
    if (firstValue > 6000) {
      setFirstTier("II");
    }
    if (firstValue > 6600) {
      setFirstTier("I");
    }
    if (firstValue >= 7200) {
      setFirstTier("IV");
    }
    if (firstValue > 7900) {
      setFirstTier("III");
    }
    if (firstValue > 8600) {
      setFirstTier("II");
    }
    if (firstValue > 9300) {
      setFirstTier("I");
    }
    if (firstValue >= 10000) {
      setFirstTier("GOAT");
    }
  }, [firstValue]);

  useEffect(() => {
    if (secondValue >= 0) {
      setSecondTier("IV");
      setRankMultiplier(2.1);
    }
    if (secondValue > 300) {
      setSecondTier("III");
    }
    if (secondValue > 600) {
      setSecondTier("II");
    }
    if (secondValue > 900) {
      setSecondTier("I");
      setRankMultiplier(2.325);
    }
    if (secondValue >= 1200) {
      setSecondTier("IV");
      setRankMultiplier(2.3625);
    }
    if (secondValue >= 1500) {
    }
    if (secondValue > 1600) {
      setSecondTier("III");
    }
    if (secondValue > 2000) {
      setSecondTier("II");
    }
    if (secondValue > 2400) {
      setSecondTier("I");
      setRankMultiplier(2.533333333);
    }
    if (secondValue > 2700) {
      setRankMultiplier(2.735714286);
    }
    if (secondValue >= 2800) {
      setSecondTier("IV");
    }
    if (secondValue > 3300) {
      setSecondTier("III");
    }
    if (secondValue > 3800) {
      setSecondTier("II");
    }
    if (secondValue > 4200) {
      setRankMultiplier(2.987234043);
    }
    if (secondValue > 4300) {
      setSecondTier("I");
    }
    if (secondValue > 4700) {
      setRankMultiplier(3.355932203);
    }
    if (secondValue >= 4800) {
      setSecondTier("IV");
    }
    if (secondValue > 5400) {
      setSecondTier("III");
    }
    if (secondValue > 5900) {
      setRankMultiplier(3.655384615);
    }
    if (secondValue > 6000) {
      setSecondTier("II");
    }
    if (secondValue > 6500) {
      setRankMultiplier(3.9);
    }
    if (secondValue > 6600) {
      setSecondTier("I");
    }
    if (secondValue >= 7200) {
      setSecondTier("IV");
      setRankMultiplier(4.440506329);
    }
    if (secondValue > 7900) {
      setSecondTier("III");
      setRankMultiplier(4.974117647);
    }
    if (secondValue > 8500) {
      setRankMultiplier(5.889130435);
    }
    if (secondValue > 8600) {
      setSecondTier("II");
    }
    if (secondValue > 9300) {
      setRankMultiplier(10.53908046);
    }
    if (firstValue >= 7100) {
      setRankMultiplier(14.53908046);
    }
    if (secondValue > 9300) {
      setSecondTier("I");
    }
    if (secondValue >= 10000) {
      setSecondTier("GOAT");
    }
  }, [secondValue, firstValue]);

  useEffect(() => {
    if (firstValue >= 0) {
      setFirstRankImg(bronze);
    }
    if (firstValue >= 1200) {
      setFirstRankImg(silver);
    }
    if (firstValue >= 2800) {
      setFirstRankImg(gold);
    }
    if (firstValue >= 4800) {
      setFirstRankImg(plat);
    }
    if (firstValue >= 7200) {
      setFirstRankImg(diamond);
    }
    if (firstValue >= 10000) {
      setFirstRankImg(masters);
    }
  }, [firstValue]);

  useEffect(() => {
    if (secondValue >= 0) {
      setSecondRankImg(bronze);
    }
    if (secondValue >= 1200) {
      setSecondRankImg(silver);
    }
    if (secondValue >= 2800) {
      setSecondRankImg(gold);
    }
    if (secondValue >= 4800) {
      setSecondRankImg(plat);
    }
    if (secondValue >= 7200) {
      setSecondRankImg(diamond);
    }
    if (secondValue >= 10000) {
      setSecondRankImg(masters);
    }
  }, [secondValue]);

  return (
    <>
      <ProductContainer>
        <div></div>
        <ProductWrap>
          <StepOneContainer>
            <StepOneTitle>
              <F1></F1> Choose Your Platform
            </StepOneTitle>
            <StepOneIcons>
              <PS onClick={psCLick} style={{ color: Pscolor.color }}></PS>
              <div className="pcIcon">
                <p> currently unavailable</p>
                <XBX></XBX>
              </div>
              <div className="pcIcon">
                <p> currently unavailable</p>
                <PC></PC>
              </div>
            </StepOneIcons>
          </StepOneContainer>

          <Step2Container>
            <StepOneTitle>
              <F2></F2> Select Ranked Points to Boost
            </StepOneTitle>
            <StepOneSLidersWrap>
              <InitialRank>
                <h2 id="current-rank">Set Your current RP</h2>
                <img src={firstRankImg} className="rank" alt="rank"></img>

                <p id="tier">{firstTier}</p>
                <Slider
                  value={firstValue}
                  onChange={(e) => setFirstValue(e.target.value)}
                ></Slider>
                <InputTyped
                  fontSize="80px"
                  height="100px"
                  width="300px"
                  value={firstValue}
                  onChange={(e) => setFirstValue(e.target.value)}
                ></InputTyped>
                <p style={{ textAlign: "center", fontSize: "45.23px" }}>RP</p>
              </InitialRank>
              <DesiredRankBoost>
                {" "}
                <h2 id="current-rank">Set your desired RP</h2>
                <img src={secondRankImg} className="rank" alt="rank"></img>
                <p id="tier">{secondTier}</p>
                <Slider
                  value={secondValue}
                  onChange={(e) => setSecondValue(e.target.value)}
                ></Slider>
                <InputTyped
                  fontSize="80px"
                  height="100px"
                  width="300px"
                  value={secondValue}
                  onChange={(e) => setSecondValue(e.target.value)}
                ></InputTyped>
                <p style={{ textAlign: "center", fontSize: "45.23px" }}>RP</p>
              </DesiredRankBoost>
            </StepOneSLidersWrap>
            <StepTwoWarningContainer style={{ display: invalid }}>
              Desired Rank May Not be Less Than Current Rank
              <StepTwoWarning>
                <i
                  className="fa fa-times"
                  onClick={() => setInvalid("none")}
                ></i>
              </StepTwoWarning>
            </StepTwoWarningContainer>
          </Step2Container>

          <ExtrasContainer>
            <ExtrasTitle>
              <F3 />
              Choose additional services
            </ExtrasTitle>
            <ExtrasOptions>
              <ExtraIconButtonWrap>
                <IconDescWrapper>
                  <IconOffline></IconOffline>
                  <ExtraCheckBox
                    onClick={() => setActiveOffline(!activeOffline)}
                  />
                  <p className="ExtraDesc">Appear offline</p>
                  <p className="ExtraDesc"> FREE</p>
                </IconDescWrapper>
              </ExtraIconButtonWrap>
              <ExtraIconButtonWrap>
                <IconDescWrapper>
                  <IconDuo></IconDuo>
                  <ExtraCheckBox onClick={() => setActiveDuo(!activeDuo)} />
                  <p className="ExtraDesc">Duo-Queue </p>
                  <p className="ExtraDesc"> +75%</p>
                </IconDescWrapper>
              </ExtraIconButtonWrap>
              <ExtraIconButtonWrap>
                <IconDescWrapper>
                  <IconStream />
                  <ExtraCheckBox
                    onClick={() => setActiveStream(!activeStream)}
                  />
                  <p className="ExtraDesc">On Stream</p>
                  <p className="ExtraDesc"> +15%</p>
                </IconDescWrapper>
              </ExtraIconButtonWrap>
              <ExtraIconButtonWrap>
                <IconDescWrapper>
                  <IconSpeed></IconSpeed>
                  <ExtraCheckBox onClick={() => setPriority(!activePriority)} />
                  <p className="ExtraDesc">Boost-Priority</p>
                  <p className="ExtraDesc"> +25%</p>
                </IconDescWrapper>
              </ExtraIconButtonWrap>
            </ExtrasOptions>
          </ExtrasContainer>

          <TotalContainer>
            <TotalTitle>
              <F4></F4>Check your total
            </TotalTitle>
            <TotalMoneyCard>
              <TotalMoneyHeader>
                Your Order: <br></br>{" "}
                <span>
                  {firstValue}RP to {secondValue}RP
                </span>
                <br></br> Average Completion Time: <br></br>
                <span>COMPLETION</span>
              </TotalMoneyHeader>
              <DiscountContainer>PromoCode</DiscountContainer>
              <InputTyped
                style={{ marginTop: "0px" }}
                fontSize="20px"
                height="50px"
                width="250px"
              ></InputTyped>
              <div class="button_cont" align="center">
                <button className="example_c"> Apply</button>
              </div>
              <DiscountContainer>Total</DiscountContainer>
              <TotalMoney>
                <span className="totalMoney">
                  {(
                    totalMoney +
                    moneyMultiplierDuo +
                    moneyMultiplierStream +
                    moneyMultiplierPriority
                  ).toFixed(2)}
                  {"$"}
                </span>
                <label class="dropdown">
                  <div class="dd-button">Dropdown</div>
                  <input type="checkbox" class="dd-input" id="test"></input>
                  <ul class="dd-menu">
                    <li>USD</li>
                    <li>EUR</li>
                    <li>RUPEES</li>
                    <li class="divider"></li>
                  </ul>
                </label>
              </TotalMoney>
              <div class="button_cont" align="center">
                <a
                  class="example_d"
                  href="add-website-here"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  Checkout
                </a>
              </div>
            </TotalMoneyCard>
          </TotalContainer>
        </ProductWrap>

        <div></div>
      </ProductContainer>
    </>
  );
};

export default RankBoostProduct;
