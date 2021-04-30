import React, { useState, useEffect } from "react";
import AnimatedNumber from "react-animated-number";
import { BagCheckFill } from "@styled-icons/bootstrap/BagCheckFill";
import { UserClock } from "@styled-icons/fa-solid/UserClock";
import { CalendarExclamation } from "@styled-icons/boxicons-regular/CalendarExclamation";
import styled from "styled-components";
const Stats = () => {
  const [d, sd] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();
      const countDate = new Date("May 04 2021 18:00");
      let gap = countDate - now;
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;
      sd(Math.floor(gap / day));
    }, 11000);
  }, []);
  const Completed = styled(BagCheckFill)`
    height: 50px;
    color: #40e0d0;
    margin-top: 50px;
    margin-bottom: 50px;
  `;
  const InProgress = styled(UserClock)`
    height: 50px;
    color: #40e0d0;
    margin-top: 50px;
    margin-bottom: 50px;
  `;
  const TimeLeft = styled(CalendarExclamation)`
    height: 50px;
    color: #40e0d0;
    margin-top: 50px;
    margin-bottom: 50px;
  `;
  return (
    <div className="home-banner">
      <div>
        <h4>
          {" "}
          <AnimatedNumber
            value={1182}
            style={{
              fontSize: 43.96,
            }}
            duration={5000}
            formatValue={(n) => n.toFixed(0)}
          />
        </h4>
        <div id="icon-counter">
          <Completed></Completed>
        </div>
        <p>Orders completed</p>
      </div>
      <div>
        <h4>
          <AnimatedNumber
            value={12}
            style={{
              fontSize: 43.96,
            }}
            duration={10000}
            formatValue={(n) => n.toFixed(0)}
            frameStyle={(percentage) =>
              percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
            }
          />
        </h4>
        <div id="icon-counter">
          <InProgress></InProgress>
        </div>
        <p>Orders Queued</p>
      </div>
      <div>
        {" "}
        <h4>
          <AnimatedNumber
            value={d}
            style={{
              fontSize: 43.96,
            }}
            duration={10000}
            formatValue={(n) => n.toFixed(0)}
            frameStyle={(percentage) =>
              percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
            }
          />{" "}
        </h4>
        <div id="icon-counter">
          <TimeLeft></TimeLeft>
        </div>
        <p>Remaining split</p>
      </div>
    </div>
  );
};

export default Stats;
