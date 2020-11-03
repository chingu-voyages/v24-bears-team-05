module.exports = {
	template: "FAQ",
	all: async () => [{ slug: "/faq/" }],
	permalink: ({ request }) => request.slug,
	data: async ({ request }) => {
		const faqs = {
			orderingQ: [
				{
					id: 1,
					question: "Why was my card charged twice?",
					answer:
						"Sometimes there can be an error in processing cards online. This is likely a pending pre-authorization you see on your statement and it should disappear from your credit card transactions within a couple days. Still experiencing an issue? Please feel free to email us at info@bearcoffee.com",
				},
				{
					id: 2,
					question: "Why is my shipment delayed?",
					answer:
						"Couriers can sometimes experience influxes in orders that might overwhelm and skew expected shipment timeframes. If you haven’t already, sign up for updates on your package through your courier by referencing your tracking number.",
				},
				{
					id: 3,
					question: "Where is my order confirmation?",
					answer:
						"Sometimes, our emails end up in people’s junk folders. Other times, the confirmation is sent as a text and is blocked by the phone carrier. Why does this happen? When checking out using PayPal/Amazon or ShopPay they will save your phone number and the notifications are sent to you as a text message. If you have any questions about this, please feel free to please email info@bearcoffee.com providing us with the name on your order. We can then look up your order and provide you with that confirmation.",
				},
				{
					id: 4,
					question: "Why was my order marked as delivered but it was not?",
					answer:
						"Please try checking with your neighbors and your postal delivery person. Also check around your normal delivery place to see if it’s been put somewhere different. Sometimes carriers will mark packages as being delivered but not actually deliver them until the next day. Unfortunately, we do not have any additional information than what you have received. Once we hand off the package to USPS, it’s in their hands to ensure delivery. All that being said, if you are unable to track down your package, please let us know by sending your name and order number to info@bearcoffee.com with a description of the issue you’re experiencing. We want to make sure that you are happy with your purchase from us, and we’ll look into sending a replacement order.",
				},
				{
					id: 5,
					question: "What do I do if my order arrived damaged?",
					answer:
						"We appreciate your business and want to make it right. Please email us at info@bearcoffee.com with your name and order number and a description of the issue you’re experiencing and we will work to make it right.",
				},
				{
					id: 5,
					question: "What do I do if my order arrived damaged?",
					answer:
						"We appreciate your business and want to make it right. Please email us at info@bearcoffee.com with your name and order number and a description of the issue you’re experiencing and we will work to make it right.",
				},
			],
			coffeeQ: [
				{
					id: 1,
					question: "When Do You Roast?",
					answer:
						"All of our coffee for the cafes and for online orders are roasted to order, and we roast and ship our coffees Monday through Friday. At most, they are shipped out or delivered to our cafes within 24hrs of being roasted.",
				},
				{
					id: 2,
					question: "How do I brew my coffee? ",
					answer:
						"Curious about how to brew your coffee or use that new brew method? Click here where you can read our  brewing guides. You can also visit each coffee’s product page for videos of how we brewed that specific coffee on filter and espresso.",
				},
				{
					id: 3,
					question: "What is a Traditional to Modern Scale?",
					answer:
						"The Traditional to Modern Scale on our bags refers to the expected flavors in coffee. If the scale is marked more towards Traditional, you can expect flavors like nuts, dry wine, bakers chocolate, etc. With coffees marked more towards Modern, you can expect flavors like citrus, floral, fruit, etc. Typically, but not always, the more modern the coffee, the lighter we usually roast it.",
				},
				{
					id: 4,
					question: "Are we Fair Trade?",
					answer:
						"The short answer is yes and no. Essentially, we meet Fair Trade requirements but we don’t have the actual certifications. We tend to pay 3-4x more than the Fair Trade for our coffees, meaning we go above and beyond what Fair Trade pricing is.",
				},
				{
					id: 5,
					question: "What is the best way to store my coffee?",
					answer:
						"Once one of our bags of coffee is opened, it is good for about 30 days. Our 10 oz boxes are created to be tight and act as coffee containers. Once you open your new coffee for the first time, just roll the bag up and place it back in the box with the lid shut. This will keep your coffee tasting good. Once you have opened the 2lb and 5lb bags, simply folding it over and clamping it shut will keep your coffee fresh. However, for optimal freshness, we recommend an airtight container for these sizes of bags.",
				},
			],
		};
		return {
			faqs: faqs,
		};
	},
};
