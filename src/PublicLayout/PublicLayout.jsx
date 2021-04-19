import React from "react";
import ContentNav from "../NavbarComponents/ContentNav";
import "./PublicLayout.css";

const PublicLayout = ({ children }) => {
  return (
    <div className="public-layout">
      <div className="content">{children}</div>
      <div className="sidebar">
        <ContentNav />
      </div>
    </div>
  );
};

export default PublicLayout;
