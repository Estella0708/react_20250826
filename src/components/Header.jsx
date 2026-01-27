import React, { useState } from "react";

const headerNav = [
  {
    title: "intro",
    url: "#intro",
  },
  {
    title: "skill",
    url: "#skill",
  },
  {
    title: "site",
    url: "#site",
  },
  {
    title: "port",
    url: "#port",
  },
  {
    title: "contact",
    url: "#contact",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  // show : 상태를 만들고 초기값을 false로 지정
  // setShow : 상태값을 바꾸는 값

  // useState : 상태를 만들어주는 HOOK 명령어
  // HOOK 명령어 : 컴포넌트 안에서 상태를 만들고 관리하는 명령어들

  const toggleMenu = () => {
    setShow((pshow) => !pshow);
    // (pshow => !pshow) : 참 > 거짓, 거짓 > 참으로 변경
    // ! : 반대값으로 변경
  };

  return (
    <header id="header" role="banner">
      <div className="header_inner">
        <h1 className="header_logo">
          portfolio
          <em>dveloper</em>
        </h1>
        <nav
          className={`header_nav ${show ? "show" : ""}`}
          // `header_nav` 에 ${show ?} show 가 없을 경우 "show" 참으로 간주하고 show 를 넣어주고 있으면 "" 없애준다
          role="navigation"
          aria-label="메인메뉴"
        >
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="header_nav_mobile" id="headerToggle" role="button" tabIndex="0" onClick={toggleMenu}>
          <span></span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
