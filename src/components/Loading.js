import React from "react"
import "./LoadingMockup.css"

const Loading = () => {
  return (
    <>
      <div className="loader-mockup">
        <div className="recipe-card-loading__top">
          <div className="author-loading"></div>
          <div className="recipe-card-loading__menu">
            <span className="menu-dot"></span>
            <span className="menu-dot"></span>
          </div>
        </div>
        <h2 className="recipe-card-loading__title"></h2>
        <div className="img-placeholder-loading"></div>
        <div className="recipe-card-loading__bottom">
          <span></span>
          <div className="reach-icons-loading">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="loader-mockup">
        <div className="recipe-card-loading__top">
          <h3></h3>
          <div className="recipe-card-loading__menu">
            <span className="menu-dot"></span>
            <span className="menu-dot"></span>
          </div>
        </div>
        <h2 className="recipe-card-loading__title"></h2>
        <div className="img-placeholder-loading"></div>
        <div className="recipe-card-loading__bottom">
          <span></span>
          <div className="reach-icons-loading">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loading
