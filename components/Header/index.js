import header from './header.module.css';

import { useState } from 'react';
import { languages } from './const';
import { ShowLang } from '../Svg/ShowLang';
import { Eye } from '../Svg/Eye';
import { VelcomLogo } from '../Svg/VelcomLogo';
import { MTS_logo } from '../Svg/MTS_Logo';
import { ViberLogo } from '../Svg/ViberLogo';
import { WhatsAppLogo } from '../Svg/WhatsAppLogo';
import { LawTecnologiesLogo } from '../Svg/LawTecnologiesLogo';
 
const Header = () => {
    const [lang, setLang] = useState(languages[0]);
    return (
      <div className={header.container}>
      <div className={header.showButton}><Eye/></div>
        <div className={header.langFooter}>
          <div className={header.langBlock}>
            <div className={header.langPanel}>
              <label className={header.langLabel}>Язык</label>
              <label className={header.currentLang}>{lang}</label>
              <label><ShowLang/></label>
            </div>
            <div className={header.choosePanel}>
                
            </div>
          </div>
          <footer className={header.footer}>
            <div className={header.phoneContainer}><div>{`+375 (44) 755-01-01`}</div><span><VelcomLogo/></span></div>
            <div className={header.linkContainer}><ViberLogo/></div>
            <div className={header.linkContainer}><WhatsAppLogo/></div>
            <div className={header.phoneContainer}><div>{`+375 (29) 550-01-01`}</div><span><MTS_logo/></span></div>
          </footer>
        </div>
        <div className={header.logoNavigate}>
          <LawTecnologiesLogo/>
          <div className={header.navigateLine}>
            <a>{`Главная`}</a>
            <a>{`О Нас`}</a>
            <a>{`Услуги`}</a>
            <a>{`Тарифы`}</a>
            <a>{`Инфоцентр`}</a>
            <a>{`Контакты`}</a>
          </div>
        </div>
      </div>
    );
}

export default Header;
