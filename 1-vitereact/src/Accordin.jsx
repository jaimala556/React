import React from "react";

const Accordin = () => {
    const [question,setQuestion] = useState(false)
  const questionsAndAnswers = [
    {
      question: "What is the capital of France?",
      answer: "The capital of France is Paris.",
    },
    {
      question: "How many continents are there?",
      answer:
        "There are seven continents: Africa, Antarctica, Asia, Europe, North America, Australia, and South America.",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      answer: "Romeo and Juliet was written by William Shakespeare.",
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "The largest planet in our solar system is Jupiter.",
    },
    {
      question: "What is the boiling point of water?",
      answer: "The boiling point of water is 100°C (212°F) at sea level.",
    },
    {
      question: "What is the currency of Japan?",
      answer: "The currency of Japan is the Japanese Yen (¥).",
    },
    {
      question: "How many states are there in the United States?",
      answer: "There are 50 states in the United States.",
    },
    {
      question: "Who painted the Mona Lisa?",
      answer: "The Mona Lisa was painted by Leonardo da Vinci.",
    },
    {
      question: "What is the fastest land animal?",
      answer: "The fastest land animal is the cheetah.",
    },
    {
      question: "What is the formula for water?",
      answer: "The chemical formula for water is H₂O.",
    },
  ];

  return (
    <div className="flex flex-col gap-2 min-h-screen w-full">
      <div className="w-full h-full max-w-lg mx-auto my-10">
        {/* {questionsAndAnswers.map((item, index) => (
          <div key={index}>
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            
              >
                <span>{item.question}</span>
                <svg
                  data-accordion-icon
                  class="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
                className=""
            >
              <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <span>{item.answer}</span>
              </div>
            </div>
          </div>
        ))} */}

        <div>
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200  focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            >
              <span>hey,are you there</span>
              <svg
                data-accordion-icon
                class="w-3 h-3 rotate-180 shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div  className="">
            <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <span>yes ,i am there</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordin;
