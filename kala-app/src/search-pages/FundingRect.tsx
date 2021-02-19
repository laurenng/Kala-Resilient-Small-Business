import React from 'react';
import './searchStyle.css';

export  const FundingRect = (fundingObj: any) => {
  let d = fundingObj.fundingObj;
  let shorten = d.description.split(' ').slice(0,25).join(' ')
  let shortenWebsite = d.url.split('/')[2];
  console.log(shortenWebsite)

  const toFundingDetails = () => {
    console.log("need to switch page");
    
  }

  return(
    <div className="fundBox" onClick={toFundingDetails}>
        <h1>{d.name}</h1>
        <h3 className="fundingFont">{shorten}</h3>
        <div className="moreDetailsBox">
        <a href={d.url} rel="noreferrer" target="_blank">Visit {shortenWebsite}</a>
        </div>
    </div>
  )
}

