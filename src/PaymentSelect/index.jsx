import React from 'react';
import {Field, useFormikContext} from "formik";
import {TextField} from "formik-material-ui";
import {MenuItem} from "@material-ui/core";
import {SETTINGS} from "../DATA";
import moment from 'moment';

const {payment, locale} = SETTINGS;


const PaymentOptions = React.memo(() => {
	const formik = useFormikContext();
	const {method} = formik.values.payment; //selected value
	const {appointment} = formik.values;
	const mAppointment = moment(appointment.date + appointment.time, "YYYY-MM-DD HH:mm")

	let methodsItems = [];

	for (let i in payment.methods) {
		let disabled = false;

		if (payment.methods[i].offset) {
			const mOffset = moment().add(payment.methods[i].offset, 'hours');
			disabled = mOffset.isSameOrAfter(mAppointment);

		}
		methodsItems.push(
			<MenuItem key={i} value={i} disabled={disabled}>
				{payment.methods[i].name[locale]}
				{disabled && payment.methods[i].offsetText[locale].replace('%n', payment.methods[i].offset )}
			</MenuItem>
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
				fullWidth
				helperText={payment.methods[method].helperText[locale]}
			>
				{methodsItems.map(method => method)}
			</Field>
		</>
	)
});
export default PaymentOptions;