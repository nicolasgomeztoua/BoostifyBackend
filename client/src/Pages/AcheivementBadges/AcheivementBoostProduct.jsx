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

import { extraBadgesObj, LegendsObj, PopularBadgesObj } from "./BadgesObj";
import "./Acheivementbadges.css";

const AcheivementBoostProduct = () => {
  const [checkedPopBadges, setPopBadges] = useState({});
  const [checkedExtraBadges, setExtraBadges] = useState({});
  const [checkedLegend, setLegend] = useState({});
  const [searchField, setSearchField] = useState("");
  const [searchFieldLegends, setSearchFieldLegends] = useState("");
  const [acheivementTotalMoney, setAcheivementTotalMoney] = useState(0);
  const [valid, setValid] = useState("flex");
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

  useEffect(() => {
    for (let i = 0; i < PopularBadgesObj.length; i++) {
      if (checkedPopBadges[PopularBadgesObj[i].name] === true) {
        setAcheivementTotalMoney(
          acheivementTotalMoney + PopularBadgesObj[i].price
        );
      }
      if (checkedPopBadges[PopularBadgesObj[i].name] === false) {
        setAcheivementTotalMoney(
          acheivementTotalMoney - PopularBadgesObj[i].price
        );
      }
    }
  }, [checkedPopBadges]);
  useEffect(() => {
    for (let i = 0; i < extraBadgesObj.length; i++) {
      if (checkedPopBadges[extraBadgesObj[i].name] === true) {
        setAcheivementTotalMoney(
          acheivementTotalMoney + extraBadgesObj[i].price
        );
      }
      if (checkedPopBadges[extraBadgesObj[i].name] === false) {
        setAcheivementTotalMoney(
          acheivementTotalMoney - extraBadgesObj[i].price
        );
      }
    }
  }, [checkedPopBadges]);
  useEffect(() => {
    if (Object.values(checkedLegend)[0] === false) {
      setValid("flex");
    }
    if (Object.values(checkedLegend)[0] === true) {
      setValid("none");
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
            <button className="example_c"> Apply</button>
          </div>
          <DiscountContainer>Total</DiscountContainer>
          <TotalMoney>{acheivementTotalMoney}$</TotalMoney>
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
    </>
  );
};

export default AcheivementBoostProduct;
