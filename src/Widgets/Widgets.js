import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {
  const newsArticle=(heading,subtitle)=>(
    <div className="widgets__article">
      <div className="widgets__articleLeft">
      <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>

    </div>
  )

  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Hi, I am Back", "Top news -9898 readers")}
      {newsArticle("Corona virus:Nepal Updates", "Top news -11011 readers")}
      {newsArticle("Is react too good?","Code -123 readers")}
      {newsArticle("Bitcoins Breaks $65k","crypto -8000 readers")}
      
    </div>
  )
}

export default Widgets
