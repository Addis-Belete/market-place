import "../styles/globals.css";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<NavBar />

			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
