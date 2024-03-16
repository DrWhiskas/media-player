import React from "react";
import { IoClose } from 'react-icons/io5';

// Define the Modal component
export default function Modal({closeModal, messageModal}){
    return (
			<div className="modal">
				<div className="modal__container">
					{/* Button to close the modal */}
					<button className="upper-close" onClick={closeModal}>
						<IoClose />
					</button>
					{/* Display the modal message */}
					<p className="modal__text">{messageModal}</p>
					{/* Button to close the  modal */}
					<button className="btn modal__btn" onClick={closeModal}>Close</button>
				</div>
			</div>
		);
}