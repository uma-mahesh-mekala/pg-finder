import { useLoaderData } from "react-router-dom";

// function createFaqElemet(props) {
//   return (
//     <div className="faq" key={props.id}>
//       <p>
//         <b>{props.question}</b>
//       </p>
//       <p>{props.answer}</p>
//     </div>
//   );
// }
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
  const res = await fetch("http://localhost:4000/faqs");

  return res.json();
}
export default Faq;
export { faqLoader };
