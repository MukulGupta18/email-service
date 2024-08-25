#!/bin/bash

# Email Service Project

echo "Email Service Project"
echo ""
echo "This project is a resilient email-sending service implemented in TypeScript/JavaScript."
echo "It includes features such as retry logic, idempotency, rate limiting, and a simple queue system."
echo ""

# Project Structure
echo "Project Structure:"
echo ""
echo "- src/"
echo "  - utils/: Contains utility classes like the rate limiter, idempotency manager, and retry logic."
echo "  - EmailProvider.ts: Interface for email providers."
echo "  - MockEmailProvider1.ts: A mock email provider with a simulated 50% failure rate."
echo "  - MockEmailProvider2.ts: Another mock email provider with a simulated 50% failure rate."
echo "  - EmailService.ts: The main email service implementation that uses the email providers and utilities."
echo "  - EmailQueue.ts: A basic queue system for processing email requests."
echo ""
echo "- tests/: Unit tests for the various components of the service."
echo ""

# Features
echo "Features:"
echo ""
echo "- Retry Logic: Implements exponential backoff to handle transient failures."
echo "- Idempotency: Ensures that the same email is not sent multiple times."
echo "- Rate Limiting: Controls the rate of email sending to avoid overwhelming the provider."
echo "- Queue System: Manages email-sending requests in a FIFO (First In, First Out) manner."
echo ""

# Setup Instructions
echo "Setup Instructions:"
echo ""

# Prerequisites
echo "Prerequisites:"
echo "- Node.js (>=14.x)"
echo "- npm or yarn"
echo ""

# Installation
echo "Installation:"
echo ""

# Clone the repository
echo "1. Clone the repository:"
echo "   git clone https://github.com/your-username/email-service.git"
echo "   cd email-service"
echo ""

# Install dependencies
echo "2. Install dependencies:"
echo "   npm install"
echo "   # or"
echo "   yarn install"
echo ""

# Run the tests
echo "3. Run the tests:"
echo "   npm test"
echo "   # or"
echo "   yarn test"
echo ""

# Run the service
echo "4. Run the service:"
echo "   npm start"
echo "   # or"
echo "   yarn start"
echo ""

# Usage
echo "Usage:"
echo "To use the email service, enqueue email-sending requests using the EmailQueue class."
echo "The service handles retries, rate limiting, and idempotency checks automatically."
echo ""

# Deployment
echo "Deployment:"
echo "The project is suitable for deployment on platforms like Vercel."
echo "The .vercel directory is created when you link the project."
echo ""
