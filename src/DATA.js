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
					offset: 0 //hours in advance of the appointment date and time

				},
				bank: {
					name: {
						en: "Bank transfer (invoice)"
					},
					helperText: {
						en: "Invoice will be issued for making prepayment via bank transfer"
					},
					offset: 5 //hours in advance of the appointment date and time
				},
				sportId: {
					name: {
						en: "SportID (ticket)"
					},
					helperText: {
						en: "Only SportId tickets are accepted"
					},
					offset: 0 //hours in advance of the appointment date and time
				},
				giftCard: {
					name: {
						en: "Gift Card"
					},
					helperText: {
						en: ""
					},
					offset: 0 //hours in advance of the appointment date and time
				}
			}

	}
}