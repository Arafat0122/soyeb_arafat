import Root from '@/layout/Root';
import About from '@/pages/About/About';
import Contact from '@/pages/Contact/Contact';
import Home from '@/pages/Home/Home.jsx';
import Services from '@/pages/Services/Services';
import Works from '@/pages/Works/Works';
import { createBrowserRouter } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <ScrollToTop />
            <Root />
        </>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/works",
                element: <Works />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/services",
                element: <Services />
            },
        ]
    },
]);