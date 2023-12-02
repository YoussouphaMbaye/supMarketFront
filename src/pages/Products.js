import React, { useEffect, useState } from 'react'
import Chatapi from '../components.js/Chatapi'
import Sidebar from '../components.js/sidebar'
import Topbar from '../components.js/topbar'

import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import axios from 'axios';


export default function () {
    const bUrl=process.env.REACT_APP_BASE_URL;
    const [view, setView] = useState(false);
    const [depName, setDepName] = useState("");
    const [listDepartement,setListDepartement]=useState([]);
    
    const viewClose = () => {
        setView(false)
    }
    const viewOpen = () => {
        setView(true)
    }
    let header=
  {
        'Content-Type': 'application/json'
    };
    const getDepartements=async()=>{
        const response = await axios.get(bUrl+"/api/Department/all").catch((err) => {
          console.log(err);
          
        });  
      if(response) {
        setListDepartement(response.data)
        console.log(response.data)
      }
      
      }
      //===============
      const postDepartements=async()=>{
        const response = await axios.post(bUrl+"/api/Department",{
            name: depName,
            image: "url"
          },{header:header}).catch((err) => {
          console.log(err);
          
        });  
      if(response) {
        //setListDepartement(response.data)
        console.log(response.data);
        viewClose();
        getDepartements();
      }
      
      }
      //===============
      useEffect(()=>{
        getDepartements();
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
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="row">
                                                

                                                <Button onClick={()=>viewOpen()}>
                                                    <i className='fa fa-plus-circle'></i>
                                                </Button>
                                                {/* <a href="/Home/Create" className="btn btn-primary mb-1"> </a> */}
                                                <table className="table card-shadow mt-2 list-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Nº</th>
                                                            <th>Name</th>
                                                            
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                    {
                                                        listDepartement.length>0?listDepartement.map((d,i)=>{
                                                        return <tr><td >{i}</td><td >{d.name}</td></tr>
                                                        }):""
                                                    }
                                                    </tbody>

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

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
                                <div className="content-body">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="row">
                                                <i className="bi bi-database-add"></i>

                                                {/* <a href="/Home/Create" className="btn btn-primary mb-1"> </a> */}
                                                <table className="table card-shadow mt-2 list-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Nº</th>
                                                            <th>Nom</th>
                                                            <th>Email</th>
                                                            <th>Téléphone</th>
                                                            <th>Code employé</th>
                                                            <th>Actions</th>
                                                            <th>Code QR</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>

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
                    <input type="text" placeholder="Name" name="Name" className='form-control' onChange={(e)=>setDepName(e.target.value)} value={depName}/>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={viewClose}>
                        Close
                    </Button>
                    
          <Button variant="primary" onClick={postDepartements}>
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
