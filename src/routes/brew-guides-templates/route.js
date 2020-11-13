module.exports = {
	template: "BrewGuidesTemplate",
	all: async () => {
		// The all function returns an array of all possible "request" objects for a route.
		// Here we are explicitly defining every possible variation of this route.
		return [{ slug: "chemex" }, { slug: "aeropress" }, { slug: "pourover" }];
	},
	permalink: ({ request }) => `/brew-guides/${request.slug}/`, // this is the same as /blog/:slug/ in 'parameter based' routing.
	data: async ({ request }) => {
		const guides = {
			chemex: {
				name: "Chemex Guide",
				qualities:
					"Clean Body | Perfect For Two People | Great For Bright Notes",
				description: `The Chemex is a design icon (part of MoMA's permanent collection) thanks to a quirky, eclectic mash-up of laboratory-like features and natural materials. What makes the Chemex truly unique, however, is the design of its proprietary bonded coffee filters which are considerably heavier than others and result in an unmatched clean cup. This makes the Chemex a perfect choice for enjoying more acidic or floral light roast coffees that take on an almost tea-like quality (though it’ll brew you a delicious dark roast as well). The learning curve is a little steeper than other methods but most home-brewers have no trouble making really good coffee after a little practice. If you feel like making a bit more or less coffee, our recipe is totally adjustable, just use a gram of coffee for every 16 grams of water.`,
				steps: [
					{
						id: 1,
						img: "/images/brewGuides/chemex/chemex1.jpg",
						title: "1. Prep Filter",
						step:
							"Unfold the filter with the three-fold side facing the spout. With the filter in the Chemex, pre-heat the vessel with some water heated up to 200F. Try to wet the majority of the filter. Pour out the hot water once it has passed the filter, you do not need to remove the filter when pouring out the water.",
					},
					{
						id: 2,
						img: "/images/brewGuides/chemex/chemex2.jpg",
						title: "2. Grind Your Coffee",
						step:
							"Weight 40g of coffee to and grind them to a medium-coarse setting of your grinder. We are using the Baratza Encore at a setting of 22 here in the office. Once grinned, pour them inside the filter. Make sure that the coffee grounds are level. This will ensure that there is an even extraction.",
					},
					{
						id: 3,
						img: "/images/brewGuides/chemex/chemex3.jpg",
						title: "3. Bloom That Coffee",
						step:
							"Now we will start pouring our water. Remember to zero your scale and then start your timer. Pour in a circular motion, starting from the center of the coffee ground moving towards the outside, 120g of water. Let the coffee bloom for 45 - 60 seconds. This process will ensure that we collected all the sweet and flavor from our beans. ",
					},
					{
						id: 4,
						img: "/images/brewGuides/chemex/chemex4.jpg",
						title: "4. Pour the Remaining Water",
						step:
							"After your bloom, start pouring another 240g of water in the same circular motion. Wait for 40 seconds, or until the majority of the water has drained, to add another 240g of water. This should be a total of 600g of water that we pour on to our coffee.",
					},
					{
						id: 5,
						img: "/images/brewGuides/chemex/chemex5.jpg",
						title: "5. Serve and Enjoy!",
						step:
							"Once the coffee has been filtered, throw away the filter and serve your delicious cup of coffee! The total process can range from 3 - 5 minutes and should serve two cups. Enjoy!",
					},
				],
			},
			aeropress: {
				name: "Aeropress Guide",
				qualities: "Full Body | To Go Ready | All Roasts",
				description:
					"Aeropress. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Donec elementum ligula eu sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida et. Integer lectus",
				steps: [
					{
						id: 1,
						img: "/images/brewGuides/aeropress/aeropress1.jpg",
						title: "1. Prep Filter",
						step:
							"Grab bottom part of the Aeropress and place a filter inside. Water the paper filter and then twist it back on to the body of the Aeropress. The plunger should not be inside the body. Place the Aeropress on top of your cup or vessel. ",
					},
					{
						id: 2,
						img: "/images/brewGuides/aeropress/aeropress2.jpg",
						title: "2. Rinse",
						step:
							"Weight 17g of coffee to and grind them to a fine-medium setting of your grinder. We are using the Baratza Encore at a setting of 15 here in the office. Once grinned, pour them inside the filter. Make sure that the coffee grounds are level. This will ensure that there is an even extraction.",
					},
					{
						id: 3,
						img: "/images/brewGuides/aeropress/aeropress3.jpg",
						title: "3. Add Grounds",
						step:
							"Remember to zero your scale and then start your timer. Pour an initial 40g of water and let is rest for 20 seconds. This bloom will ensure that we are able to release all the body and tastes of the coffee. You may stir the coffee at this point to ensure that all the coffee grounds are wet. After your bloom, start pouring an additional 215g of water to reach a total of 255g. You can stir the coffee once again if you’d like.",
					},
					{
						id: 4,
						img: "/images/brewGuides/aeropress/aeropress4.jpg",
						title: "4. Bloom Coffee",
						step:
							"At the 1:15 minute mark, place the plunger on top of the Aeropress body and push downwards. This extraction should be slow and controlled, lasting around 20 - 30 seconds. If you go under or over, it is okay. Once you reach the bottom you should hear a hissing noise and see bubbles foaming at the bottom or your Aeropress.",
					},
					{
						id: 5,
						img: "/images/brewGuides/aeropress/aeropress5.jpg",
						title: "4. Bloom Coffee",
						step:
							"Once the coffee has been filtered, dispose of the coffee and filter. Now you can enjoy your cup of coffee! The total process can range from 1:50 - 2:30 minutes and should serve one cups. Enjoy!",
					},
				],
			},
			pourover: {
				name: "Pourover Guide",
				qualities: "Single Servings | Clear Notes | Lighter Roasts",
				description:
					"Nuanced and versatile, the pour over is an elegant brewer for those who want to perfect the pour. It’s great for folks who are looking for complete control over brewing extraction. The key here is to pour slow. The entire brew process for a 10oz mug takes about three minutes",
				steps: [
					{
						id: 1,
						img: "/images/brewGuides/pourover/pourover1.jpg",
						title: "1. Prep Filter",
						step:
							"For this pour over recipe, we will use a Kalita Wave 185. With the filter in the Kalita, pre-heat the vessel with some water heated up to 200F. Try to wet the majority of the filter. Pour out the hot water once it has passed the filter, you do not need to remove the filter when pouring out the water.",
					},
					{
						id: 2,
						img: "/images/brewGuides/pourover/pourover2.jpg",
						title: "2. Grind the Beans",
						step:
							"Weight 20g of coffee to and grind them to a fine-medium setting of your grinder. We are using the Baratza Encore at a setting of 15 here in the office. Once grinned, pour them inside the filter. Make sure that the coffee grounds are level. This will ensure that there is an even extraction.",
					},
					{
						id: 3,
						img: "/images/brewGuides/pourover/pourover3.jpg",
						title: "3. Bloom That Coffee",
						step:
							"Now we will start pouring our water. Remember to zero your scale and then start your timer. Pour in a circular motion, starting from the center of the coffee ground moving towards the outside, 60g of water. Let the coffee bloom for 30 - 45 seconds. This process will ensure that we collected all the sweet and flavor from our beans.",
					},
					{
						id: 4,
						img: "/images/brewGuides/pourover/pourover4.jpg",
						title: "4. Pour The Remaining Water",
						step:
							"After your bloom, start pouring another 130g of water in the same circular motion. Wait for 35 seconds, or until the majority of the water has drained, to add another 130g of water. This should be a total of 320g of water that we pour on to our coffee.",
					},
					{
						id: 5,
						img: "/images/brewGuides/pourover/pourover5.jpg",
						title: "5. Enjoy Your Victory",
						step:
							"Once the coffee has been filtered, throw away the filter and serve your delicious cup of coffee! The total process can range from 2 - 4 minutes and should serve one cups. Enjoy!",
					},
				],
			},
		};
		return {
			guides: guides[request.slug],
		};
	},
};
