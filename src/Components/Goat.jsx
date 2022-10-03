import React from 'react';
import { useNavigate } from "react-router-dom"

const Goat = () => {
    const navigate = useNavigate();

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="stickyTopBar" style={{ backgroundColor: "#0d0d0d", borderBottom: "2px solid #eeba5d" }}>
                                <div className="main-blue-box">
                                    <div onClick={() => navigate("/")} className="back-buttonsvg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" fill="#FFFFFF" />
                                        </svg>
                                    </div>
                                    <h2 className="white-color text-center flexauto blue-bar-title">
                                        G.O.A.T
                                    </h2>
                                </div>
                            </div>
                            <div className="p-0">

                                <div className="tab-content scrollable-content goat-pic" id="maincontentTab">
                                    <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
                                        <div className=" pb-100">
                                            <div className="mainbanner">
                                                <img src="main-card.gif" style={{ borderRadius: "0 0 50px 50px" }} />
                                            </div>


                                            <div className="blsu">
                                                <img alt="Banner" className="img-responsive" src="1.png"
                                                    style={{ borderRadius: "20px" }} />
                                                <div id="play-video">
                                                    &nbsp;
                                                </div>

                                                <iframe allow="autoplay;" allowFullScreen={true} frameBorder="0" id="video123"></iframe>
                                            </div>

                                            <div className=" text-center" style={{ padding: "0 15px" }}>
                                                <img src="buyin-goat.png" />
                                            </div>

                                            <div className="ptlr-15">
                                                <div className="slideshow-container">
                                                    <div className="mySlides1">
                                                        <img src="FLight-10.jpg" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="mySlides1">
                                                        <img src="2nd-card-goat.jpg" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="mySlides1">
                                                        <img src="FLight-12.jpg" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="mySlides1">
                                                        <img src="FLight-13.jpg" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="mySlides1">
                                                        <img src="FLight-14.jpg" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="mySlides1">
                                                        <img src="FLight-15.jpg" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="mySlides1">
                                                        <img src="FLight-16.jpg" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="mySlides1">
                                                        <img src="FLight-17.jpg" style={{ width: "100%" }} />
                                                    </div>
                                                    <div className="mySlides1">
                                                        <img src="FLight-18.jpg" style={{ width: "100%" }} />
                                                    </div>



                                                    <a className="prev">&#10094;</a>
                                                    <a className="next">&#10095;</a>
                                                </div>

                                            </div>
                                            <div className="blsu" style={{ padding: "0 15px" }}>
                                                <img alt="Banner" className="img-responsive" src="3rd-new.png" />
                                                <div id="play-video">
                                                    &nbsp;
                                                </div>

                                                <iframe style={{ width: "90%", margin: "0 auto" }} allow="autoplay;" allowFullScreen={true} frameBorder="0"
                                                    id="video1234"></iframe>
                                            </div>

                                            <div className="ptlr-15 text-center" style={{ paddingBottom: "15px" }}>
                                                <img src="4-msite.gif" style={{ width: "180px" }} />
                                            </div>

                                            <div>
                                                <img src="5.png" />
                                            </div>

                                            <div className="blsu">
                                                <img alt="Banner" className="img-responsive" src="6th-new.png"
                                                    style={{ borderRadius: "20px" }} />
                                                <div id="play-video">
                                                    &nbsp;
                                                </div>

                                                <iframe allow="autoplay;" allowFullScreen={true} frameBorder="0" id="video12345"></iframe>
                                            </div>

                                            <div className="ptlr-15 text-center">
                                                <img src="7.gif" style={{ width: "100px" }} />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="tournament" role="tabpanel" aria-labelledby="tournament-tab">
                                        <div className="m-15 pb-50">
                                            <div className="text-center">
                                                <h1 style={{ color: "#fff !important" }}>Tournaments</h1>
                                            </div>
                                            <div className="pb-15">
                                                <img src="FLight-10.jpg" />
                                            </div>
                                            <div className="pb-15">
                                                <img src="2nd-card-goat.jpg" />
                                            </div>
                                            <div className="pb-15">
                                                <img src="FLight-12.jpg" />
                                            </div>
                                            <div className="pb-15">
                                                <img src="FLight-13.jpg" />
                                            </div>
                                            <div className="pb-15">
                                                <img src="FLight-14.jpg" />
                                            </div>
                                            <div className="pb-15">
                                                <img src="FLight-15.jpg" />
                                            </div>
                                            <div className="pb-15">
                                                <img src="FLight-16.jpg" />
                                            </div>
                                            <div className="pb-15">
                                                <img src="FLight-17.jpg" />
                                            </div>
                                            <div className="pb-15">
                                                <img src="FLight-18.jpg" />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="tab-pane fade pb-100" id="tnc" role="tabpanel" aria-labelledby="tnc-tab">
                                        <div className="inner-box m-15 box-shadow0"
                                            style={{ backgroundColor: "transparent !important", color: "#fff !important" }}>
                                            <div className="tnc-box">
                                                <div className="flex-box-global space-even"
                                                    style={{ backgroundColor: "transparent !important", color: "#fff !important" }}>
                                                    <div>
                                                        <img src="images/cash-smash/tnc-head-icon.svg" className="tnc-img " />
                                                    </div>
                                                    <div>
                                                        <h3 style={{ color: "#fff" }}>
                                                            Terms and Conditions <span className="sub-txt">G.O.A.T</span>
                                                        </h3>
                                                    </div>
                                                </div>

                                                <ul className=" tnc-points">
                                                    <li>
                                                        The tournaments will begin promptly at the scheduled time stated in the Tournament Lobby. We
                                                        reserve the right to delay or cancel a tournament without prior notice. In case a user is
                                                        registered and the tournament gets canceled, the Buy-in amount will be refunded to the user.
                                                    </li>
                                                    <li>
                                                        A player can be disqualified from the promotions and their winnings can be blocked if they are
                                                        found guilty of any misconduct or fraudulent activities such as multi-accounting, chip dumping
                                                        etc. in violation of the PokerBaazi.com policy. The final decision will be at the discretion of
                                                        the PokerBaazi team.

                                                    </li>
                                                    <li>
                                                        You understand and acknowledge that once a game/tournament has commenced, not being able to play
                                                        due to slow internet connections, faulty hardware, internet connection failure, low computer
                                                        configuration or for some other reason are not attributable to us and the same do not entitle
                                                        you to refund of the entry fee you may have paid for participation.

                                                    </li>
                                                    <li>
                                                        Seats are assigned at random. Seat changes are not permitted.

                                                    </li>
                                                    <li>
                                                        Prizes will be awarded as stated in the Tournament Lobby, except when a deal is made or the
                                                        tournament is canceled.

                                                    </li>
                                                    <li>
                                                        The prize structure is not finalized and keeps on changing as more users enter the tournament
                                                        until registration has closed and the rebuy and/or add-on period is over.

                                                    </li>
                                                    <li>
                                                        If two or more players are eliminated on the same hand, a player with more chips at the start of
                                                        the hand finishes higher than a player with fewer chips.

                                                    </li>
                                                    <li>
                                                        In order to be eligible to rebuy in a rebuy tournament, you must have the funds available in
                                                        your account. Funds currently in play in other games are not considered to be available.

                                                    </li>
                                                    <li>
                                                        Important information about each tournament, including the blind structure, length of rounds,
                                                        rebuy and break information, can be found by selecting the tournament in the lobby. We reserve
                                                        the right to change the parameters of any tournament at any time without notice.

                                                    </li>
                                                    <li>
                                                        Tickets for qualifiers won through a contest, satellite, rewards or any other promotion for a
                                                        particular qualifier cannot be exchanged for another qualifier.

                                                    </li>
                                                    <li>
                                                        If you win a ticket to any of the qualifiers, you will be directly registered to the tournament.
                                                        If you then use a deposit code, the ticket from such code will not be valid and cannot be used
                                                        or refunded.

                                                    </li>
                                                    <li>
                                                        Multiple satellite wins for qualifiers will result in single registration to the tournament.
                                                        Multiple satellite wins will be reimbursed automatically as tournament win.

                                                    </li>
                                                    <li>
                                                        Multiple qualifier tickets gained using deposit codes will not be reimbursed.For example : If a
                                                        user has tickets to Qualifier 1,2 and 3 gained using deposit codes and qualifies for Day 2
                                                        through 1A. The tickets for Qualifier 2 and Qualifier 3 will not be reimbursed.

                                                    </li>
                                                    <li>
                                                        PokerBaazi.com reserves the right to change the terms and conditions without prior notice.

                                                    </li>
                                                    <li>
                                                        By taking part in this promotion, you agree to allow PokerBaazi to share your name, username and
                                                        images to social media and third party media channels.

                                                    </li>



                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <ul className="nav nav-tabs panel-tab-bottom px-20" role="tablist"
                            style={{ maxWidth: "580px", margin: "0 auto" }}>
                            <li role="presentation">
                                <button className="active line-hight" data-bs-toggle="tab" data-bs-target="#info" type="button" role="tab"
                                    aria-controls="info" id="info-tab">
                                    <img src="images/barimages/info.svg" />
                                    Info</button>
                            </li>
                            <li role="presentation">
                                <button className="line-hight" data-bs-toggle="tab" data-bs-target="#tournament" type="button" role="tab"
                                    id="tournament-tab" aria-controls="tournament">
                                    <img src="images/barimages/schedule.svg" />
                                    Tournaments</button>
                            </li>
                            <li role="presentation">
                                <button className="line-hight" data-bs-toggle="tab" data-bs-target="#tnc" type="button" role="tab" id="tnc-tab"
                                    aria-controls="tnc">
                                    <img src="images/barimages/terms-and-conditions.svg" />
                                    TnC</button>
                            </li>
                        </ul> */}
                    </div>
                </div>/
            </section>
        </>
    )
};

export default Goat;