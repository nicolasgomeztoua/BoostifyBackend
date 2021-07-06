import React, { useState } from "react";
import {
  TotalContainer,
  TotalTitle,
  F3,
  TotalMoneyCard,
  TotalMoneyHeader,
  DiscountContainer,
  InputTyped,
  TotalMoney,
} from "../RankBoost/RankedBoostProductElements";
import { Link } from "react-router-dom";
import KillsBoost from "../Images/killsboost.png";
import { useDispatchCart } from "../Cart/CartHandler";
import styled from "styled-components";
const Checkout = ({
  kills,
  price,
  filteredExtras,
  moneyMultiplierDuo,
  moneyMultiplierStream,
  moneyMultiplierPriority,
  legend,
}) => {
  const dispatch = useDispatchCart();
  const addToCart = (item) => {
    dispatch({ type: "ADD", item });
  };
  const [validPromo, setValidPromo] = useState();
  const disabled = false;
  const opacity = 1;
  const TotalContainerK = styled(TotalContainer)`
    height: auto;
    margin-bottom: 20px;
  `;
  const Step3 = styled(F3)`
    color: #6d00ae;
  `;
  return (
    <>
      <TotalContainerK>
        {" "}
        <TotalTitle>
          <Step3></Step3> Check your total
        </TotalTitle>
        <TotalMoneyCard>
          <TotalMoneyHeader>
            Your Order: <br></br> <span>{kills} Kills</span>
            <br></br> Average Completion Time: <br></br>
            <span>48h</span>
          </TotalMoneyHeader>
          <DiscountContainer>PromoCode</DiscountContainer>
          <InputTyped
            style={{ marginTop: "0px", borderColor: "#6d00ae" }}
            fontSize="20px"
            height="50px"
            width="250px"
            onChange={(e) => {
              setValidPromo(e.target.value.toLowerCase());
            }}
          ></InputTyped>
          <div class="button_cont" align="center">
            <button
              className="example_c k"
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
                price +
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
                    title: "Kills Boost",
                    price: Number(
                      price +
                        moneyMultiplierDuo +
                        moneyMultiplierStream +
                        moneyMultiplierPriority
                    ).toFixed(2),

                    kills: kills,
                    icon: KillsBoost,
                    selectedLegend: Object.keys(legend),
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
      </TotalContainerK>
    </>
  );
};

export default Checkout;
