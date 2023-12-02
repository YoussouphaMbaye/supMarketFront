import React from 'react'

export default function ListUsers() {
  return (
    <>
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
    </>
  )
}
