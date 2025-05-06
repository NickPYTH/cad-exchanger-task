import {render} from "react-dom";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";

import "./shared/config/i18n/i18n";

render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)
