import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className="page-sidebar ">

                <div className="page-sidebar-wrapper" id="main-menu-wrapper">

                    <div className="profile-info row">

                        <div className="profile-image col-lg-4 col-md-4 col-4">
                            <a href="ui-profile.html">
                                <img src="data/profile/profile-blog.jpg" className="img-fluid rounded-circle" />
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


                        <li className={window.location.pathname=='/'?"open":""}>

                            <Link  to="/">
                            
                                <i className="fa fa-dashboard"></i>
                                <span className="title">Dashboard</span>
                            </Link>

                            
                        </li>
                        <li className={window.location.pathname=='/product'?"open":""}>

                            <Link  to="/product">
                            
                            <i className="fa fa-suitcase"></i>
                                <span className="title">Product</span>
                            </Link>

                        </li>
                        <li className={window.location.pathname=='/supplie'?"open":""}>

                            <Link  to="/supplie">
                            
                            <i className="fa fa-suitcase"></i>
                                <span className="title">Supplie</span>
                            </Link>

                        </li>
                        <li className={window.location.pathname=='/employee'?"open":""}>

                            <Link  to="/employee">
                            
                            <i className="fa fa-suitcase"></i>
                                <span className="title">Employee</span>
                            </Link>

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
                                    <a className="" href="general.html" target='_blank' >General Admin</a>
                                </li>
                                <li>
                                    <a className="" href="hospital.html" target='_blank' >Hospital Admin</a>
                                </li>
                                <li>
                                    <a className="" href="music.html" target='_blank' >Music Admin</a>
                                </li>
                                <li>
                                    <a className="" href="crm.html" target='_blank' >CRM Admin</a>
                                </li>
                                <li>
                                    <a className="" href="socialmedia.html" target='_blank' >Social Media Admin</a>
                                </li>
                                <li>
                                    <a className="" href="freelancing.html" target='_blank' >Freelancing Admin</a>
                                </li>
                                <li>
                                    <a className="" href="university.html" target='_blank' >University Admin</a>
                                </li>
                                <li>
                                    <a className="" href="ecommerce.html" target='_blank' >Ecommerce Admin</a>
                                </li>
                                <li>
                                    <a className="" href="blog.html" target='_blank' >Blog Admin</a>
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
        </>
    )
}
