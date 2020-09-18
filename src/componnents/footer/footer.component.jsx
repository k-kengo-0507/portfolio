import React from "react";
import "./footer.styles.css"

const FooterPanel = () => {
  return(
    <div>
      <div className = "footer-style">© Kengo Kamada &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;