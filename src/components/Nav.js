import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Nav() {
	return (
		<Wrapper>
			<Brand>
				{/* <img src='#' alt='brang-image' /> */}
				<p>Logo</p>
			</Brand>

			<nav>
				<List>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/posts'>Posts</Link>
					</li>
					<li>
						<Link to='/create-post'>Create a post</Link>
					</li>
				</List>
			</nav>
		</Wrapper>
	)
}

const Wrapper = styled.header`
	background-color: #1e1e1e;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 50px;
`
const Brand = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #1e1e1e;
	color: #e1e1e1;
	font-size: 25px;
	width: 150px;
	height: 50px;
`

const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 25px;

	li {
		list-style: none;
		a {
			text-decoration: none;
			color: #e1e1e1;
		}
	}
`

export default Nav
