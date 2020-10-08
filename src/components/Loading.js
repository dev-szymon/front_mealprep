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
        <div className="recipe-card-loading__title"></div>
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
          <div className="recipe-card-loading__menu">
            <span className="menu-dot"></span>
            <span className="menu-dot"></span>
          </div>
        </div>
        <div className="recipe-card-loading__title"></div>
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
