import css from './User.module.css'

const User = ({user}) => {
	const {id, name, username, email} = user;

	return (
		<div className={css.wrap}>
			<div>{id}) -- {name} -- {username} -- {email}</div>
		</div>
	);
};

export default User;