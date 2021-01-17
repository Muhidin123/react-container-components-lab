// Code MovieReviews Here

import { head } from "fetch-mock";
import React from "react";

const MovieReviews = ({movies: {
  byline,
  critics_pick: pick,
  display_title: title,
  headline,
  summary_short: summary,
}}) => {
  return (
    <div>
      <ul key={title}>
        <li>{byline}</li>
        <li>{pick}</li>
        <li>{title}</li>
        <li>{headline}</li>
        <li>{summary}</li>
      </ul>
    </div>
  );
};

export default MovieReviews;

// const {byline, "critics_pick": pick, "display_title": title, headline ,"summary_short": summary } = props
