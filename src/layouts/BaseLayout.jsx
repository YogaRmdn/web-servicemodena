import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BaseLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}