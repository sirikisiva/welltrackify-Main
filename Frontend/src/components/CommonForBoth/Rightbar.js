import React from "react"
import PropTypes from 'prop-types'


import { connect } from "react-redux"
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
  changeTopbarTheme,
  showRightSidebarAction,
  changeColor,
  changeMode
} from "../../store/actions"

//SimpleBar
import SimpleBar from "simplebar-react"

import { Link } from "react-router-dom"

import "../../components/CommonForBoth/rightbar.scss"

const RightSidebar = props => {
  return (
    <React.Fragment>
      <div className="right-bar" id="right-bar">
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            <div className="rightbar-title px-3 py-4">
              <Link
                to="#"
                onClick={e => {
                  e.preventDefault()
                  props.showRightSidebarAction(false)
                }}
                className="right-bar-toggle float-end"
              >
                <i className="mdi mdi-close noti-icon" />
              </Link>
              <h5 className="m-0">Settings</h5>
            </div>

            <hr className="my-0" />

            <div className="p-4">

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Select Custom Colors
                </span>

                <input
                  type="radio"
                  id="colorDefault"
                  name="colorType"
                  value="default"
                  checked={props.layoutColor === "default"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeColor(e.target.value)
                    }
                  }}

                />
                <label htmlFor="colorDefault">Default</label>
                {"   "}
                <input
                  id="colorRed"
                  type="radio"
                  name="colorType"
                  value="red"
                  checked={props.layoutColor === "red"}

                  onChange={e => {
                    if (e.target.checked) {
                      props.changeColor(e.target.value)
                    }
                  }}
                />
                <label htmlFor="colorRed">Red</label>
                {"   "}
                <input
                  type="radio"
                  id="colorTeal"
                  name="colorType"
                  value="teal"
                  checked={props.layoutColor === "teal"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeColor(e.target.value)
                    }
                  }}
                />
                <label htmlFor="colorTeal">Teal</label>
              </div>

              <div className="radio-toolbar">
                <span className="mb-2 d-block">Mode</span>
                <input
                  type="radio"
                  id="radioLight"
                  name="modetype"
                  value="light"
                  checked={props.layoutMode === "light"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeMode(e.target.value)
                    }
                  }}
                />
                <label htmlFor="radioLight">Light</label>
                {"   "}
                <input
                  type="radio"
                  id="radioDark"
                  name="modetype"
                  value="dark"
                  checked={props.layoutMode === "dark"}
                  onChange={e => {
                    if (e.target.checked) {
                      props.changeMode(e.target.value)
                    }
                  }}
                />
                <label htmlFor="radioDark">Dark</label>
              </div>

              <hr className="mt-1" />
            </div>
          </div>
        </SimpleBar>
      </div>
      <div className="rightbar-overlay" />
    </React.Fragment>
  )
}

RightSidebar.propTypes = {
  changeLayout: PropTypes.func,
  changeLayoutWidth: PropTypes.func,
  changeColor: PropTypes.func,
  changeMode:PropTypes.func,
  changePreloader: PropTypes.func,
  changeSidebarTheme: PropTypes.func,
  changeSidebarType: PropTypes.func,
  changeTopbarTheme: PropTypes.func,
  isPreloader: PropTypes.any,
  layoutType: PropTypes.any,
  layoutWidth: PropTypes.any,
  leftSideBarTheme: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  topbarTheme: PropTypes.any
}

const mapStateToProps = state => {
  return { ...state.Layout }
}

export default connect(mapStateToProps, {
  changeLayout,
  changeColor,
  changeSidebarTheme,
  changeMode,
  changeSidebarType,
  changeLayoutWidth,
  changeTopbarTheme,
  changePreloader,
  showRightSidebarAction,
})(RightSidebar)
