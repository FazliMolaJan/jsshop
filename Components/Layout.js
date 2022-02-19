import Navbar from "./Navbar";
import Theme from "./Theme.js";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <Theme />
            <Navbar />
              <main>{children}</main>
            <Footer />
        </>
    );
};
