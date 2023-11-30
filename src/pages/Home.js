import React from 'react'

export default function Home() {
  return (
    <div>
            
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
       
        <div className="page-container row-fluid">

            
            <div className="page-sidebar ">

                
                <div className="page-sidebar-wrapper" id="main-menu-wrapper"> 

                    <div className="profile-info row">

                        <div className="profile-image col-lg-4 col-md-4 col-4">
                            <a href="ui-profile.html">
                                <img src="data/profile/profile-blog.jpg" className="img-fluid rounded-circle"/>
                            </a>
                        </div>

                        <div className="profile-details col-lg-8 col-md-8 col-8">

                            <h3>
                                <a href="ui-profile.html">Mark Yurey</a>

                                
                                <span className="profile-status online"></span>
                            </h3>

                            <p className="profile-title">Administrator</p>

                        </div>

                    </div>
                   


                    <ul className='wraplist'>	


                        <li className=""> 
                            <a href="index-blog.html">
                                <i className="fa fa-dashboard"></i>
                                <span className="title">Dashboard</span>
                            </a>
                        </li>
                        <li className=""> 
                            <a href="javascript:;">
                                <i className="fa fa-edit"></i>
                                <span className="title">Blogs</span>
                                <span className="arrow "></span>
                            </a>
                            <ul className="sub-menu" >
                                <li>
                                    <a className="" href="blo-blogs.html" >All Blogs</a>
                                </li>
                                <li>
                                    <a className="" href="blo-blog-add.html" >Add Blog</a>
                                </li>
                                <li>
                                    <a className="" href="blo-blog-edit.html" >Edit Blog</a>
                                </li>
                                <li>
                                    <a className="" href="blo-blog-view.html" >View Blog</a>
                                </li>
                            </ul>
                        </li>
                        <li className=""> 
                            <a href="blo-search.html">
                                <i className="fa fa-search"></i>
                                <span className="title">Search</span>
                            </a>
                        </li>
                        <li className=""> 
                            <a href="javascript:;">
                                <i className="fa fa-upload"></i>
                                <span className="title">Media</span>
                                <span className="arrow "></span>
                            </a>
                            <ul className="sub-menu" >
                                <li>
                                    <a className="" href="blo-media.html" >All Media</a>
                                </li>
                                <li>
                                    <a className="" href="blo-upload.html" >Upload</a>
                                </li>
                            </ul>
                        </li>
                        <li className=""> 
                            <a href="javascript:;">
                                <i className="fa fa-sitemap"></i>
                                <span className="title">Categories</span>
                                <span className="arrow "></span>
                            </a>
                            <ul className="sub-menu" >
                                <li>
                                    <a className="" href="blo-categories.html" >All Categories</a>
                                </li>
                                <li>
                                    <a className="" href="blo-category-add.html" >Add Category</a>
                                </li>
                                <li>
                                    <a className="" href="blo-category-edit.html" >Edit Category</a>
                                </li>
                            </ul>
                        </li>
                        <li className=""> 
                            <a href="javascript:;">
                                <i className="fa fa-files-o"></i>
                                <span className="title">Pages</span>
                                <span className="arrow "></span>
                            </a>
                            <ul className="sub-menu" >
                                <li>
                                    <a className="" href="blo-pages.html" >All Pages</a>
                                </li>
                                <li>
                                    <a className="" href="blo-page-add.html" >Add Page</a>
                                </li>
                                <li>
                                    <a className="" href="blo-page-edit.html" >Edit Page</a>
                                </li>
                                <li>
                                    <a className="" href="blo-page-view.html" >View Page</a>
                                </li>
                            </ul>
                        </li>
                        <li className="open"> 
                            <a href="javascript:;">
                                <i className="fa fa-user"></i>
                                <span className="title">Users</span>
                                <span className="arrow open"></span>
                            </a>
                            <ul className="sub-menu" style={{display:"block"}}>
                                <li>
                                    <a className="active" href="blo-users.html" >All Users</a>
                                </li>
                                <li>
                                    <a className="" href="blo-user-add.html" >Add User</a>
                                </li>
                                <li>
                                    <a className="" href="blo-user-edit.html" >Edit User</a>
                                </li>
                                <li>
                                    <a className="" href="blo-user-profile.html" >User Profile</a>
                                </li>
                            </ul>
                        </li>
                        <li className=""> 
                            <a href="javascript:;">
                                <i className="fa fa-envelope"></i>
                                <span className="title">Mailbox</span>
                                <span className="arrow "></span><span className="badge badge-orange">4</span>
                            </a>
                            <ul className="sub-menu" >
                                <li>
                                    <a className="" href="blo-mail-inbox.html" >Inbox</a>
                                </li>
                                <li>
                                    <a className="" href="blo-mail-compose.html" >Compose</a>
                                </li>
                                <li>
                                    <a className="" href="blo-mail-view.html" >View</a>
                                </li>
                            </ul>
                        </li>
                        <li className=""> 
                            <a href="javascript:;">
                                <i className="fa fa-bar-chart"></i>
                                <span className="title">Reports</span>
                                <span className="arrow "></span>
                            </a>
                            <ul className="sub-menu" >
                                <li>
                                    <a className="" href="blo-report-site.html" >Site</a>
                                </li>
                                <li>
                                    <a className="" href="blo-report-visitors.html" >Visitors</a>
                                </li>
                            </ul>
                        </li>
                        <li className=""> 
                            <a href="javascript:;">
                                <i className="fa fa-tags"></i>
                                <span className="title">Tags</span>
                                <span className="arrow "></span>
                            </a>
                            <ul className="sub-menu" >
                                <li>
                                    <a className="" href="blo-tags.html" >All Tags</a>
                                </li>
                                <li>
                                    <a className="" href="blo-tag-add.html" >Add Tag</a>
                                </li>
                                <li>
                                    <a className="" href="blo-tag-edit.html" >Edit Tag</a>
                                </li>
                            </ul>
                        </li>
                        <li className=""> 
                            <a href="javascript:;">
                                <i className="fa fa-suitcase"></i>
                                <span className="title">Multi Purpose</span>
                                <span className="arrow "></span><span className="badge badge-orange">NEW</span>
                            </a>
                            <ul className="sub-menu" >
                                <li>
                                    <a className="" href="general.html"  target = '_blank' >General Admin</a>
                                </li>
                                <li>
                                    <a className="" href="hospital.html"  target = '_blank' >Hospital Admin</a>
                                </li>
                                <li>
                                    <a className="" href="music.html"  target = '_blank' >Music Admin</a>
                                </li>
                                <li>
                                    <a className="" href="crm.html"  target = '_blank' >CRM Admin</a>
                                </li>
                                <li>
                                    <a className="" href="socialmedia.html"  target = '_blank' >Social Media Admin</a>
                                </li>
                                <li>
                                    <a className="" href="freelancing.html"  target = '_blank' >Freelancing Admin</a>
                                </li>
                                <li>
                                    <a className="" href="university.html"  target = '_blank' >University Admin</a>
                                </li>
                                <li>
                                    <a className="" href="ecommerce.html"  target = '_blank' >Ecommerce Admin</a>
                                </li>
                                <li>
                                    <a className="" href="blog.html"  target = '_blank' >Blog Admin</a>
                                </li>
                            </ul>
                        </li>

                    </ul>

                </div>
               



                <div className="project-info">

                    <div className="block1">
                        <div className="data">
                            <span className='title'>New&nbsp;Users</span>
                            <span className='total'>245</span>
                        </div>
                        <div className="graph">
                            <span className="sidebar_orders">...</span>
                        </div>
                    </div>

                    <div className="block2">
                        <div className="data">
                            <span className='title'>Subscribers</span>
                            <span className='total'>990</span>
                        </div>
                        <div className="graph">
                            <span className="sidebar_visitors">...</span>
                        </div>
                    </div>

                </div>



            </div>
            
            <section id="main-content" className=" ">
                <section className="wrapper main-wrapper" >

                    <div className='col-xl-12 col-lg-12 col-md-12 col-12'>
                        <div className="page-title">

                            <div className="float-left">
                                <h1 className="title">All Users</h1>                            </div>

                            <div className="float-right d-none">
                                <ol className="breadcrumb">
                                    <li>
                                        <a href="index.html"><i className="fa fa-home"></i>Home</a>
                                    </li>
                                    <li>
                                        <a href="blo-users.html">Users</a>
                                    </li>
                                    <li className="active">
                                        <strong>All Users</strong>
                                    </li>
                                </ol>
                            </div>

                        </div>
                    </div>
                    <div className="clearfix"></div>

                    <div className="col-xl-12">
                        <section className="box ">
                            <header className="panel_header">
                                <h2 className="title float-left">All Users</h2>
                                <div className="actions panel_actions float-right">
                                    <i className="box_toggle fa fa-chevron-down"></i>
                                    <i className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings"></i>
                                    <i className="box_close fa fa-times"></i>
                                </div>
                            </header>
                            <div className="content-body">    <div className="row">
                                    <div className="col-lg-12 col-md-12 col-12">

                                        <div className="row">
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src="data/blo-users/user-1.jpg" alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><a href="blo-user-profile.html">Mrs. Brodeur</a></h4>
                                                        <span className='team-member-edit'><a href="blo-user-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Age: 45yrs, Administrator</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src="data/blo-users/user-2.jpg" alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><a href="blo-user-profile.html">Ms. Latshaw</a></h4>
                                                        <span className='team-member-edit'><a href="blo-user-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Age: 39yrs, Contributor</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src="data/blo-users/user-3.jpg" alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><a href="blo-user-profile.html">Mrs. Clementina</a></h4>
                                                        <span className='team-member-edit'><a href="blo-user-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Age: 34yrs, Administrator</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src="data/blo-users/user-4.jpg" alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><a href="blo-user-profile.html">Mr. Carri Busey</a></h4>
                                                        <span className='team-member-edit'><a href="blo-user-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Age: 29yrs, Contributor</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src="data/blo-users/user-5.jpg" alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><a href="blo-user-profile.html">Ms. Clay Dock</a></h4>
                                                        <span className='team-member-edit'><a href="blo-user-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Age: 65yrs, Editor</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src="data/blo-users/user-6.jpg" alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><a href="blo-user-profile.html">Mr. Mark Peskin</a></h4>
                                                        <span className='team-member-edit'><a href="blo-user-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Age: 57yrs, Administrator</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src="data/blo-users/user-7.jpg" alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><a href="blo-user-profile.html">Mr. Arthur John.</a></h4>
                                                        <span className='team-member-edit'><a href="blo-user-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Age: 65yrs, Subscriber</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src="data/blo-users/user-8.jpg" alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><a href="blo-user-profile.html">Mr. Carri Busey</a></h4>
                                                        <span className='team-member-edit'><a href="blo-user-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Age: 29yrs, Administrator</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src="data/blo-users/user-9.jpg" alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><a href="blo-user-profile.html">Ms. Clay Dock</a></h4>
                                                        <span className='team-member-edit'><a href="blo-user-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Age: 65yrs, Editor</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src="data/blo-users/user-10.jpg" alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><a href="blo-user-profile.html">Mr. Mark Peskin</a></h4>
                                                        <span className='team-member-edit'><a href="blo-user-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Age: 57yrs, Author</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src="data/blo-users/user-11.jpg" alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><a href="blo-user-profile.html">Mr. Arthur John.</a></h4>
                                                        <span className='team-member-edit'><a href="blo-user-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Age: 65yrs, Subscriber</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-4 col-xl-3">
                                                <div className="team-member ">
                                                    <div className="team-img">
                                                        <img className="img-fluid" src="data/blo-users/user-12.jpg" alt=""/>
                                                    </div>
                                                    <div className="team-info">
                                                        <h4><a href="blo-user-profile.html">Mrs. Jonh A.</a></h4>
                                                        <span className='team-member-edit'><a href="blo-user-edit.html"><i className='fa fa-pencil icon-xs'></i></a></span>
                                                        <span>Age: 29yrs, Teacher</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section></div>


                </section>
            </section>
           
            <div className="page-chatapi hideit">

                <div className="search-bar">
                    <input type="text" placeholder="Search" className="form-control"/>
                </div>

                <div className="chat-wrapper">
                    <h4 className="group-head">Groups</h4>
                    <ul className="group-list list-unstyled">
                        <li className="group-row">
                            <div className="group-status available">
                                <i className="fa fa-circle"></i>
                            </div>
                            <div className="group-info">
                                <h4><a href="#">Work</a></h4>
                            </div>
                        </li>
                        <li className="group-row">
                            <div className="group-status away">
                                <i className="fa fa-circle"></i>
                            </div>
                            <div className="group-info">
                                <h4><a href="#">Friends</a></h4>
                            </div>
                        </li>

                    </ul>


                    <h4 className="group-head">Favourites</h4>
                    <ul className="contact-list">

                        <li className="user-row" id='chat_user_1' data-user-id='1'>
                            <div className="user-img">
                                <a href="#"><img src="data/profile/avatar-1.png" alt=""/></a>
                            </div>
                            <div className="user-info">
                                <h4><a href="#">Clarine Vassar</a></h4>
                                <span className="status available" data-status="available"> Available</span>
                            </div>
                            <div className="user-status available">
                                <i className="fa fa-circle"></i>
                            </div>
                        </li>
                        <li className="user-row" id='chat_user_2' data-user-id='2'>
                            <div className="user-img">
                                <a href="#"><img src="data/profile/avatar-2.png" alt=""/></a>
                            </div>
                            <div className="user-info">
                                <h4><a href="#">Brooks Latshaw</a></h4>
                                <span className="status away" data-status="away"> Away</span>
                            </div>
                            <div className="user-status away">
                                <i className="fa fa-circle"></i>
                            </div>
                        </li>
                        <li className="user-row" id='chat_user_3' data-user-id='3'>
                            <div className="user-img">
                                <a href="#"><img src="data/profile/avatar-3.png" alt=""/></a>
                            </div>
                            <div className="user-info">
                                <h4><a href="#">Clementina Brodeur</a></h4>
                                <span className="status busy" data-status="busy"> Busy</span>
                            </div>
                            <div className="user-status busy">
                                <i className="fa fa-circle"></i>
                            </div>
                        </li>

                    </ul>


                    <h4 className="group-head">More Contacts</h4>
                    <ul className="contact-list">

                        <li className="user-row" id='chat_user_4' data-user-id='4'>
                            <div className="user-img">
                                <a href="#"><img src="data/profile/avatar-4.png" alt=""/></a>
                            </div>
                            <div className="user-info">
                                <h4><a href="#">Carri Busey</a></h4>
                                <span className="status offline" data-status="offline"> Offline</span>
                            </div>
                            <div className="user-status offline">
                                <i className="fa fa-circle"></i>
                            </div>
                        </li>
                        <li className="user-row" id='chat_user_5' data-user-id='5'>
                            <div className="user-img">
                                <a href="#"><img src="data/profile/avatar-5.png" alt=""/></a>
                            </div>
                            <div className="user-info">
                                <h4><a href="#">Melissa Dock</a></h4>
                                <span className="status offline" data-status="offline"> Offline</span>
                            </div>
                            <div className="user-status offline">
                                <i className="fa fa-circle"></i>
                            </div>
                        </li>
                        <li className="user-row" id='chat_user_6' data-user-id='6'>
                            <div className="user-img">
                                <a href="#"><img src="data/profile/avatar-1.png" alt=""/></a>
                            </div>
                            <div className="user-info">
                                <h4><a href="#">Verdell Rea</a></h4>
                                <span className="status available" data-status="available"> Available</span>
                            </div>
                            <div className="user-status available">
                                <i className="fa fa-circle"></i>
                            </div>
                        </li>
                        <li className="user-row" id='chat_user_7' data-user-id='7'>
                            <div className="user-img">
                                <a href="#"><img src="data/profile/avatar-2.png" alt=""/></a>
                            </div>
                            <div className="user-info">
                                <h4><a href="#">Linette Lheureux</a></h4>
                                <span className="status busy" data-status="busy"> Busy</span>
                            </div>
                            <div className="user-status busy">
                                <i className="fa fa-circle"></i>
                            </div>
                        </li>
                        <li className="user-row" id='chat_user_8' data-user-id='8'>
                            <div className="user-img">
                                <a href="#"><img src="data/profile/avatar-3.png" alt=""/></a>
                            </div>
                            <div className="user-info">
                                <h4><a href="#">Araceli Boatright</a></h4>
                                <span className="status away" data-status="away"> Away</span>
                            </div>
                            <div className="user-status away">
                                <i className="fa fa-circle"></i>
                            </div>
                        </li>
                        <li className="user-row" id='chat_user_9' data-user-id='9'>
                            <div className="user-img">
                                <a href="#"><img src="data/profile/avatar-4.png" alt=""/></a>
                            </div>
                            <div className="user-info">
                                <h4><a href="#">Clay Peskin</a></h4>
                                <span className="status busy" data-status="busy"> Busy</span>
                            </div>
                            <div className="user-status busy">
                                <i className="fa fa-circle"></i>
                            </div>
                        </li>
                        <li className="user-row" id='chat_user_10' data-user-id='10'>
                            <div className="user-img">
                                <a href="#"><img src="data/profile/avatar-5.png" alt=""/></a>
                            </div>
                            <div className="user-info">
                                <h4><a href="#">Loni Tindall</a></h4>
                                <span className="status away" data-status="away"> Away</span>
                            </div>
                            <div className="user-status away">
                                <i className="fa fa-circle"></i>
                            </div>
                        </li>
                        <li className="user-row" id='chat_user_11' data-user-id='11'>
                            <div className="user-img">
                                <a href="#"><img src="data/profile/avatar-1.png" alt=""/></a>
                            </div>
                            <div className="user-info">
                                <h4><a href="#">Tanisha Kimbro</a></h4>
                                <span className="status idle" data-status="idle"> Idle</span>
                            </div>
                            <div className="user-status idle">
                                <i className="fa fa-circle"></i>
                            </div>
                        </li>
                        <li className="user-row" id='chat_user_12' data-user-id='12'>
                            <div className="user-img">
                                <a href="#"><img src="data/profile/avatar-2.png" alt=""/></a>
                            </div>
                            <div className="user-info">
                                <h4><a href="#">Jovita Tisdale</a></h4>
                                <span className="status idle" data-status="idle"> Idle</span>
                            </div>
                            <div className="user-status idle">
                                <i className="fa fa-circle"></i>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>


            <div className="chatapi-windows ">


            </div>    </div>
       
        <div className="modal" id="section-settings" tabindex="-1" role="dialog" aria-labelledby="ultraModal-Label" aria-hidden="true">
            <div className="modal-dialog animated bounceInDown">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 className="modal-title">Section Settings</h4>
                    </div>
                    <div className="modal-body">

                        Body goes here...

                    </div>
                    <div className="modal-footer">
                        <button data-dismiss="modal" className="btn btn-default" type="button">Close</button>
                        <button className="btn btn-success" type="button">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
       
    
    </div>
  )
}
