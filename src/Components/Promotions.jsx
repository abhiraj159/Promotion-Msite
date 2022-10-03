
import '../App.css';
import { useNavigate } from "react-router-dom"


function Promotions() {

    const navigate = useNavigate();

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="stickyTopBar">
                                <div className="main-blue-box">
                                    <div className="back-buttonsvg">
                                    </div>
                                    <h2 className="white-color text-center flexauto blue-bar-title">Promotions</h2>
                                </div>
                            </div>
                            <div className="p-0">
                                <div className="tab-content scrollable-content" id="maincontentTab">
                                    <div className="tab-pane fade show active mb-space" id="info" role="tabpanel" aria-labelledby="info-tab">
                                        <div className="mainbanner m-15">
                                            <a href="https://www.instagram.com/poker_baazi/" target="_blank">
                                                <img src="ig-banner-new.jpg" />
                                            </a>
                                        </div>
                                        <div className="m-15">

                                            <div className="promo-box">
                                                <a href="" onClick={() => navigate("/Anniversary")}>
                                                    <img src="8th-anniversary-msite-thumb.jpg" />
                                                </a>
                                                <div className="flex-end ">
                                                    <div className="promo-box-txt">
                                                        <span>8th Anniversary</span><br />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="promo-box">
                                                <a href="" onClick={() => navigate("/Goat")}>
                                                    <img src="goat-msite-thumb.jpg" />
                                                </a>
                                                <div className="flex-end ">
                                                    <div className="promo-box-txt">
                                                        <span>G.O.A.T</span><br />
                                                        <strong>Guaranteed PrizePool: 7 CR</strong>
                                                    </div>

                                                    <div className="promo-box-txt" style={{ textAlign: "right" }}>
                                                        <span>30<sup>th</sup> Oct - 6<sup>th</sup> Nov</span><br />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="nav nav-tabs panel-tab-bottom pb-15 tournaments" role="tablist">
                            <li role="presentation">
                                <a className="active line-hight" href="promotions.html">
                                    <img src="specials-selected.svg" />
                                    Special</a>
                            </li>
                            <li role="presentation">
                                <a className="line-hight" href="tournament-schedule.html">
                                    <img src="daily-not-selected.svg" />
                                    Tournaments</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Promotions;


