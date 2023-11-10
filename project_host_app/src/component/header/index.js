import React from "react";
import {HeaderContainer, ProjectHost} from "./style";
import LanguageSelector from "../languageSelector/index";

const Header = () => {
  return (
    <HeaderContainer>
      <ProjectHost>Project Host</ProjectHost>
      <LanguageSelector/>
    </HeaderContainer>
  );
};
  export default Header;