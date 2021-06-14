import React, { useState, useEffect } from "react";
import {
  BadgesTitle,
  BadgesContainer,
  BadgesSectionTitle,
  BadgesWrap,
  BadgesSelectionContainers,
  TextIconCheckBox,
  BadgeDesc,
  TotalContainer,
  TotalTitle,
  TotalMoneyCard,
  TotalMoneyHeader,
  DiscountContainer,
  TotalMoney,
  InputTyped,
  Searchbar,
  totalBadgesContainer,
  StepTwoWarningContainer,
  StepTwoWarning,
} from "./BadgesElements";

import {
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
} from "../RankBoost/RankedBoostProductElements";
import { Link } from "react-router-dom";
import { extraBadgesObj, LegendsObj, PopularBadgesObj } from "./BadgesObj";
import "./Acheivementbadges.css";
import { useDispatchCart } from "../Cart/CartHandler";
import TwentyBomb from "../Images/20Bomb.png";

const AcheivementBoostProduct = () => {
  const [checkedPopBadges, setPopBadges] = useState({});
  const [checkedExtraBadges, setExtraBadges] = useState({});
  const [checkedLegend, setLegend] = useState({});
  const [searchField, setSearchField] = useState("");
  const [searchFieldLegends, setSearchFieldLegends] = useState("");
  const [acheivementTotalMoney, setAcheivementTotalMoney] = useState(0);
  const [valid, setValid] = useState("flex");
  const [totalExtraBadges, setTotalExtraBadges] = useState(0);
  const [totalPopBadges, setTotalPopBadges] = useState(0);
  const [moneyMultiplierDuo, setMoneyMultiplierDuo] = useState(0);
  const [moneyMultiplierStream, setMoneyMultiplierStream] = useState(0);
  const [moneyMultiplierPriority, setMoneyMultipliePriority] = useState(0);
  const [activeDuo, setActiveDuo] = useState(false);
  const [activeStream, setActiveStream] = useState(false);
  const [activePriority, setPriority] = useState(false);
  const [activeOffline, setActiveOffline] = useState(false);
  const [filteredExtras, setFilteredExtras] = useState("");
  const [disabledButtonText, setDisabledButton] = useState("");
  const [disabledState, setDisabledState] = useState("");

  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };

  const handleChangePop = (e) => {
    setPopBadges(
      {
        ...checkedPopBadges,
        [e.target.name]: e.target.checked,
      },
      [checkedPopBadges]
    );
  };

  useEffect(() => {});
  const handleChangeExtra = (e) => {
    setExtraBadges(
      {
        ...checkedExtraBadges,
        [e.target.name]: e.target.checked,
      },
      [checkedExtraBadges]
    );
  };

  const handleChangeLegends = (e) => {
    setLegend({
      [e.target.name]: e.target.checked,
    });
  };

  useEffect(() => {
    console.log("checkedPopBadges: ", checkedPopBadges);
  }, [checkedPopBadges]);

  useEffect(() => {
    console.log("checkedExtraBages: ", checkedExtraBadges);
  }, [checkedExtraBadges]);
  useEffect(() => {
    console.log("CheckedLegend: ", checkedLegend);
  }, [checkedLegend]);

  let filteredPopBadges = Object.keys(checkedPopBadges).filter(function (x) {
    return checkedPopBadges[x] !== false;
  });

  let filteredExtraBadges = Object.keys(checkedExtraBadges).filter(function (
    x
  ) {
    return checkedExtraBadges[x] !== false;
  });
  let totalPop = 0;
  useEffect(() => {
    for (let i = 0; i < PopularBadgesObj.length; i++) {
      if (checkedPopBadges[PopularBadgesObj[i].name] === true) {
        totalPop = PopularBadgesObj[i].price + totalPop;
        setTotalPopBadges(totalPop);
      }
    }
  }, [checkedPopBadges, checkedExtraBadges]);

  let totalExtra = 0;
  useEffect(() => {
    for (let i = 0; i < extraBadgesObj.length; i++) {
      if (checkedExtraBadges[extraBadgesObj[i].name] === true) {
        totalExtra = extraBadgesObj[i].price + totalExtra;
        setTotalExtraBadges(totalExtra);
      }
    }
  }, [checkedExtraBadges, checkedPopBadges]);

  useEffect(() => {
    setAcheivementTotalMoney(totalExtraBadges + totalPopBadges);
  });

  useEffect(() => {
    if (Object.values(checkedLegend)[0] === false) {
      setValid("flex");
    }
    if (Object.values(checkedLegend)[0] === true) {
      setValid("none");
    }
  }, [checkedLegend]);

  useEffect(() => {
    if (Object.values(checkedPopBadges).includes(true) === false) {
      setTotalPopBadges(0);
    }
  }, [checkedPopBadges]);
  useEffect(() => {
    if (Object.values(checkedExtraBadges).includes(true) === false) {
      setTotalExtraBadges(0);
    }
  }, [checkedExtraBadges]);

  useEffect(() => {
    if (activeDuo) {
      setMoneyMultiplierDuo(acheivementTotalMoney * 0.75);
    }
    if (!activeDuo) {
      setMoneyMultiplierDuo(0);
    }
  }, [activeDuo, acheivementTotalMoney]);

  useEffect(() => {
    if (activePriority) {
      setMoneyMultipliePriority(acheivementTotalMoney * 0.25);
    }
    if (!activePriority) {
      setMoneyMultipliePriority(0);
    }
  }, [activePriority, acheivementTotalMoney]);

  useEffect(() => {
    if (activeStream) {
      setMoneyMultiplierStream(acheivementTotalMoney * 0.15);
    }
    if (!activeStream) {
      setMoneyMultiplierStream(0);
    }
  }, [activeStream, acheivementTotalMoney]);
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
    if (!Object.values(checkedLegend)[0] || checkedLegend.length < 1) {
      setDisabledButton("select a legend");
      setDisabledState(true);
    } else {
      setDisabledButton("Add to cart");
      setDisabledState(false);
    }
  }, [checkedLegend]);
  return (
    <>
      <BadgesTitle>Select Your Badges</BadgesTitle>
      <input
        type="checkbox"
        id="scales"
        name="scales"
        onChange={(e) => console.log(e.target.value)}
      ></input>
      <BadgesContainer>
        <BadgesWrap>
          <BadgesSectionTitle>Popular choices</BadgesSectionTitle>

          <BadgesSelectionContainers height="330px">
            {PopularBadgesObj.map((Items, index) => {
              return (
                <TextIconCheckBox>
                  <img
                    src={Items.icon}
                    alt="badge"
                    style={{
                      marginRight: "auto",
                      marginLeft: "auto",
                      height: "200px",
                      width: "200px",
                    }}
                  ></img>
                  <BadgeDesc>{Items.name}</BadgeDesc>
                  <BadgeDesc>{Items.price}$</BadgeDesc>
                  <label class="check" key={Items.key}>
                    <input
                      type="checkbox"
                      className="inputCheck"
                      name={Items.name}
                      checked={checkedPopBadges[Items.name]}
                      onChange={handleChangePop}
                    />

                    <div class="box"></div>
                  </label>
                </TextIconCheckBox>
              );
            })}
          </BadgesSelectionContainers>
          <BadgesSectionTitle>More Badges</BadgesSectionTitle>
          <Searchbar
            onChange={(e) => setSearchField(e.target.value)}
          ></Searchbar>
          <BadgesSelectionContainers>
            {extraBadgesObj
              .filter((items) => {
                return items.name
                  .toLowerCase()
                  .includes(searchField.toLowerCase());
              })
              .map((Items, index) => {
                return (
                  <TextIconCheckBox>
                    <img
                      src={Items.icon}
                      alt="badge"
                      style={{
                        marginRight: "auto",
                        marginLeft: "auto",
                        height: "200px",
                        width: "200px",
                      }}
                    ></img>
                    <BadgeDesc>{Items.name}</BadgeDesc>
                    <BadgeDesc>{Items.price}$</BadgeDesc>
                    <label class="check" key={Items.key}>
                      <input
                        type="checkbox"
                        className="inputCheck"
                        name={Items.name}
                        checked={checkedExtraBadges[Items.name]}
                        onChange={handleChangeExtra}
                      />

                      <div class="box"></div>
                    </label>
                  </TextIconCheckBox>
                );
              })}
          </BadgesSelectionContainers>
          <BadgesSectionTitle>Legends</BadgesSectionTitle>
          <Searchbar
            onChange={(e) => setSearchFieldLegends(e.target.value)}
          ></Searchbar>
          <BadgesSelectionContainers>
            {LegendsObj.filter((items) => {
              return items.name
                .toLowerCase()
                .includes(searchFieldLegends.toLowerCase());
            }).map((Items, index) => {
              return (
                <TextIconCheckBox backgroundColor="white">
                  <img
                    src={Items.icon}
                    alt="badge"
                    style={{
                      marginRight: "auto",
                      marginLeft: "auto",
                      height: "210px",
                      width: "210px",
                      color: "white",
                    }}
                  ></img>
                  <BadgeDesc>{Items.name}</BadgeDesc>
                  <label
                    class="check"
                    key={Items.key}
                    style={{ backgroundColor: "black" }}
                  >
                    <input
                      type="checkbox"
                      className="inputCheck"
                      name={Items.name}
                      checked={checkedLegend[Items.name]}
                      onChange={handleChangeLegends}
                    />

                    <div class="box" style={{ backgroundColor: "black" }}></div>
                  </label>
                </TextIconCheckBox>
              );
            })}
          </BadgesSelectionContainers>
        </BadgesWrap>
      </BadgesContainer>
      <ExtrasContainer style={{ gridTemplateRows: "1fr" }}>
        <ExtrasTitle>Choose additional services</ExtrasTitle>
        <ExtrasOptions>
          <ExtraIconButtonWrap>
            <IconDescWrapper>
              <IconOffline></IconOffline>
              <ExtraCheckBox onClick={() => setActiveOffline(!activeOffline)} />
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
              <ExtraCheckBox onClick={() => setActiveStream(!activeStream)} />
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
      <StepTwoWarningContainer style={{ display: valid }}>
        Please Select a legend
        <StepTwoWarning>
          <i className="fa fa-times" onClick={() => setValid("none")}></i>
        </StepTwoWarning>
      </StepTwoWarningContainer>
      <TotalContainer>
        <TotalTitle>Check your total</TotalTitle>
        <TotalMoneyCard>
          <TotalMoneyHeader>
            Selected Badges:<br></br>
            <span>
              <totalBadgesContainer>
                {filteredPopBadges.map((Items, index) => {
                  return <p>{Items}</p>;
                })}
              </totalBadgesContainer>
            </span>
            <span>
              <totalBadgesContainer>
                {filteredExtraBadges.map((Items, index) => {
                  return <p>{Items}</p>;
                })}
              </totalBadgesContainer>
            </span>
            Selected Legend: <br></br>
            <span>{Object.keys(checkedLegend)}</span>
          </TotalMoneyHeader>
          <DiscountContainer>PromoCode</DiscountContainer>
          <InputTyped
            style={{ marginTop: "0px" }}
            fontSize="20px"
            height="50px"
            width="250px"
          ></InputTyped>
          <div class="button_cont" align="center">
            <button
              className="example_c"
              style={{ opacity: "0.4" }}
              disabled={true}
            >
              {" "}
              Not Applicable to Acheivement Boost
            </button>
          </div>
          <DiscountContainer>Total</DiscountContainer>
          <TotalMoney>
            {(
              acheivementTotalMoney +
              moneyMultiplierDuo +
              moneyMultiplierStream +
              moneyMultiplierPriority
            ).toFixed(2)}
            {"$"}
          </TotalMoney>

          <div class="button_cont" align="center">
            <Link to="./cart">
              <button
                onClick={() => {
                  addToCart({
                    title: "Acheivement Boost",
                    price: (
                      acheivementTotalMoney +
                      moneyMultiplierDuo +
                      moneyMultiplierStream +
                      moneyMultiplierPriority
                    ).toFixed(2),
                    selectedPopBadges: filteredPopBadges,
                    selectedExtraBadges: filteredExtraBadges,
                    selectedLegend: Object.keys(checkedLegend),
                    icon: TwentyBomb,
                    badgesExtras: Object.keys(filteredExtras),
                  });
                }}
                class="example_d"
                href="add-website-here"
                target="_blank"
                rel="nofollow noopener"
                disabled={disabledState}
              >
                {disabledButtonText}
              </button>
            </Link>
          </div>
        </TotalMoneyCard>
      </TotalContainer>
    </>
  );
};

export default AcheivementBoostProduct;
