import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
     <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={200}
        className='modal'
        >
        <h3 className='modal-title'>Selected option:</h3>
        {props.selectedOption && <p className='modal-body'>{props.selectedOption}</p>}
        <button className='button' onClick={props.handleClearSelectedOption}>OK</button>
    </Modal>
)

export default OptionModal