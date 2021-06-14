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
  StepTwoWarningContainer,
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

  const [totalMoney, setTotalMoney] = useState(0);
  const [moneyMultiplierDuo, setMoneyMultiplierDuo] = useState(0);
  const [moneyMultiplierStream, setMoneyMultiplierStream] = useState(0);
  const [moneyMultiplierPriority, setMoneyMultipliePriority] = useState(0);
  const [completionTime, setCompletionTime] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [disabledDiscount, setDisabledDiscount] = useState("none");

  const handleDiscount = () => {
    if (
      validPromo === "endofsplit30" &&
      secondValue >= 10000 &&
      secondValue <= 10138
    ) {
      setTotalMoney(totalMoney - totalMoney * 0.3);
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
  }, [activePriority, totalMoney]);

  useEffect(() => {
    if (activeStream) {
      setMoneyMultiplierStream(totalMoney * 0.15);
    }
    if (!activeStream) {
      setMoneyMultiplierStream(0);
    }
  }, [activeStream, totalMoney]);

  useEffect(() => {
    if (Number(secondValue) < Number(firstValue)) {
      setInvalid("flex");
    }
  }, [secondValue, firstValue]);

  useEffect(() => {
    if (secondValue > 10137 || secondValue < 10000) {
      setDisabledDiscount("flex");
    } else {
      setDisabledDiscount("none");
    }
  }, [secondValue]);
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
      setFirstRankImg(bronze);
    }
    if (firstValue >= 300) {
      setFirstTier("III");
    }
    if (firstValue >= 600) {
      setFirstTier("II");
    }
    if (firstValue >= 900) {
      setFirstTier("I");
    }
    if (firstValue >= 1200) {
      setFirstTier("IV");
      setFirstRankImg(silver);
    }
    if (firstValue >= 1600) {
      setFirstTier("III");
    }
    if (firstValue >= 2000) {
      setFirstTier("II");
    }
    if (firstValue >= 2400) {
      setFirstTier("I");
    }
    if (firstValue >= 2800) {
      setFirstTier("IV");
      setFirstRankImg(gold);
    }
    if (firstValue >= 3300) {
      setFirstTier("III");
    }
    if (firstValue >= 3800) {
      setFirstTier("II");
    }
    if (firstValue >= 4300) {
      setFirstTier("I");
    }
    if (firstValue >= 4800) {
      setFirstTier("IV");
      setFirstRankImg(plat);
    }
    if (firstValue >= 5400) {
      setFirstTier("III");
    }
    if (firstValue >= 6000) {
      setFirstTier("II");
    }
    if (firstValue >= 6600) {
      setFirstTier("I");
    }
    if (firstValue >= 7200) {
      setFirstTier("IV");
      setFirstRankImg(diamond);
    }
    if (firstValue >= 7900) {
      setFirstTier("III");
    }
    if (firstValue >= 8600) {
      setFirstTier("II");
    }
    if (firstValue >= 9300) {
      setFirstTier("I");
    }
    if (firstValue >= 10000) {
      setFirstTier("GOAT");
      setFirstRankImg(masters);
    }
  }, [firstValue]);

  useEffect(() => {
    if (secondValue >= 0) {
      setSecondTier("IV");
      setSecondRankImg(bronze);
    }
    if (secondValue > 300) {
      setSecondTier("III");
    }
    if (secondValue > 600) {
      setSecondTier("II");
    }
    if (secondValue > 900) {
      setSecondTier("I");
    }
    if (secondValue >= 1200) {
      setSecondTier("IV");
      setSecondRankImg(silver);
    }

    if (secondValue > 1600) {
      setSecondTier("III");
    }
    if (secondValue > 2000) {
      setSecondTier("II");
    }
    if (secondValue > 2400) {
      setSecondTier("I");
    }

    if (secondValue >= 2800) {
      setSecondTier("IV");
      setSecondRankImg(gold);
    }
    if (secondValue > 3300) {
      setSecondTier("III");
    }
    if (secondValue > 3800) {
      setSecondTier("II");
    }

    if (secondValue > 4300) {
      setSecondTier("I");
    }

    if (secondValue >= 4800) {
      setSecondTier("IV");
      setSecondRankImg(plat);
    }

    if (secondValue > 5400) {
      setSecondTier("III");
    }
    if (secondValue > 5900) {
    }
    if (secondValue > 6000) {
      setSecondTier("II");
    }

    if (secondValue > 6600) {
      setSecondTier("I");
    }

    if (secondValue >= 7200) {
      setSecondTier("IV");
      setSecondRankImg(diamond);
    }
    if (secondValue > 7900) {
      setSecondTier("III");
    }

    if (secondValue > 8600) {
      setSecondTier("II");
    }

    if (secondValue > 9300) {
      setSecondTier("I");
    }

    if (secondValue >= 10000) {
      setSecondTier("GOAT");
      setSecondRankImg(masters);
    }
  }, [secondValue, firstValue]);

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
  useEffect(() => {
    const prices = [
      0.1,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.25,
      1.875,
      1.875,
      1.875,
      1.875,
      1.875,
      1.875,
      1.875,
      1.875,
      1.875,
      1.875,
      1.875,
      1.875,
      1.875,
      1.875,
      1.875,
      1.875,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      2.5,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      3.125,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      4.64285714286,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
      10.5,
    ];
    const rankMultiplierArray = prices.splice(
      firstValue / 100,
      (secondValue - firstValue) / 100
    );
    const summedMultiplier = rankMultiplierArray.reduce((a, b) => a + b, 0);
    console.log(rankMultiplierArray);
    setTotalMoney(summedMultiplier);
  }, [firstValue, secondValue]);
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
                  onChange={(e) => {
                    setSecondValue(e.target.value);
                    handleDiscount();
                  }}
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
            {" "}
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
