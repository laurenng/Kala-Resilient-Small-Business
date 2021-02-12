import React from 'react';
import './searchStyle.css';

export const TaRect = (technicalObj: any) => {
  let d = technicalObj.technicalObj;
  console.log("IN TEA RECT")
  return(
    <div key = {d.id} className="fundBox">
        <h1>{d.name}</h1>
        <h3 className="fundingFont">{d.description}</h3>
        <div className="moreDetailsBox">
            <p>website: {d.website}</p>
            <p>phone: {d.phone}</p>
            <p>email: {d.email}</p>
        </div>
    </div>
  )
}
