import React from "react";
import {LanguageSelectorContainer,LanguageLabel,LanguageSelect,LanguageOption} from "./style";

const LanguageSelector = () => {
    const handleLanguageChange = (e) => {
      const selectedLanguage = e.target.value;
      //aca puedo tomar el valor para guardar en el contexto
    };
  
    return (
      <LanguageSelectorContainer>
        <LanguageLabel>Language:</LanguageLabel>
        <LanguageSelect onChange={handleLanguageChange}>
          <LanguageOption value="English">English</LanguageOption>
          <LanguageOption value="Spanish">Spanish</LanguageOption>
        </LanguageSelect>
      </LanguageSelectorContainer>
    );
  };
  
  export default LanguageSelector;