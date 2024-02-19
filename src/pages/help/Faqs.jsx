import { useLoaderData } from "react-router-dom";
import faqs from "../../data/faqs";

function Faq() {
  const faqs = useLoaderData();
  return (
    <div className="faqs">
      <h3>Frequently Asked Question</h3>
      {faqs.map((faq) => {
        return (
          <div className="faq" key={faq.id}>
            <p>
              <b>{faq.question}</b>
            </p>
            <p>{faq.answer}</p>
          </div>
        );
      })}
    </div>
  );
}

async function faqLoader() {
  const res = faqs;

  return res;
}
export default Faq;
export { faqLoader };
