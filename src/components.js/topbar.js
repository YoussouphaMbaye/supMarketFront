import React from 'react'

export default function Topbar() {
  return (
    <>
        <div className='page-topbar '>
            <div className='logo-area'>

            </div>
            <div className='quick-area'>
                <div className='float-left'>
                    <ul className="info-menu left-links list-inline list-unstyled">
                        <li className="sidebar-toggle-wrap list-inline-item">
                            <a href="#" data-toggle="sidebar" className="sidebar_toggle">
                                <i className="fa fa-bars"></i>
                            </a>
                        </li>
                        <li className="message-toggle-wrapper list-inline-item">
                            <a href="#" data-toggle="dropdown" className="toggle">
                                <i className="fa fa-envelope"></i>
                                <span className="badge badge-pill badge-primary">7</span>
                            </a>
                            <ul className="dropdown-menu messages animated fadeIn">

                                <li className="list dropdown-item">

                                    <ul className="dropdown-menu-list list-unstyled ps-scrollbar">
                                        <li className="unread status-available">
                                            <a href="javascript:;">
                                                <div className="user-img">
                                                    <img src="data/profile/avatar-1.png" alt="user-image" className="rounded-circle img-inline"/>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Clarine Vassar</strong>
                                                        <span className="time small">- 15 mins ago</span>
                                                        <span className="profile-status available float-right"></span>
                                                    </span>
                                                    <span className="desc small">
                                                        Sometimes it takes a lifetime to win a battle.
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" status-away">
                                            <a href="javascript:;">
                                                <div className="user-img">
                                                    <img src="data/profile/avatar-2.png" alt="user-image" className="rounded-circle img-inline"/>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Brooks Latshaw</strong>
                                                        <span className="time small">- 45 mins ago</span>
                                                        <span className="profile-status away float-right"></span>
                                                    </span>
                                                    <span className="desc small">
                                                        Sometimes it takes a lifetime to win a battle.
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" status-busy">
                                            <a href="javascript:;">
                                                <div className="user-img">
                                                    <img src="data/profile/avatar-3.png" alt="user-image" className="rounded-circle img-inline"/>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Clementina Brodeur</strong>
                                                        <span className="time small">- 1 hour ago</span>
                                                        <span className="profile-status busy float-right"></span>
                                                    </span>
                                                    <span className="desc small">
                                                        Sometimes it takes a lifetime to win a battle.
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" status-offline">
                                            <a href="javascript:;">
                                                <div className="user-img">
                                                    <img src="data/profile/avatar-4.png" alt="user-image" className="rounded-circle img-inline"/>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Carri Busey</strong>
                                                        <span className="time small">- 5 hours ago</span>
                                                        <span className="profile-status offline float-right"></span>
                                                    </span>
                                                    <span className="desc small">
                                                        Sometimes it takes a lifetime to win a battle.
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" status-offline">
                                            <a href="javascript:;">
                                                <div className="user-img">
                                                    <img src="data/profile/avatar-5.png" alt="user-image" className="rounded-circle img-inline"/>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Melissa Dock</strong>
                                                        <span className="time small">- Yesterday</span>
                                                        <span className="profile-status offline float-right"></span>
                                                    </span>
                                                    <span className="desc small">
                                                        Sometimes it takes a lifetime to win a battle.
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" status-available">
                                            <a href="javascript:;">
                                                <div className="user-img">
                                                    <img src="data/profile/avatar-1.png" alt="user-image" className="rounded-circle img-inline"/>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Verdell Rea</strong>
                                                        <span className="time small">- 14th Mar</span>
                                                        <span className="profile-status available float-right"></span>
                                                    </span>
                                                    <span className="desc small">
                                                        Sometimes it takes a lifetime to win a battle.
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" status-busy">
                                            <a href="javascript:;">
                                                <div className="user-img">
                                                    <img src="data/profile/avatar-2.png" alt="user-image" className="rounded-circle img-inline"/>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Linette Lheureux</strong>
                                                        <span className="time small">- 16th Mar</span>
                                                        <span className="profile-status busy float-right"></span>
                                                    </span>
                                                    <span className="desc small">
                                                        Sometimes it takes a lifetime to win a battle.
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" status-away">
                                            <a href="javascript:;">
                                                <div className="user-img">
                                                    <img src="data/profile/avatar-3.png" alt="user-image" className="rounded-circle img-inline"/>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Araceli Boatright</strong>
                                                        <span className="time small">- 16th Mar</span>
                                                        <span className="profile-status away float-right"></span>
                                                    </span>
                                                    <span className="desc small">
                                                        Sometimes it takes a lifetime to win a battle.
                                                    </span>
                                                </div>
                                            </a>
                                        </li>

                                    </ul>

                                </li>

                                <li className="external">
                                    <a href="javascript:;">
                                        <span>Read All Messages</span>
                                    </a>
                                </li>
                            </ul>

                        </li>
                        <li className="notify-toggle-wrapper list-inline-item">
                            <a href="#" data-toggle="dropdown" className="toggle">
                                <i className="fa fa-bell"></i>
                                <span className="badge badge-pill badge-orange">3</span>
                            </a>
                            <ul className="dropdown-menu notifications animated fadeIn">
                                <li className="total dropdown-item">
                                    <span className="small">
                                        You have <strong>3</strong> new notifications.
                                        <a href="javascript:;" className="float-right">Mark all as Read</a>
                                    </span>
                                </li>
                                <li className="list dropdown-item">

                                    <ul className="dropdown-menu-list list-unstyled ps-scrollbar">
                                        <li className="unread available"> 
                                            <a href="javascript:;">
                                                <div className="notice-icon">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Server needs to reboot</strong>
                                                        <span className="time small">15 mins ago</span>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="unread away"> 
                                            <a href="javascript:;">
                                                <div className="notice-icon">
                                                    <i className="fa fa-envelope"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>45 new messages</strong>
                                                        <span className="time small">45 mins ago</span>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" busy"> 
                                            <a href="javascript:;">
                                                <div className="notice-icon">
                                                    <i className="fa fa-times"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Server IP Blocked</strong>
                                                        <span className="time small">1 hour ago</span>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" offline"> 
                                            <a href="javascript:;">
                                                <div className="notice-icon">
                                                    <i className="fa fa-user"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>10 Orders Shipped</strong>
                                                        <span className="time small">5 hours ago</span>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" offline"> 
                                            <a href="javascript:;">
                                                <div className="notice-icon">
                                                    <i className="fa fa-user"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>New Comment on blog</strong>
                                                        <span className="time small">Yesterday</span>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" available"> 
                                            <a href="javascript:;">
                                                <div className="notice-icon">
                                                    <i className="fa fa-check"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Great Speed Notify</strong>
                                                        <span className="time small">14th Mar</span>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className=" busy"> 
                                            <a href="javascript:;">
                                                <div className="notice-icon">
                                                    <i className="fa fa-times"></i>
                                                </div>
                                                <div>
                                                    <span className="name">
                                                        <strong>Team Meeting at 6PM</strong>
                                                        <span className="time small">16th Mar</span>
                                                    </span>
                                                </div>
                                            </a>
                                        </li>

                                    </ul>

                                </li>

                                <li className="external dropdown-item">
                                    <a href="javascript:;">
                                        <span>Read All Notifications</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="d-sm-none d-none searchform list-inline-item">
                            <div className="input-group">
                                <span className="input-group-addon input-focus">
                                    <i className="fa fa-search"></i>
                                </span>
                                <form action="search-page.html" method="post">
                                    <input type="text" className="form-control animated fadeIn" placeholder="Search & Enter"/>
                                    <input type='submit' value=""/>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>		
                <div className='float-right'>
                    <ul className="info-menu right-links list-inline list-unstyled">
                        <li className="profile list-inline-item">
                            <a href="#" data-toggle="dropdown" className="toggle">
                                <img src="data/profile/profile-blog.jpg" alt="user-image" className="rounded-circle img-inline"/>
                                <span>Mark Yurey <i className="fa fa-angle-down"></i></span>
                            </a>
                            <ul className="dropdown-menu profile animated fadeIn">
                                <li className="dropdown-item">
                                    <a href="#settings">
                                        <i className="fa fa-wrench"></i>
                                        Settings
                                    </a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#profile">
                                        <i className="fa fa-user"></i>
                                        Profile
                                    </a>
                                </li>
                                <li className="dropdown-item">
                                    <a href="#help">
                                        <i className="fa fa-info"></i>
                                        Help
                                    </a>
                                </li>
                                <li className="last dropdown-item">
                                    <a href="ui-login.html">
                                        <i className="fa fa-lock"></i>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="chat-toggle-wrapper list-inline-item">
                            <a href="#" data-toggle="chatbar" className="toggle_chat">
                                <i className="fa fa-comments"></i>
                                <span className="badge badge-pill badge-warning">9</span>
                                <i className="fa fa-times"></i>
                            </a>
                        </li>
                    </ul>			
                </div>		
            </div>

        </div>
    </> 
  )
}
