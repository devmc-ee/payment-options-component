import React from 'react';
import {Field, useFormikContext} from "formik";
import {TextField} from "formik-material-ui";
import {MenuItem} from "@material-ui/core";
import {SETTINGS} from "../DATA";

const PaymentOptions = props => {
	const {payment, locale} = SETTINGS;
	const formik = useFormikContext();
	const {method} = formik.values.payment; //selected
	let methodsItems = [];

	for (let i in payment.methods) {
		console.log('Render')
		methodsItems.push(
			<MenuItem key={i} value={i}>{payment.methods[i].name[locale]}</MenuItem>
		)
	}

	return (
		<>
			<Field
				name={`payment.method`}
				id={`payment.method`}
				component={TextField}
				as="select"
				select={true}
				type="text"
				variant="standard"
				label="Select payment method"

				helperText={payment.methods[method].helperText[locale]}
				fullWidth
			>
				{methodsItems.map(method => method)}
			</Field>
		</>
	)
};
export default PaymentOptions;
