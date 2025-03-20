import { Faq3 } from "./faq3"

const demoData = {
  heading: "FAQs",
  description:
    "Everything you need to know about NextGen Research Program. Can't find the answer you're looking for? Feel free to contact our support team.",
  items: [
    {
        id: "faq-1",
        question: "How many times can I apply?",
        answer:
          "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition.",
      },
      {
        id: "faq-2",
        question: "Is it difficult to get accepted?",
        answer:
          "Once your order is shipped, you will receive an email with a tracking number. You can use this number on our website to track your order.",
      },
      {
        id: "faq-3",
        question: "How long does the decision take?",
        answer:
          "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.",
      },
  ],
  supportHeading: "Still have questions?",
  supportDescription:
    "Can't find the answer you're looking for? Our support team is here to help with any questions about the program or application process.",
  supportButtonText: "Contact Support",
  supportButtonUrl: "/contact",
};

function Faq3Demo() {
  return <Faq3 {...demoData} />;
}

export { Faq3Demo }; 