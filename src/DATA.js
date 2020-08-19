export const SETTINGS = {
	locale: 'en',

	payment: {
		methods:
			{
				salon: {
					name: {
						en: "Pay in salon (by cash/ card)"
					},
					helperText: {
						en: ""
					},
					offset: 0, //hours in advance of the appointment date and time
					offsetText:{
						en: ""
					}

				},
				bank: {
					name: {
						en: "Bank transfer"
					},
					helperText: {
						en: "Invoice will be sent for proceeding bank transfer"
					},
					offset: 24, //hours in advance of the appointment date and time
					offsetText:{
						en: "(min. %nh in adv.)"
					}
				},
				sportId: {
					name: {
						en: "SportID (ticket)"
					},
					helperText: {
						en: "Only SportId tickets are accepted"
					},
					offset: 0, //hours in advance of the appointment date and time
					offsetText:{
						en: ""
					}
				},
				giftCard: {
					name: {
						en: "Gift Card"
					},
					helperText: {
						en: ""
					},
					offset: 0, //hours in advance of the appointment date and time
					offsetText:{
						en: ""
					}
				}
			}

	}
}