# Number Sorting Quiz App

This is a simple number sorting quiz app with three components: QuizGame, Correct, and Wrong.

## Usage

1. When the app is started, the QuizGame component is rendered. In this component, the user is presented with five random numbers each time.

2. The user is required to drag and drop the numbers into the buckets provided below the numbers. The drag and drop functionality is implemented using HTML5 drag and drop APIs.

3. Once the user has dropped all five numbers into the buckets, they can click the "Check" button.

4. After clicking the "Check" button, the user is redirected to either the Correct page or the Wrong page based on whether they have arranged the numbers in ascending order or not.

5. On the Correct or Wrong page, the user is shown the output screen along with a "Reset" button. Clicking the "Reset" button redirects the user to the home page where they are assigned five new random numbers, and they can play again.

6. If the user has not filled all the buckets and presses the "Check" button, an alert is displayed to remind them to fill all the buckets.

## Setup

1. Clone the repository.

2. Install the necessary dependencies by running `npm install`.

3. Start the development server by running `npm run dev`.

4. Open the app in your browser at `http://localhost:5173`.

## Technologies Used

- React (Vite)
- HTML5 Drag and Drop API
- React Router

Feel free to explore the code and customize it according to your needs.

---

This optimized README provides a brief overview of the app, its components, usage instructions, setup steps, and technologies used. It focuses on essential information while maintaining clarity and conciseness.
