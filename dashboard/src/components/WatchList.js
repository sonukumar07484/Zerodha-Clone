import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

const watchlist = [
  { name: "INFY", price: 1550.25, percent: "-0.25%", isDown: true },
  { name: "ONGC", price: 116.45, percent: "0.15%", isDown: false },
  { name: "TCS", price: 3420.5, percent: "-0.40%", isDown: true },
  { name: "KPIT", price: 1250.75, percent: "0.65%", isDown: false },
  { name: "WIPRO", price: 520.3, percent: "-0.10%", isDown: true },
  { name: "M&M", price: 1680.2, percent: "0.45%", isDown: false },
];

const WatchList = () => {
  return (
    <div className="watchlist-container">

      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />

        <span className="counts">
          {watchlist.length} / 50
        </span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem
            stock={stock}
            key={index}
          />
        ))}
      </ul>

    </div>
  );
};

export default WatchList;


// WatchList Item

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] =
    useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="item">

        <p className={stock.isDown ? "down" : "up"}>
          {stock.name}
        </p>

        <div className="itemInfo">

          <span className="percent">
            {stock.percent}
          </span>

          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">
            {stock.price}
          </span>

        </div>

      </div>

      {showWatchlistActions && <WatchListActions />}
    </li>
  );
};


// WatchList Actions

const WatchListActions = () => {
  return (
    <span className="actions">
      <span>

        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy">
            Buy
          </button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">
            Sell
          </button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>

      </span>
    </span>
  );
};
