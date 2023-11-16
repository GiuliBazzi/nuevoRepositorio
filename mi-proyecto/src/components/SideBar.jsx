import React from "react";
import '../assets/css/app.css'
import logo from '../assets/images/logo-DH.png'
function SideBar() {
    return (
        <>
            <ul
                className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
                id="accordionSidebar"
            >
                {/* Sidebar - Brand */}
                <a
                    className="sidebar-brand d-flex align-items-center justify-content-center"
                    href="/"
                >
                    <div className="sidebar-brand-icon">
                        <img
                            className="w-100"
                            src={logo}
                            alt="Digital House"
                        />
                    </div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard - DH movies</span>
                    </a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Heading */}
                <div className="sidebar-heading">Actions</div>
                {/* Nav Item - Pages */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder" />
                        <span>Pages</span>
                    </a>
                </li>
                {/* Nav Item - Charts */}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area" />
                        <span>Charts</span>
                    </a>
                </li>
                {/* Nav Item - Tables */}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table" />
                        <span>Tables</span>
                    </a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
        </>
    )
}
export default SideBar 