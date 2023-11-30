import Head from 'next/head'
import React, { useEffect } from 'react'
import Image from 'next/image'
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import "./team.css"

const Team = () => {
    useEffect(() => {
        let imgBx = document.querySelectorAll('.imgBx');
        let contentBx = document.querySelectorAll('.contentBx');
    
        const handleMouseover = function () {
            for (let i = 0; i < contentBx.length; i++) {
                contentBx[i].classList.remove('active');
                // contentBx[i].style.display = 'none';  // Hide all content boxes
            }
    
            let contentElement = document.getElementById(this.dataset.id);
    
            if (contentElement) {
                contentElement.classList.add('active');
                contentElement.style.display = 'block';  // Display the active content box
            }
    
            for (let i = 0; i < imgBx.length; i++) {
                imgBx[i].classList.remove('active');
            }
    
            this.classList.add('active');
        };
    
        for (let i = 0; i < imgBx.length; i++) {
            imgBx[i].addEventListener('mouseenter', handleMouseover);
        }
    
        return () => {
            for (let i = 0; i < imgBx.length; i++) {
                imgBx[i].removeEventListener('mouseenter', handleMouseover);
            }
        };
    }, []);
  return (
    <>
    <div className='main'>
    <div className='meet'>
        <h1>Meet the <span>team</span></h1>
    </div>

    <div>
        <Head>
            <title>Team - Yama Wrld</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>

        <div className='container'>
            <div className='icon'>
                <div className="imgBx active" style={{"--i":1}} data-id="content1">
                    <Image src={img1} alt="imgBx"/>
                </div>
                <div className="imgBx" style={{"--i":2}} data-id="content2">
                    <Image src={img2} alt="imgBx"/>
                </div>
                <div className="imgBx" style={{"--i":3}} data-id="content3">
                    <Image src={img3} alt="imgBx"/>
                </div>
                <div className="imgBx" style={{"--i":4}} data-id="content4">
                    <Image src={img4} alt="imgBx"/>
                </div>
                <div className="imgBx" style={{"--i":5}} data-id="content5">
                    <Image src={img5} alt="imgBx"/>
                </div>
                <div className="imgBx" style={{"--i":6}} data-id="content6">
                    <Image src={img6} alt="imgBx"/>
                </div>
                {/* <div className="imgBx" style={{"--i":7}} data-id="content7">
                    <Image src={img3}/>
                </div>
                <div className="imgBx" style={{"--i":8}} data-id="content8">
                    <Image src={img4}/>
                </div> */}
            </div>
            <div className="content">
                <div className="contentBx active" id="content1">
                    <div className="card">
                        <div className="imgBx1">
                            <Image src={img1} alt="imgBx" />
                        </div>
                        <div className="textBx">
                            <h2>Nosh<br /><span>Founder</span></h2>
                            <ul className='sci'>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contentBx" id="content2">
                    <div className="card">
                        <div className="imgBx1">
                            <Image src={img2} alt="imgBx" />
                        </div>
                        <div className="textBx">
                            <h2>Miss Ghost<br /><span>Community Manager</span></h2>
                            <ul className='sci'>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contentBx" id="content3">
                    <div className="card">
                        <div className="imgBx1">
                            <Image src={img3} alt="imgBx" />
                        </div>
                        <div className="textBx">
                            <h2>Kush<br /><span>Strategic Advisor</span></h2>
                            <ul className='sci'>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contentBx" id="content4">
                    <div className="card">
                        <div className="imgBx1">
                            <Image src={img4} alt="imgBx" />
                        </div>
                        <div className="textBx">
                            <h2>Kaffsu<br /><span>Illustrator</span></h2>
                            <ul className='sci'>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contentBx" id="content5">
                    <div className="card">
                        <div className="imgBx1">
                            <Image src={img5} alt="imgBx" />
                        </div>
                        <div className="textBx">
                            <h2>Ghost<br /><span>Security Moderator</span></h2>
                            <ul className='sci'>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contentBx" id="content6">
                    <div className="card">
                        <div className="imgBx1">
                            <Image src={img6} alt="imgBx" />
                        </div>
                        <div className="textBx">
                            <h2>Bruh<br /><span>Moderator</span></h2>
                            <ul className='sci'>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="contentBx" id="content7">
                    <div className="card">
                        <div className="imgBx1">
                            <Image src={img3} />
                        </div>
                        <div className="textBx">
                            <h2>Nosher Puri<br /><span>Founder</span></h2>
                            <ul className='sci'>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="contentBx" id="content8">
                    <div className="card">
                        <div className="imgBx1">
                            <Image src={img4} />
                        </div>
                        <div className="textBx">
                            <h2>Nosher Puri<br /><span>Founder</span></h2>
                            <ul className='sci'>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Team