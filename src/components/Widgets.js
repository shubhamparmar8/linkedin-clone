import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linked News</h2>
        <InfoIcon />
      </div>

      {newsArticle("World is your(remote work) oyster", "Top news - 14,078 readers")}
      {newsArticle("Coronavirus: updates", "Top news - 8,628 readers")}
      {newsArticle("Dude, where's my car?", "Cars & auto - 2,452 readers")}
      {newsArticle("Tokyo biggest Games by sports", "Sports - 4,176 readers")}
      {newsArticle("Is Redux too good?", "Code - 2,123 readers")}
    </div>
  );
};

export default Widgets;
