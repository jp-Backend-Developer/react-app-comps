import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPages from "./pages/AccordionPages"
import DropdownPages from "./pages/DropdownPages";
import ButtonPages from "./pages/ButtonPages";

function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                <Route path="/accordion">
                    <AccordionPages />
                </Route>
                <Route path="/">
                    <DropdownPages />
                </Route>
                <Route path="/buttons">
                    <ButtonPages />
                </Route>
            </div>
            <div>
            </div>
        </div>
    )
}

export default App;
