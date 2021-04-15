import React, { useState, useEffect } from "react";
import {
  ProductContainer,
  ProductWrap,
  StepOneTitle,
  F1,
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
  TotalMoneyCard,
  TotalMoneyHeader,
  DiscountContainer,
  TotalMoney,
} from "./RankedBoostProductElements";

import { Link } from "react-router-dom";
import masters from "../Images/Ranked_Tier6_Master.png";
import diamond from "../Images/Ranked_Tier5_Diamond.png";
import plat from "../Images/Ranked_Tier4_Platinum.png";
import gold from "../Images/Ranked_Tier3_Gold.png";
import silver from "../Images/Ranked_Tier2_Silver.png";
import bronze from "../Images/Ranked_Tier1_Bronze.jpeg";

import { useDispatchCart } from "../Cart/CartHandler";
import CountDown from "../../CountDown/CountDown";

const RankBoostProduct = () => {
  const [firstTier, setFirstTier] = useState("I");
  const [firstRankImg, setFirstRankImg] = useState("");
  const [firstValue, setFirstValue] = useState(1000);
  const [secondValue, setSecondValue] = useState(2000);
  const [secondRankImg, setSecondRankImg] = useState("");
  const [secondTier, setSecondTier] = useState("");

  const [invalid, setInvalid] = useState("none");
  const [validPromo, setValidPromo] = useState(false);
  const [activeDuo, setActiveDuo] = useState(false);
  const [activeStream, setActiveStream] = useState(false);
  const [activePriority, setPriority] = useState(false);
  const [activeOffline, setActiveOffline] = useState(false);
  const [filteredExtras, setFilteredExtras] = useState("");
  const [rankmultiplier, setRankMultiplier] = useState(0);
  const [totalpoints, setTotalPoints] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [moneyMultiplierDuo, setMoneyMultiplierDuo] = useState(0);
  const [moneyMultiplierStream, setMoneyMultiplierStream] = useState(0);
  const [moneyMultiplierPriority, setMoneyMultipliePriority] = useState(0);
  const [completionTime, setCompletionTime] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const handleDiscount = () => {
    if (validPromo === "boostify40") {
      setTotalMoney(totalMoney / 1.4);
      setDisabled(true);
      setOpacity(0.4);
    }
  };

  useEffect(() => {
    if (totalMoney < 0) {
      setTotalMoney(0);
    }
  }, [totalMoney]);
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
    setTotalMoney((totalpoints * rankmultiplier * 0.32) / 100);
  }, [totalpoints, rankmultiplier, firstValue]);

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
    if (secondValue > 8100) {
      setRankMultiplier(5.3);
    }
    if (secondValue > 8300) {
      setRankMultiplier(5.6);
    }
    if (secondValue > 8500) {
      setRankMultiplier(5.889130435);
    }
    if (secondValue > 8600) {
      setSecondTier("II");
      setRankMultiplier(6.0);
    }
    if (secondValue > 8700) {
      setRankMultiplier(6.4);
    }
    if (secondValue > 8800) {
      setRankMultiplier(6.8);
    }
    if (secondValue > 8900) {
      setRankMultiplier(7.2);
    }
    if (secondValue > 9100) {
      setRankMultiplier(7.3);
    }
    if (secondValue > 9200) {
      setRankMultiplier(7.8);
    }
    if (secondValue > 9300) {
      setRankMultiplier(8.0);
      setSecondTier("I");
    }
    if (secondValue > 9400) {
      setRankMultiplier(8.5);
    }
    if (secondValue > 9500) {
      setRankMultiplier(9.0);
    }
    if (secondValue > 9600) {
      setRankMultiplier(9.5);
    }
    if (secondValue > 9700) {
      setRankMultiplier(9.7);
    }

    if (secondValue > 9800) {
      setRankMultiplier(10);
    }
    if (secondValue > 9850) {
      setRankMultiplier(10.3);
    }
    if (secondValue > 9900) {
      setRankMultiplier(10.6);
    }
    if (secondValue > 9930) {
      setRankMultiplier(10.8);
    }
    if (secondValue > 9960) {
      setRankMultiplier(11.1);
    }
    if (secondValue > 9980) {
      setRankMultiplier(11.3);
    }
    if (secondValue >= 10000) {
      setSecondTier("GOAT");
      setRankMultiplier(11.53908046);
    }
    if (secondValue >= 10500) {
      setRankMultiplier(11.93908046);
    }
    if (secondValue >= 11000) {
      setRankMultiplier(12.43908046);
    }
    if (secondValue > 11500) {
      setRankMultiplier(12.9);
    }
    if (secondValue > 12000) {
      setRankMultiplier(13.4);
    }
    if (secondValue > 12500) {
      setRankMultiplier(13.7);
    }
    if (secondValue > 13000) {
      setRankMultiplier(14);
    }
    if (secondValue > 13500) {
      setRankMultiplier(14.5);
    }
    if (secondValue > 14000) {
      setRankMultiplier(15);
    }
    if (secondValue > 14300) {
      setRankMultiplier(15.345839748);
    }
    if (secondValue > 14600) {
      setRankMultiplier(15.721039485);
    }
    if (secondValue > 15000) {
      setRankMultiplier(16.0927747);
    }
    if (secondValue > 15500) {
      setRankMultiplier(16.472974);
    }
    if (secondValue > 16000) {
      setRankMultiplier(16.8374957);
    }
    if (secondValue > 16500) {
      setRankMultiplier(17.2038745);
    }
    if (secondValue > 17000) {
      setRankMultiplier(17.59388494);
    }
    if (secondValue > 17500) {
      setRankMultiplier(17.9304085);
    }
    if (secondValue > 17800) {
      setRankMultiplier(18.29374893);
    }
    if (secondValue > 18000) {
      setRankMultiplier(18.68938859);
    }
    if (secondValue > 18250) {
      setRankMultiplier(18.9982384);
    }
    if (secondValue > 18500) {
      setRankMultiplier(19.38478);
    }
    if (secondValue > 18700) {
      setRankMultiplier(19.7439342);
    }
    if (secondValue > 19000) {
      setRankMultiplier(20.38984);
    }
    if (secondValue > 19300) {
      setRankMultiplier(20.69039);
    }
    if (secondValue > 19600) {
      setRankMultiplier(21.00092748);
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

  useEffect(() => {
    if (firstValue) {
      setCompletionTime("48 hours");
    }
    if (secondValue > 11000) {
      setCompletionTime("15 days");
    }
  }, [firstValue, secondValue]);

  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  let extrasArr = {
    DuoQueue: activeDuo,
    Offline: activeOffline,
    Stream: activeStream,
    priority: activePriority,
  };
  useEffect(() => {
    let extrasArr2 = {
      DuoQueue: activeDuo,
      Offline: activeOffline,
      Stream: activeStream,
      priority: activePriority,
    };
    setFilteredExtras(
      Object.fromEntries(
        Object.entries(extrasArr2).filter(([key, value]) => value === true)
      )
    );
  }, [activeDuo, activeOffline, activePriority, activeStream]);

  return (
    <>
      <ProductContainer>
        <div></div>
        <ProductWrap>
          <Step2Container>
            <StepOneTitle>
              <F1></F1> Select Ranked Points to Boost
            </StepOneTitle>
            <StepOneSLidersWrap>
              <InitialRank>
                <h2 id="current-rank">Set your current RP</h2>
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
              <F2></F2>
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
              <F3></F3> Check your total
            </TotalTitle>
            <TotalMoneyCard>
              <TotalMoneyHeader>
                Your Order: <br></br>{" "}
                <span>
                  {firstValue}RP to {secondValue}RP
                </span>
                <br></br> Average Completion Time: <br></br>
                <span>{completionTime}</span>
              </TotalMoneyHeader>
              <DiscountContainer>PromoCode</DiscountContainer>
              <InputTyped
                style={{ marginTop: "0px" }}
                fontSize="20px"
                height="50px"
                width="250px"
                onChange={(e) => {
                  setValidPromo(e.target.value.toLowerCase());
                }}
              ></InputTyped>
              <div class="button_cont" align="center">
                <button
                  className="example_c"
                  disabled={disabled}
                  style={{ opacity: opacity }}
                >
                  {" "}
                  Apply
                </button>
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
              </TotalMoney>

              <div class="button_cont" align="center">
                <Link to="./cart">
                  <button
                    onClick={() =>
                      addToCart({
                        title: "Rank Boost",
                        price: Number(
                          totalMoney +
                            moneyMultiplierDuo +
                            moneyMultiplierStream +
                            moneyMultiplierPriority
                        ).toFixed(2),
                        firstValue: firstValue,
                        secondValue: secondValue,
                        icon: secondRankImg,
                        extrasArr: Object.entries(extrasArr),
                        filteredExtras: Object.keys(filteredExtras),
                      })
                    }
                    class="example_d"
                    href="add-website-here"
                    target="_blank"
                    rel="nofollow noopener"
                  >
                    Add to cart
                  </button>
                </Link>
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
