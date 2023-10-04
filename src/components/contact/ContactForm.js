import React, { useState } from 'react';
import Modal from './Modal';
import emailjs from 'emailjs-com';
import {
	EMAIL_SERVICE_ID,
	EMAIL_TEMPLATE_ID,
	EMAIL_PUBLIC_KEY,
} from '../../utils/constants';

function ContactForm() {
	const [showModal, setShowModal] = useState(false);

	function sendEmail(e) {
		e.preventDefault();
		emailjs
			.sendForm(
				EMAIL_SERVICE_ID,
				EMAIL_TEMPLATE_ID,
				e.target,
				EMAIL_PUBLIC_KEY
			)
			.then(
				(result) => {
					setShowModal(true);
					setTimeout(() => setShowModal(false), 5000);
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	return (
		<>
			<form
				className="flex flex-col h-full space-y-8 leading-loose tracking-wide"
				onSubmit={sendEmail}
			>
				<div className="flex space-x-4">
					<input
						type="text"
						name="name"
						placeholder="Your name"
						autoComplete="name"
						required
						className="bg-light-green border-2 w-1/2 h-full rounded"
					/>
					<input
						type="email"
						name="email"
						placeholder="Your email"
						autoComplete="email"
						required
						className="bg-light-green w-1/2 h-full rounded"
					/>
				</div>
				<input
					type="text"
					name="subject"
					placeholder="Subject"
					autoComplete="off"
					className="bg-light-green rounded"
				/>
				<textarea
					name="message"
					placeholder="Your message..."
					autoComplete="off"
					required
					className="bg-light-green h-2/3 rounded"
				/>
				<input
					type="submit"
					value="Send Message"
					className="bg-light-green text-center p-4 font-body cursor-pointer rounded hover:scale-105 hover:tracking-wider active:scale-95 transform duration-200"
				/>
			</form>
			<Modal showModal={showModal} setShowModal={setShowModal} />
		</>
	);
}

export default ContactForm;
