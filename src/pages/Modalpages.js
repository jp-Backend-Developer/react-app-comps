import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";


function ModalPages() {

    const [modalShow, setModalShow] = useState(false);

    const handleClick = () => {
        setModalShow(!modalShow);
    }

    const handleClose = () => {
        setModalShow(false);
    }

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    )

    return (
        <div>
            <Button onClick={handleClick} primary >show modal</Button>
            { modalShow && modal }
        </div>
    )

}

export default ModalPages;