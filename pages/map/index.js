import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import map from "../../assets/test.png";
import "../../styles/globals.css";
import bunker from "../../assets/U.png";
import shield from "../../assets/enforcer.png";
import Utext from "../../assets/UText.png";
import AText from "../../assets/Atext.png";
import ArText from "../../assets/ArText.png";
import EText from "../../assets/EText.png";
import CText from "../../assets/CText.png";
import RText from "../../assets/RText.png";
import mMap from "../../assets/mobileMap.jpg";
import swords from "../../assets/A.png";
import controller from "../../assets/Y.png";
import cocktail from "../../assets/R.png";
import coin from "../../assets/W.png";
import Navbar from "../../components/NavbarCareer";
import "./home.css";
import Head from "next/head";

//Test
const MainMap = () => {
  const [bPopup, setBpopup] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <title>Mandala - Yama Wrld</title>
      </Head>
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "8vh",
          top: "0",
          left: "0",
          zIndex: "200",
        }}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {visible && <Navbar />}
      </div>

      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#5DBBA2",
        }}
        className="map"
      >
        <TransformWrapper
          minScale={1}
          initialScale={1.3}
          initialPositionX={-250}
          initialPositionY={-30}
          maxScale={3}
          limitToBounds={true}
        >
          <TransformComponent>
            {/* <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",  
              }}
            > */}

            <Image
              src={map}
              style={{
                width: "100%",
                height: "100%",
                scale: "1.25",
                objectFit: "contain",
              }}
              alt="map"
            />
            {/* </div> */}
            <div
              style={{
                width: "30px",
                height: "80px",
                position: "absolute",
                // border: "2px solid black",
                zIndex: "100",
                top: "10%",
                left: "7.5%",
              }}
              onMouseEnter={() => setBpopup(1)}
              onMouseLeave={() => setBpopup(0)}
            >
              {bPopup == 1 ? (
                <Image
                  src={Utext}
                  alt="bunker"
                  width={200}
                  height={200}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "-10px",
                    transition: "transform 0.3s ease-in-out",
                    transform: bPopup === 1 ? "scale(3.5) " : "scale(0)",
                  }}
                />
              ) : (
                <Image
                  src={bunker}
                  alt="bunker"
                  width={50}
                  height={50}
                  style={{ marginTop: "-10px", marginLeft: "-10px" }}
                />
              )}
            </div>
            <div
              style={{
                width: "200px",
                height: "150px",
                position: "absolute",
                // border: "2px solid black",
                zIndex: "100",
                top: "20%",
                left: "7.5%",
              }}
              onMouseEnter={() => setBpopup(2)}
              onMouseLeave={() => setBpopup(0)}
            >
              {bPopup == 2 ? (
                <Image
                  src={AText}
                  alt="bunker"
                  width={80}
                  height={80}
                  style={{
                    marginTop: "-30px",
                    marginLeft: "80px",
                    transition: "transform 0.3s ease-in-out",
                    transform: bPopup === 2 ? "scale(1.5) " : "scale(0)",
                  }}
                />
              ) : (
                <Image
                  src={swords}
                  alt="bunker"
                  width={40}
                  height={40}
                  style={{ marginTop: "-20px", marginLeft: "100px" }}
                />
              )}
            </div>
            <div
              style={{
                width: "200px",
                height: "150px",
                position: "absolute",
                // border: "2px solid black",
                zIndex: "100",
                top: "65%",
                left: "45.5%",
              }}
              onMouseEnter={() => setBpopup(3)}
              onMouseLeave={() => setBpopup(0)}
            >
              {bPopup == 3 ? (
                <Image
                  src={EText}
                  alt="bunker"
                  width={80}
                  height={80}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "70px",
                    transition: "transform 0.3s ease-in-out",
                    transform: bPopup === 3 ? "scale(1.5) " : "scale(0)",
                  }}
                />
              ) : (
                <Image
                  src={shield}
                  alt="bunker"
                  width={40}
                  height={40}
                  style={{ marginTop: "-20px", marginLeft: "85px" }}
                />
              )}
            </div>
            <div
              style={{
                width: "100px",
                height: "100px",
                position: "absolute",
                // border: "2px solid black",
                zIndex: "100",
                top: "16%",
                left: "34.5%",
              }}
              onMouseEnter={() => setBpopup(4)}
              onMouseLeave={() => setBpopup(0)}
            >
              {bPopup == 4 ? (
                <Image
                  src={RText}
                  alt="bunker"
                  width={100}
                  height={100}
                  style={{
                    marginTop: "-40px",
                    marginLeft: "10px",
                    transition: "transform 0.3s ease-in-out",
                    transform: bPopup === 4 ? "scale(1.5) " : "scale(0)",
                  }}
                />
              ) : (
                <Image
                  src={cocktail}
                  alt="bunker"
                  width={40}
                  height={40}
                  style={{ marginTop: "-35px", marginLeft: "30px" }}
                />
              )}
            </div>
            <div
              style={{
                width: "60px",
                height: "120px",
                position: "absolute",
                // border: "2px solid black",
                zIndex: "100",
                top: "27%",
                left: "38.5%",
              }}
              onMouseEnter={() => setBpopup(5)}
              onMouseLeave={() => setBpopup(0)}
            >
              {bPopup == 5 ? (
                <Image
                  src={ArText}
                  alt="bunker"
                  width={150}
                  height={150}
                  style={{
                    marginTop: "-40px",
                    marginLeft: "10px",
                    transition: "transform 0.3s ease-in-out",
                    transform: bPopup === 5 ? "scale(1.5) " : "scale(0)",
                  }}
                />
              ) : (
                <Image
                  src={controller}
                  alt="bunker"
                  width={40}
                  height={40}
                  style={{ marginTop: "-40px", marginLeft: "20px" }}
                />
              )}
            </div>
            <div
              style={{
                width: "150px",
                height: "200px",
                position: "absolute",
                //   border: "2px solid black",
                zIndex: "100",
                top: "32%",
                left: "52.5%",
              }}
              onMouseEnter={() => setBpopup(6)}
              onMouseLeave={() => setBpopup(0)}
            >
              {bPopup == 6 ? (
                <Image
                  src={coin}
                  alt="bunker"
                  width={40}
                  height={40}
                  style={{
                    marginTop: "-50px",
                    marginLeft: "65px",
                    transition: "transform 0.3s ease-in-out",
                    transform: bPopup === 6 ? "scale(1.5) " : "scale(0)",
                  }}
                />
              ) : (
                <Image
                  src={coin}
                  alt="bunker"
                  width={40}
                  height={40}
                  style={{ marginTop: "-30px", marginLeft: "65px" }}
                />
              )}
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#5DBBA2",
        }}
        className="mMap"
      >
        <TransformWrapper
          minScale={3.3}
          initialScale={3.3}
          initialPositionX={-450}
          initialPositionY={-930}
          maxScale={6.3}
          limitToBounds={true}
        >
          <TransformComponent>
            {/* <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",  
              }}
            > */}

            <Image
              src={mMap}
              alt="map"
              style={{
                width: "100%",
                height: "100vh",
                scale: "4",
                objectFit: "contain",
              }}
              className="mMap"
            />
            {/* </div> */}
            <div
              style={{
                width: "15px",
                height: "20px",
                position: "absolute",
                // border: "2px solid black",
                zIndex: "100",
                top: "38.5%",
                left: "0.5%",
              }}
              onMouseEnter={() => setBpopup(1)}
              onMouseLeave={() => setBpopup(0)}
            >
              {bPopup == 1 ? (
                <Image
                  src={Utext}
                  alt="bunker"
                  width={50}
                  height={50}
                  style={{
                    marginTop: "-10px",
                    marginLeft: "15px",
                    transition: "transform 0.3s ease-in-out",
                    transform: bPopup === 1 ? "scale(3.5) " : "scale(0)",
                    width: "10px",
                  }}
                />
              ) : (
                <Image
                  src={bunker}
                  alt="bunker"
                  width={10}
                  height={10}
                  style={{ marginTop: "-10px", marginLeft: "0px" }}
                />
              )}
            </div>
            <div
              style={{
                width: "70px",
                height: "50px",
                position: "absolute",
                // border: "2px solid black",
                zIndex: "100",
                top: "41%",
                left: "-0.5%",
              }}
              onMouseEnter={() => setBpopup(2)}
              onMouseLeave={() => setBpopup(0)}
            >
              {bPopup == 2 ? (
                <Image
                  src={AText}
                  alt="bunker"
                  width={50}
                  height={50}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "30px",
                    transition: "transform 0.3s ease-in-out",
                    transform: bPopup === 2 ? "scale(1.5) " : "scale(0)",
                    width: "30px",
                  }}
                />
              ) : (
                <Image
                  src={swords}
                  alt="bunker"
                  width={15}
                  height={15}
                  style={{ marginTop: "-20px", marginLeft: "27px" }}
                />
              )}
            </div>
            <div
              style={{
                width: "80px",
                height: "50px",
                position: "absolute",
                // border: "2px solid black",
                zIndex: "100",
                top: "54.5%",
                left: "42.5%",
              }}
              onMouseEnter={() => setBpopup(3)}
              onMouseLeave={() => setBpopup(0)}
            >
              {bPopup == 3 ? (
                <Image
                  src={EText}
                  alt="bunker"
                  width={80}
                  height={80}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "23px",
                    transition: "transform 0.3s ease-in-out",
                    transform: bPopup === 3 ? "scale(1.5) " : "scale(0)",
                    width: "35px",
                  }}
                />
              ) : (
                <Image
                  src={shield}
                  alt="bunker"
                  width={20}
                  height={20}
                  style={{
                    marginTop: "-18px",
                    marginLeft: "30px",
                    width: "15px",
                  }}
                />
              )}
            </div>
            <div
              style={{
                width: "35px",
                height: "35px",
                position: "absolute",
                // border: "2px solid black",
                zIndex: "100",
                top: "39.3%",
                left: "31.5%",
              }}
              onMouseEnter={() => setBpopup(4)}
              onMouseLeave={() => setBpopup(0)}
            >
              {bPopup == 4 ? (
                <Image
                  src={RText}
                  alt="bunker"
                  width={100}
                  height={100}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "2px",
                    transition: "transform 0.3s ease-in-out",
                    transform: bPopup === 4 ? "scale(1.5) " : "scale(0)",
                    width: "45px",
                  }}
                />
              ) : (
                <Image
                  src={cocktail}
                  alt="bunker"
                  width={10}
                  height={10}
                  style={{
                    marginTop: "-15px",
                    marginLeft: "8px",
                    width: "15px",
                  }}
                />
              )}
            </div>
            <div
              style={{
                width: "30px",
                height: "40px",
                position: "absolute",
                // border: "2px solid black",
                zIndex: "100",
                top: "43%",
                left: "35.5%",
              }}
              onMouseEnter={() => setBpopup(5)}
              onMouseLeave={() => setBpopup(0)}
            >
              {bPopup == 5 ? (
                <Image
                  src={ArText}
                  alt="bunker"
                  width={200}
                  height={200}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "1px",
                    transition: "transform 0.3s ease-in-out",
                    transform: bPopup === 5 ? "scale(1.5) " : "scale(0)",
                    width: "65px",
                  }}
                />
              ) : (
                <Image
                  src={controller}
                  alt="bunker"
                  width={10}
                  height={10}
                  style={{
                    marginTop: "-20px",
                    marginLeft: "6px",
                    width: "15px",
                  }}
                />
              )}
            </div>
            <div
              style={{
                width: "50px",
                height: "60px",
                position: "absolute",
                // border: "2px solid black",
                zIndex: "100",
                top: "44%",
                left: "52.5%",
              }}
              onMouseEnter={() => setBpopup(6)}
              onMouseLeave={() => setBpopup(0)}
            >
              {bPopup == 6 ? (
                <Image
                  src={coin}
                  alt="bunker"
                  width={10}
                  height={10}
                  style={{
                    marginTop: "-21px",
                    marginLeft: "17px",
                    width: "15px",
                    transition: "transform 0.3s ease-in-out",
                    transform: bPopup === 6 ? "scale(1.5) " : "scale(0)",
                  }}
                />
              ) : (
                <Image
                  src={coin}
                  alt="bunker"
                  width={10}
                  height={10}
                  style={{
                    marginTop: "-11px",
                    marginLeft: "17px",
                    width: "15px",
                  }}
                />
              )}
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </>
  );
};

export default MainMap;
