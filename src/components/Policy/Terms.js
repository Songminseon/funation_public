import React from "react";
import Modal from "react-modal";
import "../../modal.css"
import Content from "./TermsContent";



const customStyles = {
    overlay: {
        backgroundColor: 'rgba(52,45,37,0.64)'
    }
}

const Terms = ({ modalIsOpen, closeModal }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="product Modal"
            className="result-modal"
            style={customStyles}
            ariaHideApp={false}
        >
            <Content
                closeModal={closeModal}
            />

        </Modal>
    );
};

export default Terms;