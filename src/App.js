import React from 'react';
import {Formik} from "formik";
import PaymentOptions from "./PaymentOptions";
import './App.css';

function App() {
	const initialValues = {
		payment: {
			method: 'salon'
		}
	};
	return (
		<div className="App">
			<Formik initialValues={initialValues} onSubmit={''}>

				{formik => (
					<PaymentOptions/>
				)}

			</Formik>
		</div>
	);
}

export default App;
