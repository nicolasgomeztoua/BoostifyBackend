import React, { useState, useEffect } from "react";
import {
  ExtrasContainer,
  ExtrasTitle,
  F2,
  ExtrasOptions,
  ExtraIconButtonWrap,
  IconDescWrapper,
  IconOffline,
  IconDuo,
  IconSpeed,
  IconStream,
  ExtraCheckBox,
} from "../RankBoost/RankedBoostProductElements";
import styled from "styled-components";
import Checkout from "./Checkout";
const Extras = ({ price, kills }) => {
  const [activeDuo, setActiveDuo] = useState(false);
  const [activeStream, setActiveStream] = useState(false);
  const [activeOffline, setActiveOffline] = useState(false);
  const [activePriority, setActivePriority] = useState(false);
  const [filteredExtras, setFilteredExtras] = useState(null);
  const [moneyMultiplierDuo, setMoneyMultiplierDuo] = useState(0);
  const [moneyMultiplierPriority, setMoneyMultipliePriority] = useState(0);
  const [moneyMultiplierStream, setMoneyMultiplierStream] = useState(0);

  const StepTwo = styled(F2)`
    color: #6d00ae;
  `;
  const IconOfflineK = styled(IconOffline)`
    color: #6d00ae;
  `;
  const IconStreamK = styled(IconStream)`
    color: #6d00ae;
  `;
  const IconSpeedK = styled(IconSpeed)`
    color: #6d00ae;
  `;
  const IconDuoK = styled(IconDuo)`
    color: #6d00ae;
  `;
  useEffect(() => {
    if (activeDuo) {
      setMoneyMultiplierDuo(price * 0.75);
    }
    if (!activeDuo) {
      setMoneyMultiplierDuo(0);
    }
  }, [activeDuo, price]);

  useEffect(() => {
    if (activePriority) {
      setMoneyMultipliePriority(price * 0.25);
    }
    if (!activePriority) {
      setMoneyMultipliePriority(0);
    }
  }, [activePriority, price]);

  useEffect(() => {
    if (activeStream) {
      setMoneyMultiplierStream(price * 0.15);
    }
    if (!activeStream) {
      setMoneyMultiplierStream(0);
    }
  }, [activeStream, price]);
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
      <ExtrasContainer>
        <ExtrasTitle>
          <StepTwo></StepTwo>
          Choose additional services
        </ExtrasTitle>
        <ExtrasOptions>
          <ExtraIconButtonWrap>
            <IconDescWrapper>
              <IconOfflineK></IconOfflineK>
              <ExtraCheckBox
                onClick={() => setActiveOffline(!activeOffline)}
                color={"#6d00ae"}
              />
              <p className="ExtraDesc">Appear offline</p>
              <p className="ExtraDesc"> FREE</p>
            </IconDescWrapper>
          </ExtraIconButtonWrap>
          <ExtraIconButtonWrap>
            <IconDescWrapper>
              <IconDuoK></IconDuoK>
              <ExtraCheckBox
                onClick={() => setActiveDuo(!activeDuo)}
                color={"#6d00ae"}
              />
              <p className="ExtraDesc">Duo-Queue </p>
              <p className="ExtraDesc"> +75%</p>
            </IconDescWrapper>
          </ExtraIconButtonWrap>
          <ExtraIconButtonWrap>
            <IconDescWrapper>
              <IconStreamK />
              <ExtraCheckBox
                onClick={() => setActiveStream(!activeStream)}
                color={"#6d00ae"}
              />
              <p className="ExtraDesc">On Stream</p>
              <p className="ExtraDesc"> +15%</p>
            </IconDescWrapper>
          </ExtraIconButtonWrap>
          <ExtraIconButtonWrap>
            <IconDescWrapper>
              <IconSpeedK></IconSpeedK>
              <ExtraCheckBox
                onClick={() => setActivePriority(!activePriority)}
                color={"#6d00ae"}
              />
              <p className="ExtraDesc">Boost-Priority</p>
              <p className="ExtraDesc"> +25%</p>
            </IconDescWrapper>
          </ExtraIconButtonWrap>
        </ExtrasOptions>
      </ExtrasContainer>
      <Checkout
        price={price}
        kills={kills}
        filteredExtras={filteredExtras}
        moneyMultiplierDuo={moneyMultiplierDuo}
        moneyMultiplierStream={moneyMultiplierStream}
        moneyMultiplierPriority={moneyMultiplierPriority}
      ></Checkout>
    </>
  );
};

export default Extras;
