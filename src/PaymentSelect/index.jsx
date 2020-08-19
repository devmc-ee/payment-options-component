import React, {useMemo, useEffect} from 'react';
import {Field, useFormikContext} from "formik";
import {TextField} from "formik-material-ui";
import {MenuItem} from "@material-ui/core";
import {SETTINGS} from "../DATA";
import moment from 'moment';

const PaymentOptions = React.memo(() => {
	const {payment, locale} = SETTINGS;
	const formik = useFormikContext();
	const {method} = formik.values.payment; //selected value
	const {appointment} = formik.values;
	const values = formik.values;

	useEffect(() => {
			if (values.payment.addInfo && Object.keys(payment.methods[method].addInfo).length === 0) {
				values.payment.addInfo = "";
				formik.setValues(values);
			}

		},
	);

	const memoMethodItems = useMemo(() => {
		let methodsItems = [];
		const mAppointment = moment(appointment.date + appointment.time, "YYYY-MM-DD HH:mm")
		for (let i in payment.methods) {
			let disabled = false;
			console.log('render')
			if (payment.methods[i].offset) {
				const mOffset = moment().add(payment.methods[i].offset, 'hours');
				disabled = mOffset.isSameOrAfter(mAppointment);
			}
			methodsItems.push(
				<MenuItem key={i} value={i} disabled={disabled}>
					{payment.methods[i].name[locale]}
					{disabled && payment.methods[i].offsetText[locale].replace('%n', payment.methods[i].offset)}
				</MenuItem>
			);
		}
		return methodsItems;
	}, [locale, payment.methods, appointment]);

	const validateHandler = value => {
		let error;
		if (!value) {
			error = "Required!";
		}
		return error;
	};

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
				{memoMethodItems.map(method => method)}
			</Field>

			{(Object.keys(payment.methods[method].addInfo).length > 0) &&
			<Field
				name={`payment.addInfo`}
				id={`payment.addInfo`}
				component={TextField}
				type="text"
				variant="standard"
				label={payment.methods[method].addInfo.label[locale]}
				placeholder={payment.methods[method].addInfo.placeholder[locale]}
				fullWidth
				validate={validateHandler}
			/>}

		</>
	)
});
export default PaymentOptions;
