import React from 'react'
import ListUsers from './listUsers'
import Sidebar from '../components.js/sidebar'
import Topbar from '../components.js/topbar'
import Chatapi from '../components.js/Chatapi'

export default function Home() {
  return (
    <div>
            
        <Topbar/>
       
        <div className="page-container row-fluid">

            
           <Sidebar/>
            
            <ListUsers/>
           
            <Chatapi/>


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
