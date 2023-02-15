import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPages from "./pages/AccordionPages"
import DropdownPages from "./pages/DropdownPages";
import ButtonPages from "./pages/ButtonPages";
import ModalPages from "./pages/Modalpages";
import TablePages from "./pages/TablePages";
import CounterPage from "./pages/CounterPage";

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
                <Route path='/modal'>
                    <ModalPages />
                </Route>
                <Route path="/table">
                    <TablePages />
                </Route>
                <Route path="/counter">
                    <CounterPage initialCount={10} />
                </Route>
            </div>
        </div>
    )
}

export default App;
