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
					<div>
						<PaymentOptions/>
						<pre>
                            {JSON.stringify(
                                formik.values,
                                null,
                                2
                            )}
                        </pre>
					</div>

				)}

			</Formik>
		</div>
	);
}

export default App;
