import React from 'react';
import {Formik, Form} from "formik";
import PaymentSelect from "./PaymentSelect";
import './App.css';


function App() {
	const initialValues = {
		appointment: {
			"date": "2020-08-20",
			"time": "11:00"
		},
		payment: {
			method: "salon"
		}
	};


	return (
		<div className="App">
			<Formik initialValues={initialValues} onSubmit={''}>

				{formik => (
					<Form>
						<PaymentSelect />

						<pre>
                            {JSON.stringify(
								formik.values,
								null,
								2
							)}
                        </pre>
					</Form>

				)}

			</Formik>
		</div>
	);
}

export default App;
