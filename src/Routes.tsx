import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";

export const Routes = () => {
    return (
        <main>
            <Switch>
                <Route path={'/'}><Home/></Route>
            </Switch>
        </main>
    )
}