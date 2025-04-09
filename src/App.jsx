import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-neutral-900 text-white">

            {/* Toast Notification */}
            <Toaster position="top-center" reverseOrder={false} />

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center p-4">
                <Home />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default App;
