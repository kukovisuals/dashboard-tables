import React from 'react';
import {Menu, SideBarMenu} from '../Components';


function Details() {
    return (
        <div className="Details">
            
            <Menu/>
            <SideBarMenu/>
                    
            <main className="details-grid">
                <div className="details-grid-container">
                        <div className="details-grid-previous">
                            <span>
                                -----
                            </span>
                            <span>Back to users</span>
                        </div>
                        <div className="details-grid-title">
                            <span>
                                User Details
                            </span>

                            <button>BLACKLIST USER</button>

                            <button>ACTIVATE USER</button>
                        </div>

                        <div className="details-grid-table">
                            <div className="details-grid-pix">
                                <span>
                                    &#128589;
                                </span>
                            </div>
                            <div className="details-grid-name">
                                <span>
                                    Grace Effiom
                                </span>
                                <br/>
                                <span>
                                    LGJNF545D
                                </span>
                            </div>
                            <div className="details-grid-stars">
                                <span>
                                    Users Tier
                                </span>
                                <br/>
                                <span>
                                    * * * *
                                </span>
                            </div>
                            <div className="details-grid-bank">
                                <span>
                                    $524,000.00
                                </span>
                                <br/>
                                <span>
                                    somethign/bank
                                </span>
                            </div>
                        </div>
                        <div className="details-options">
                            <div className="details-options-container">
                                <div className="details-options-general">
                                    <span>
                                        general
                                    </span>
                                </div>
                                <div className="details-options-documents">
                                    <span>
                                        documents
                                    </span>
                                </div>
                                <div className="details-options-bank">
                                    <span>
                                        Bank Details
                                    </span>
                                </div>
                                <div className="details-options-loans">
                                    <span>
                                        loans
                                    </span>
                                </div>
                                <div className="details-options-saving">
                                    <span>
                                        Saving
                                    </span>
                                </div>
                                <div className="details-options-app">
                                    <span>
                                        App and System
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className="detials-display">
                            <div className="detials-display-container">
                                <div className="detials-display-grid">
                                    <div className="detials-display-grid-title">
                                        <span>
                                            Personal Information
                                        </span>
                                    </div>
                                    <div className="detials-display-grid-item">
                                        <div className="detials-display-grid-item-title">
                                            <span>
                                                Full name
                                            </span>
                                        </div>
                                        <div className="detials-display-grid-item-description">
                                            <span>
                                                Grace Efron
                                            </span>
                                        </div>
                                    </div>
                                </div>
                             
                            </div>
                        </div>

                </div>
            </main>    
        </div>
    );
}

export default Details;
