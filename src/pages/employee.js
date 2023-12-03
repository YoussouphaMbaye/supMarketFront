import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../components.js/sidebar';
import Topbar from '../components.js/topbar';
import Chatapi from '../components.js/Chatapi';
import { Button, Modal } from 'react-bootstrap';
export default function Employee() {
    const bUrl = process.env.REACT_APP_BASE_URL;
    const [view, setView] = useState(false);
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastname, setlastname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [status, setStatus] = useState("");
    const [storeId, setStoreId] = useState("");
    const [username, setPassword] = useState("");
    const [password, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [listSupplie, setEmployee] = useState([]);
    let header =
    {
        'Content-Type': 'application/json'
    };
    const viewClose = () => {
        setView(false)
    }
    const viewOpen = () => {
        setView(true)
    }
    const postEmployee=async()=>{
        const response = await axios.post(bUrl + "/api/Employee", {
            firstname: firstName,
            lastname: lastname,
            middlename: middlename,
            phone: phone,
            email: email,
            status: status,
            storeId: storeId,
            username:username,
            password:password,
            address: address
          }, { header: header }).catch((err) => {
            console.log(err);

        });
        if (response) {
            //setListDepartement(response.data)
            console.log(response.data);
            viewClose();
            getEmployee();
        }
    }
    const getEmployee = async () => {
        const response = await axios.get(bUrl + "/api/Employee/all").catch((err) => {
            console.log(err);

        });
        if (response) {
            setEmployee(response.data)
            console.log(response.data)
        }

    }
    useEffect(()=>{
        getEmployee();
    },[])
  return (
    <div>
    <Topbar />

    <div className="page-container row-fluid">


        <Sidebar />


        <section id="main-content" className=" ">
            <section className="wrapper main-wrapper" >

                <div className='col-xl-12 col-lg-12 col-md-12 col-12'>
                    <div className="page-title">

                        <div className="float-left">
                            <h1 className="title">All Departements</h1>                            </div>

                        <div className="float-right d-none">
                            <ol className="breadcrumb">
                                <li>
                                    <Link to='/'><i className="fa fa-home"></i>Home</Link>
                                </li>
                                <li>
                                    <a href="blo-users.html">Supplie</a>
                                </li>
                                <li className="active">
                                    <strong>All Supplies</strong>
                                </li>
                            </ol>
                        </div>

                    </div>
                </div>
                <div className="clearfix"></div>
                <div className="col-xl-12">
                    <section className="box ">
                        <header className="panel_header">
                            <h2 className="title float-left">All Supplis</h2>
                            <div className="actions panel_actions float-right">
                                <i className="box_toggle fa fa-chevron-down"></i>
                                <i className="box_setting fa fa-cog" data-toggle="modal" href="#section-settings"></i>
                                <i className="box_close fa fa-times"></i>
                            </div>
                        </header>
                        <div className="content-body">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-12">
                                    <div className="row">


                                        <Button onClick={() => viewOpen()}>
                                            <i className='fa fa-plus-circle'></i>
                                        </Button>
                                        {/* <a href="/Home/Create" className="btn btn-primary mb-1"> </a> */}
                                        <table className="table card-shadow mt-2 list-table">
                                            <thead>
                                                <tr>
                                                    <th>Nº</th>
                                                    <th>Name</th>
                                                    <th>Pone</th>
                                                    <th>Email</th>
                                                    <th>Address</th>

                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    listSupplie.length > 0 ? listSupplie.map((d, i) => {
                                                        return <tr>
                                                            <td >{i}</td>
                                                            <td >{d.firstname} {d.lastname}</td>
                                                            <td >{d.phone}</td>
                                                            <td >{d.email}</td>
                                                            <td >{d.address}</td>
                                                            </tr>
                                                    }) : ""
                                                }
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>




            </section>
        </section>

        <Chatapi />
                                               
        <Modal show={view} onHide={viewClose} className="modal-xl">
            <Modal.Header closeButton>
                <Modal.Title>Détails</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <div class="form-group mb-2">
                <input type="text" placeholder="First Name" name="Name" className='form-control' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div class="form-group mb-2">
                <input type="text" placeholder="Last Name" name="Name" className='form-control' onChange={(e) => setlastname(e.target.value)} value={lastname} />
                </div>
                <div class="form-group mb-2">
                <input type="text" placeholder="Middle Name" name="MdName" className='form-control' onChange={(e) => setMiddlename(e.target.value)} value={middlename} />
                </div>
                <div class="form-group mb-2">
                <input type="text" placeholder="Status" name="Name" className='form-control' onChange={(e) => setStatus(e.target.value)} value={status} />
                </div>
                <div class="form-group mb-2">
                <input type="text" placeholder="Address" name="address" className='form-control' onChange={(e) => setAddress(e.target.value)} value={address} />
                </div>
                
                
                <div class="form-group mb-2">
                <input type="text" placeholder="Phone" name="phone" className='form-control' onChange={(e) => setPhone(e.target.value)} value={phone} />
                </div>
                <div class="form-group mb-2">
                <input type="text" placeholder="Email" name="email" className='form-control' onChange={(e) => setEmail(e.target.value)} value={email} />                
                </div>
                    
                    
                    
                    
                <div class="form-group mb-2">
                    
                    <input type="text" placeholder="Store" name="store" className='form-control' onChange={(e) => setStoreId(e.target.value)} value={storeId} />
                </div>
                <div class="form-group mb-2">
                    <input type="text" placeholder="username" name="username" className='form-control' onChange={(e) => setUsername(e.target.value)} value={username} />   
                </div>
                <div class="form-group mb-2">
                    <input type="text" placeholder="password" name="password" className='form-control' onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={viewClose}>
                    Close
                </Button>

                <Button variant="primary" onClick={postEmployee}>
                    Ajouter
                </Button>
            </Modal.Footer>
        </Modal>


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

