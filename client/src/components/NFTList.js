import React from "react";
import Container from "react-bootstrap/esm/Container";
import axios from 'axios'
import { useState, useEffect } from 'react';
import '../App.css';

function NFTList(props) {
    return <div className="row">
        <div className="col">
        {props.contractaddress}
      </div>
      <div className="col">
      <img
     src={props.url} width="150" alt={props.id}></img>
      </div>
      <div className="col">
        {props.tokenid}
      </div>
      <div className="col">
        {props.creator}
      </div>
    </div>
    
  }
  
  export default NFTList