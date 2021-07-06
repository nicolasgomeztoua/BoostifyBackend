import { useState } from "react";
import styled from "styled-components";
import {
  BadgesSectionTitle,
  Searchbar,
  BadgesSelectionContainers,
  TextIconCheckBox,
  BadgeDesc,
} from "../AcheivementBadges/BadgesElements";
import { LegendsObj } from "../AcheivementBadges/BadgesObj";
import Extras from "./Extras";
const Legends = ({ price, kills }) => {
  const [searchFieldLegends, setSearchFieldLegends] = useState("");
  const [checkedLegend, setLegend] = useState("");
  const handleChangeLegends = (e) => {
    setLegend({
      [e.target.name]: e.target.checked,
    });
  };
  const LegendSelectionContainer = styled(BadgesSelectionContainers)`
    margin-bottom: 0;
  `;
  const LegendsTitle = styled(BadgesSectionTitle)`
    border-color: #6d00ae;
    color: black;
  `;
  const Search = styled(Searchbar)`
    border: 2px solid #6d00ae;
    outline-color: #6d00ae;
  `;

  return (
    <>
      <LegendsTitle>Legends</LegendsTitle>
      <Search
        onChange={(e) => setSearchFieldLegends(e.target.value)}
        value={searchFieldLegends}
      ></Search>
      <LegendSelectionContainer>
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
      </LegendSelectionContainer>
      <Extras price={price} kills={kills} legend={checkedLegend}>
        {" "}
      </Extras>
    </>
  );
};

export default Legends;
