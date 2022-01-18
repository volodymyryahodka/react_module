import {useState} from 'react';

const Form = ({getFilter}) => {
	const [form, setForm] = useState({name: '', username: '', email: ''});

	const formHandler = (e) => {
	  const eventData = {...form, [e.target.name]: e.target.value}
		setForm({...form, ...eventData})
	}

	const onSubmit = (e) => {
		getFilter(form)
		e.preventDefault()
	}

	return (
		<div>
			<form>
			 	 <label>Name: <input type="text" name={'name'} value={form.name} onChange={formHandler}/></label>
				 <label>Username: <input type="text" name={'name'} value={form.username} onChange={formHandler}/></label>
				 <label>Email: <input type="text" name={'name'} value={form.email} onChange={formHandler}/></label>
				<button onClick={onSubmit}>SEARCH</button>
			</form>
		</div>
	);
};

export default Form;