import React, { useContext } from "react";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AuthContext, FirebaseContext } from "../../store/Contex";
import { useHistory } from "react-router-dom";

function Header() {
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div
          onClick={() => {
            history.push("/");
          }}
          className="brandName"
        >
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>
            {user ? (
              `${user.displayName}`
            ) : (
              <button
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </button>
            )}
          </span>
          <hr />
        </div>

        {user && (
          <span>
            {" "}
            <button
              onClick={() => {
                firebase
                  .auth()
                  .signOut()
                  .then(() => {
                    history.push("/login");
                  });
              }}
            >
              Logout
            </button>
          </span>
        )}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span
              onClick={() => {
                // eslint-disable-next-line no-lone-blocks
                {
                  user ? history.push("/create") : history.push("/login");
                }
              }}
            >
              SELL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
