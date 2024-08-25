# Email Service Project

This project is a resilient email-sending service implemented in TypeScript/JavaScript. It includes features such as retry logic, idempotency, rate limiting, and a simple queue system.

## Key Features

- **Retry Mechanism:** Implements exponential backoff for retrying failed email sends.
- **Fallback Mechanism:** Automatically switches between two mock email providers on failure.
- **Idempotency:** Ensures that each email is sent only once based on a unique ID.
- **Rate Limiting:** Limits the rate of email sending to avoid overwhelming the providers.
- **Status Tracking:** Keeps track of email sending attempts and their outcomes.

### Prerequisites

- Node.js (>=14.x)
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/email-service.git
   cd email-service

2. **Install dependencies:**
   ```bash
   npm install

3. **Run the tests using Jest:**
    ```bash
    npx jest

### Usage
To use the email service, enqueue email-sending requests using the EmailQueue class. The service handles retries, rate limiting, and idempotency checks automatically.

### Deployment
The project is suitable for deployment on platforms like Vercel. The .vercel directory is created when you link the project.

### Assumptions
The .vercel folder is created when linking the project and should not be shared or committed.
Mock email providers simulate email sending with a chance of failure and are used for testing purposes.

