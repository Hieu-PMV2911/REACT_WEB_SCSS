import React from 'react'
import {useState} from 'react'
import './contact.scss'
export default function contact() {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [message, setMessage] = useState(false)
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [input, setInput] = useState('')
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [text, setText] = useState('')
	const handleSubmit = e =>{
		e.preventDefault();
		setMessage(true);
		setInput('')
		setText('')
	}
	return (		
		<div className="contact" id="contact">
			<div className="left">
				<img src="assets/shake.svg" alt="" />
			</div>
			<div className="right">
				<h2>Contact.</h2>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Email..." value={input} onChange={e=>setInput(e.target.value)}/>
					<textarea placeholder="Message..." value={text} onChange={e=>setText(e.target.value)}></textarea>
					<button type="submit">SEND</button>
					{message && <span>Thanks, I'll reply ASAP :))</span>}
				</form>
			</div>
		</div>
	)
}
