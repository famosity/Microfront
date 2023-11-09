import React from "react";
import {HeaderContainer, ProjectHost} from "./style";
import LanguageSelector from "../languageSelector/index";

const Header = () => {
    // Aquí puedes usar el contexto para cambiar el idioma
    // Agregar un manejador de eventos para cambiar el idioma
    return (
      <HeaderContainer>
        <ProjectHost>Project Host</ProjectHost>
        <LanguageSelector/>
      </HeaderContainer>
    );
  };
  export default Header;