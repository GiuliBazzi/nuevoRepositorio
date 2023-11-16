import React from "react";
import Footer from "./Footer";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop";
import '../assets/css/app.css'
function ContentWrapper() {
    return (
            <>
                {/* Content Wrapper */}
                <div id="content">
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        <TopBar/>
                        {/* End of Topbar */}
                        <div className="row">
                        {/* Content Row Top */}
                        <ContentRowTop/>
                        {/*End Content Row Top*/}
                        </div>
                    </div>
                    {/* End of MainContent */}
                    {/* Footer */}
                    <Footer/>
                    {/* End of Footer */}
                </div>
             </div>
            </>
    )
}
export default ContentWrapper 