import { GoBell } from "react-icons/go";
import Button from "../components/Button";

function ButtonPages() {

    const handleClick = () => {
    }

    return (
        <div>
            <div>
                <Button className="mb-5" warning rounded onClick={handleClick}><GoBell />Click me!</Button>
            </div>
            <div>
                <Button success>See more</Button>
            </div>
            <div>
                <Button danger outline>Buy now</Button>
            </div>
            <div>
                <Button secondary>Hide ads</Button>
            </div>
            <div>
                <Button primary>Somethig</Button>
            </div>
        </div>
    );
}

export default ButtonPages;
