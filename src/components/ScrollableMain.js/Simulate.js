import React, { useState } from "react";
import Modal from "react-modal";
import { questionsAndAnswers } from "./Data";
import OutboundIcon from "@mui/icons-material/Outbound";

Modal.setAppElement("#root");

const Simulate = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false); // Store the quiz result

  const handleOpenModal = () => {
    if (checked1 && checked2) {
      // Open the modal or navigate to a different page within your React app
      setModalIsOpen(true);
    } else {
      // Show the error modal
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all answers are correct
    const isQuizCorrect = Object.keys(questionsAndAnswers).every(
      (question) =>
        answers[question].toLowerCase() ===
        questionsAndAnswers[question].answer.toLowerCase()
    );

    // Set the result in state
    setShowResult(true);
    setIsCorrect(isQuizCorrect);
  };

  const handleOptionClick = (questionKey, selectedOption) => {
    setAnswers({
      ...answers,
      [questionKey]: selectedOption,
    });
  };

  return (
    <div className="mx-10 my-4">
      <div>
        <div className="bg-bluebg p-4 rounded shadow-md">
          <div className="flex justify-between w-full">
            <h2 className="text-lg font-semibold">Instructions</h2>
          </div>
          <p className="text-black font-semibold">
            Welcome to our Solar System Simulation. Read the following
            instructions before continuing:
          </p>
          <ul className="list-none ml-6 text-black font-semibold ">
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => setChecked1(!checked1)}
                  checked={checked1}
                  className="appearance-none mr-2 checked:bg-green-600 checked:border-transparent w-5 h-5 border border-gray-300 rounded-md cursor-pointer"
                />
                Click on any planet to expand its view.
              </label>
            </li>
            <li>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  onChange={() => setChecked2(!checked2)}
                  checked={checked2}
                  className="appearance-none mr-2 checked:bg-green-600 checked:border-transparent w-5 h-5 border border-gray-300 rounded-md cursor-pointer"
                />
                Learn and answer the quiz questions to test your knowledge.
              </label>
            </li>
          </ul>
          <a href="http://127.0.0.1:5500/spcaeApp/index.html">
            <button
              className={`flex w-full justify-center bg-bluetxt text-white p-2 mt-4 ${
                checked1 && checked2 ? "" : "cursor-not-allowed"
              }`}
              disabled={!checked1 || !checked2}
            >
              Open Simulator
            </button>
          </a>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="modal"
            overlayClassName="overlay"
          >
            <h2 className="text-red-600">Error</h2>
            <p>Please check both instructions before opening the simulator.</p>
            <button onClick={closeModal}>Close</button>
          </Modal>
        </div>
      </div>

      <div className="mt-5">
        <div className="text-center mb-4 font-bold text-bluetxt mr-4 ">
         
          <a href="https://www.blockadelabs.com/?_gl=1*3dilgp*_ga*MTM5MTc0NTQ5OS4xNjk2NzUzMzcz*_ga_YQXS5JLFDH*MTY5Njc1MzM3Mi4xLjEuMTY5Njc1NTkzOS4zNy4wLjA.">
            <span className="bg-white p-1 rounded-sm ml-4">
              Got Ideas? Make your own simulations  <OutboundIcon />
            </span>
          </a>
        </div>
        <iframe
          title="myuni"
          src="https://skybox.blockadelabs.com/e/9988083b5536581e5177c521e70be233"
          width="642"
          height="300"
          allow="fullscreen"
        ></iframe>
      </div>
      <div>
        <div className="bg-bluebg p-4 mt-4 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Quiz</h2>
          <p className="text-black font-semibold">
            Test your knowledge about the solar system with this quiz.
          </p>
          <form onSubmit={handleSubmit}>
            <ol className="list-decimal ml-6 mt-4 text-black">
              {Object.keys(questionsAndAnswers).map((questionKey) => (
                <li key={questionKey}>
                  <div className="mb-4">
                    <p className="mb-2">
                      {questionsAndAnswers[questionKey].question}
                    </p>
                    <div className="flex w-full">
                      {questionsAndAnswers[questionKey].options.map(
                        (option, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() =>
                              handleOptionClick(questionKey, option)
                            }
                            className={`mr-2 mb-2 bg-bluetxt text-white px-4 py-2 rounded  w-1/4 ${
                              answers[questionKey] === option
                                ? "bg-bluetxt2"
                                : ""
                            }`}
                          >
                            {option}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          {showResult && (
            <div className="mt-4 text-lg font-semibold">
              {isCorrect
                ? "Congratulations! You got all the answers correct!"
                : "Oops! Try the Simulation again."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Simulate;
