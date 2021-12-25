import React from "react"
import LayoutComponent from "../Layout/Layout"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import { MobileAppProvider } from "../Context/MobileAppContext"
import MobileList from "../Pages/MobileList"
import MobileForm from "../Pages/MobileForm"
import SearchSection from "../Pages/SearchSection"

const Routes = () => {
  return (
    <>
      <Router>
        <MobileAppProvider>
          <Switch>

            <Route path="/" exact>
              <LayoutComponent content={<Home />} />
            </Route>

            <Route path="/about" exact>
              <LayoutComponent content={<About />} />
            </Route>

            <Route path="/mobile-list" exact>
              <LayoutComponent content={<MobileList />} />
            </Route>

            <Route path="/mobile-form" exact>
              <LayoutComponent content={<MobileForm/>}/>
            </Route>

            <Route path="/mobile-form/edit/:Id" exact>
              <LayoutComponent content={<MobileForm/>}/>
            </Route>

            <Route path="/search/:valueOfSearch" exact>
              <LayoutComponent content={<SearchSection />}/>
            </Route>

          </Switch>
        </MobileAppProvider>
      </Router>
    </>
  )

}

export default Routes