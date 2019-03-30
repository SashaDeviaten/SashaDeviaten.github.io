import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import Switch from "react-router-dom/es/Switch";
import MainPage from "../Pages/MainPage/MainPage";
import Page_Master from "../Pages/Page_Master/Page_Master";
import Page_Clients from "../Pages/Page_Clients/Page_Clients";
import Page_Reviews from "../Pages/Page_Reviews/Page_Reviews.jsx";
import Page_Discount from "../Pages/Page_Discount/Page_Discount.jsx";
import Page_Admin from "../Pages/Page_Admin/Page_Admin.jsx";
import Modals from "../components/Modals/Modals.jsx";

class PagesRouter extends React.Component {

    render() {

        return (
            <Fragment>
                <Switch>
                    <Route path="/main" exact component={MainPage}/>
                    <Route path="/master" component={Page_Master}/>
                    <Route path="/clients" component={Page_Clients}/>
                    <Route path="/reviews" component={Page_Reviews}/>
                    <Route path="/discount" component={Page_Discount}/>
                    <Route path="/admin" component={Page_Admin}/>
                </Switch>
                <Modals/>
            </Fragment>
        );

    }
}

export default PagesRouter;