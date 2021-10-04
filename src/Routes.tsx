import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home/Home";

export const Routes = () => {
    return (
        <Switch>
            <Route path={'/'}><Home/></Route>
        </Switch>
    )
}