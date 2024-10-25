import { useState } from "react";
import * as s from "./styles";
import Sidebar from "components/Sidebar";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <s.Nav>
        <s.NavLogo />
        <s.NavBurger
          onClick={() => {
            setShowMenu(true);
          }}
        />
      </s.Nav>
      {showMenu && (
        <s.Menu>
          <s.MenuClose
            onClick={() => {
              setShowMenu(false);
            }}
          />
          <Sidebar />
        </s.Menu>
      )}
    </>
  );
};

export default Nav;
