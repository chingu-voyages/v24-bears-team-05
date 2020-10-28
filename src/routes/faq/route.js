module.exports = {
    template: "FAQ",
    all: async () => [{ slug: "/faq/" }],
    permalink: ({ request }) => request.slug,
    data: async ({ request }) => {
        const faqs = {
            coffeeQ: [
                {
                    id: 1,
                    question: 'How do you source your coffee?',
                    answer: 'We travel to the farmers and have them introduce their best crops to us.'
                },
                {
                    id: 2,
                    question: 'When do you roast your coffees?',
                    answer: 'We roast at the beginning of the week in order to have our coffee fresh in each order.'
                }
            ],
            orderingQ: [
                {
                    id: 1,
                    question: 'Where is my coffee?',
                    answer: 'Your coffee is on the way'
                },
                {
                    id: 2,
                    question: 'Is there a tracking order?',
                    answer: 'Yes, each order is paired with an email containing the tracking order for your purchase.'
                }
                
            ]
        }
        return {
            faqs: faqs
        }
    }
  };
  