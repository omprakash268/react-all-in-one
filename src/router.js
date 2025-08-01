import { createBrowserRouter } from "react-router-dom";
import ReactForm from "./components/ReactForm/ReactForm";
import Home from "./components/Home/Home";
import App from "./App";
import { ProgressBarHome } from "./components/ProgressBarHome/ProgressBarHome";
import { AutoComplete } from "./components/AutoComplete/AutoComplete";
import { AccordionHome } from "./components/AccordionHome/AccordionHome";


export const routes = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: 'form',
                Component: ReactForm
            },
            {
                path: 'progress-bar',
                Component: ProgressBarHome
            },
            {
                path: 'auto-complete',
                Component: AutoComplete
            },
            {
                path: 'accordion',
                Component: AccordionHome
            },
        ]
    }
]);