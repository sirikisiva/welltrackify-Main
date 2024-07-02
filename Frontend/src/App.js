import PropTypes from 'prop-types'
import React from "react"
import { Navigate } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { connect } from "react-redux"

// Import Routes all
import { userRoutes, authRoutes } from "./routes/allRoutes"

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"

// layouts Format
import VerticalLayout from "./components/VerticalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"

import "./assets/css/materialdesignicons.min.css"
// Import scss
import "./assets/scss/theme.scss"

// Import Firebase Configuration file
// import { initFirebaseBackend } from "./helpers/firebase_helper"

import fakeBackend from "./helpers/AuthType/fakeBackend"

// Activating fake backend
fakeBackend()

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASEURL,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID,
//   measurementId: process.env.REACT_APP_MEASUREMENTID,
// }

// init firebase backend
// initFirebaseBackend(firebaseConfig)

const App = props => {
// {alert('hiii')}
//   useEffect(() => {
//     alert('hii')
//     document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
//   }, [])

  function getLayout() {
    let layoutCls = VerticalLayout
    if (props.layout.layoutType) {
        layoutCls = VerticalLayout
    }
    return layoutCls
  }

  const Layout = getLayout()
  return (
    <React.Fragment>
      <Routes>
      Non-authenticated routes
      {authRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={
            <NonAuthLayout>
              {route.component}
          </NonAuthLayout>
          }
        />
      ))}

      {/* Authenticated routes */}
      {userRoutes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={
            <Authmiddleware>
              <Layout>{route.component}</Layout>
              </Authmiddleware>              
          }
        />
      ))}
      {/* Default route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)
