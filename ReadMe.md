# Hacker News Articles Sorting Test

## Description

This project focuses on validating the sorting order of articles on the Hacker News homepage using Playwright. The test ensures that the first 100 articles are displayed from newest to oldest, maintaining a smooth user experience.

## Technologies and Techniques Used

- **JavaScript**: Used to write the test scripts.
- **Playwright**: A testing framework used to automate browser interactions and validate the article sorting order.
- **Node.js**: Runtime environment for executing JavaScript test scripts.

## Setup Instructions

1. **Clone the Repository**: Clone this repository from GitHub to your local environment using:

   ```bash
   git clone git@github.com:<your-username>/project-name.git
   ```

   Replace <your-username> with your GitHub username.

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies:

```bash
npm install
```

3. **Open in an IDE**: Open the project folder in Visual Studio Code (or your preferred IDE) to access and run the tests.

## Running Tests

1. **Run the Playwright Tests**: Ensure all dependencies are installed, then run the following command:

   ```bash
   npx playwright test
   ```

2. **View Test Results**: Check the terminal output to see if the articles are sorted correctly or if there are any test failures.

## Project Structure

- **tests/**: Contains the main test file (`hackerNews.spec.js`) for validating the sorting of articles on Hacker News.
- **playwright.config.js**: Configuration file for setting up Playwright.
- **test-results/**: Stores test execution results.
- **playwright-report/**: Contains generated reports from Playwright test runs.

## Troubleshooting

If you encounter test failures:

- Confirm that the Hacker News site structure has not changed.
- Ensure your environment is set up correctly and that you have internet access.

## License

This project is licensed under the MIT License.
