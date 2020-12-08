import React from "react";

import {
  FireOutlined,
  BookOutlined,
  FireFilled,
  BookFilled,
} from "@ant-design/icons";

import "./TrendingCounter.scss";

//REDUX
import { useDispatch } from "react-redux";
import { toggleHotCount, toggleBookmarkCount } from "../../redux/Slices/ArticleSlice";

interface ITrendingCounter {
  isFireOn: boolean;
  fireCount: number;
  isBookOn: boolean;
  bookCount: number;
  id: string;
}
function TrendingCounter({
  isFireOn,
  fireCount,
  isBookOn,
  bookCount,
  id,
}: ITrendingCounter) {
  const dispatch = useDispatch();

  return (
    <div className="trending-count-container">
      <div onClick={() => dispatch(toggleHotCount(id))}>
        {isFireOn ? (
          <FireFilled className="trend-icon icon-filled" />
        ) : (
          <FireOutlined className="trend-icon" />
        )}

        <div className="trend-count">{fireCount}</div>
      </div>
      <div onClick={() => dispatch(toggleBookmarkCount(id))}>
        {isBookOn ? (
          <BookFilled className="trend-icon icon-filled" />
        ) : (
          <BookOutlined className="trend-icon" />
        )}

        <div className="trend-count">{bookCount}</div>
      </div>
    </div>
  );
}

export default (TrendingCounter);
