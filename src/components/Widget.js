import React from 'react'
import "../styles/Widget.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widget() {
  const newsArticle = (heading, subtitle) => (
    <div className="widget_article">
      <div className="widgets_articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets_articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widget_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Web Dev ", "Tops news - 324 readers")}
      {newsArticle("Financial World", "Tops news - 2,324 readers")}
      {newsArticle("Tech Innovations", "Tops news - 12,390 readers")}
      {newsArticle("Recession", "Tops news - 190 readers")}
    </div>
  )
}


export default Widget
