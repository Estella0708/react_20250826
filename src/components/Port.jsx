import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Port1 from "../assets/img/port_1.png";
import Port2 from "../assets/img/port_2.png";
import Port3 from "../assets/img/port_3.png";
import Port4 from "../assets/img/port_4.png";
import Port5 from "../assets/img/port_5.png";
import Port6 from "../assets/img/port_6.png";

const portText = [
  {
    num: "01.",
    title: "A팀 프로젝트",
    desc: "1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nulla eos libero iste labore velit corrupti voluptatum atque accusantium! Aut sapiente enim eum, excepturi nisi doloribus rem tempora optio hic?",
    img: Port1,
    img_code: "/",
    alt: "포폴이미지 1",
    site_code: "/",
  },
  {
    num: "02.",
    title: "B팀 프로젝트",
    desc: "2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nulla eos libero iste labore velit corrupti voluptatum atque accusantium! Aut sapiente enim eum, excepturi nisi doloribus rem tempora optio hic?",
    img: Port2,
    img_code: "/",
    alt: "포폴이미지 2",
    site_code: "/",
  },
  {
    num: "03.",
    title: "C팀 프로젝트",
    desc: "3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nulla eos libero iste labore velit corrupti voluptatum atque accusantium! Aut sapiente enim eum, excepturi nisi doloribus rem tempora optio hic?",
    img: Port3,
    img_code: "/",
    alt: "포폴이미지 3",
    site_code: "/",
  },
  {
    num: "04.",
    title: "D팀 프로젝트",
    desc: "4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nulla eos libero iste labore velit corrupti voluptatum atque accusantium! Aut sapiente enim eum, excepturi nisi doloribus rem tempora optio hic?",
    img: Port4,
    img_code: "/",
    alt: "포폴이미지 4",
    site_code: "/",
  },
  {
    num: "05.",
    title: "E팀 프로젝트",
    desc: "5. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nulla eos libero iste labore velit corrupti voluptatum atque accusantium! Aut sapiente enim eum, excepturi nisi doloribus rem tempora optio hic?",
    img: Port5,
    img_code: "/",
    alt: "포폴이미지 5",
    site_code: "/",
  },
  {
    num: "06.",
    title: "F팀 프로젝트",
    desc: "6. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nulla eos libero iste labore velit corrupti voluptatum atque accusantium! Aut sapiente enim eum, excepturi nisi doloribus rem tempora optio hic?",
    img: Port6,
    img_code: "/",
    alt: "포폴이미지 6",
    site_code: "/",
  },
];

const Port = () => {
  const hRef = useRef(null);
  // useRef : 변수값을 초기화 시켜주는 훅 명령어.
  // hRef = useRef(null); : hRef 변수를 null 값으로 초기화
  // 이 변수는 가로 스크롤이 작용될 부모요소를 참조할 때 사용하기 위해 지정
  // ref : 어떤 변수를 참조할 때 사용하는 명령어

  const secRef = useRef([]);
  // useRef([]) : 변수의 초기값을 비어있는 배열로 지정
  // 가로 스크롤 하는 article 6개(0번~5번)를 지정하기 위해 사용

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = hRef.current;
    // .current : useRef 객체의 프로퍼티 속성으로 실제로 참조하고 있는 값을 나타냄
    const sections = secRef.current;

    let scrollT = gsap.to(sections, {
      xPercent: -600, // 왼쪽으로 600% 이동
      ease: "none", // 시작, 끝의 속도를 조절, none : 속도를 일정하게
      scrollTrigger: {
        trigger: horizontal, // 움직이는 객체
        start: "top 56px", // 시작 위치, 위에서 56px 만큼 내려와서 시작
        end: "+=3000", // 값이 작을 때 속도가 빠르고 값이 높으면 느려짐
        pin: true, //  객체들이 움직일 때 부모값 움직임 없음
        scrub: 1, // 부드럽게 스크롤되게 해줌
      },
    });

    return () => {
      scrollT.kill();
      // 다른 컴포넌트로 갔을 때 삭제해주는 이벤트
    };
  }, []);
  // useEffect(()=>{}) : 이벤트를 줄 때 사용하는 효과 훅 명령어
  // 컴포넌트가 화면에 나타날 때 어떤 효과를 줄 때 사용하는 훅 명령어

  return (
    <section id="port" ref={hRef}>
      <div className="port_inner">
        <div className="port_title">
          portfolio <em>작업물</em>
        </div>
        <div className="port_wrap">
          {portText.map((port, key) => (
            <article className={`port_item p${key + 1}`} key={key} ref={(el) => (secRef.current[key] = el)}>
              <span className="num">0{key + 1}.</span>
              <a href={port.img_code} className="img">
                <img src={port.img} alt={port.alt} />
              </a>
              <h3 className="title">{port.title}</h3>
              <div className="desc">{port.desc}</div>
              <a href={port.site_code} target="_blank" className="btn" rel="noreferrer noopener">
                {/* noreferrer : 정보 보안용 > 사용자가 링크를 클릭했을때 어디서 왔는지 정보가 전달되게 해주는 경로를 숨김 */}
                {/* noopenter : 보안용 > 차단, 해킹, 피싱등을 방지 */}
                사이트 보기
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Port;
