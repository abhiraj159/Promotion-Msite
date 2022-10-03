import React from 'react';
import { useNavigate } from "react-router-dom"

const Anniversary = () => {
    const navigate = useNavigate();

    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="stickyTopBar" style={{ backgroundColor: "#310051" }}>
                                <div className="main-blue-box">
                                    <div onClick={() => navigate("/")} className="back-buttonsvg" style={{ cursor: "pointer" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
                                                fill="#FFFFFF" />
                                        </svg>
                                    </div>

                                    <h2 className="white-color text-center flexauto blue-bar-title">
                                        8th Anniversary
                                    </h2>
                                </div>
                            </div>

                            <div className="p-0 annivsry-img">

                                <div className="tab-content scrollable-content-full " id="maincontentTab">
                                    <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info-tab">
                                        <div className=" pb-100" >
                                            <div className="mainbanner">
                                                <img src="8th-Anniversary-1st.png" />
                                            </div>
                                            <div className="text-center">
                                                <a href="cash-anniversary.html">
                                                    <img src="8th-Anniversary-2nd.png" />
                                                </a>
                                            </div>
                                            <div className="text-center">
                                                <a href="goat.html">
                                                    <img src="8th-Anniversary-3rd.png" />
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};

export default Anniversary;