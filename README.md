# NextJS Full Stack Application with MongoDB

This is a full-stack application built with NextJS, utilizing MongoDB as the database and Mongoose as the ODM (Object Data Modeling). The app includes functionality to retrieve product information from Amazon through a cron job and sends email notifications to users using Nodemailer.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **NextJS Frontend**: Utilizes the power of NextJS for efficient, server-rendered React applications.

2. **MongoDB Database**: Stores data using MongoDB, a NoSQL database, and interacts with it through Mongoose for seamless data modeling.

3. **Cron Jobs for Amazon Product Scraping**: Automatically retrieves product information from Amazon at specified intervals using cron jobs.

4. **Email Notifications with Nodemailer**: Sends email notifications to users using Nodemailer through a cron job.

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:FabioDiCeglie/Web-Scraping-NextJS.git
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

## Configuration

1. Set up your MongoDB database and obtain the connection URI.

2. Configure the application by creating a `.env` file. Include the following information:

   ```env
   BRIGHT_DATA_USERNAME
   BRIGHT_DATA_PASSWORD
   MONGODB_URI
   EMAIL_PASSWORD
   EMAIL_USER
   ```

## Usage

1. Run the app:

   ```bash
   yarn run dev
   ```

2. Access the application at `http://localhost:3000` in your browser.

3. The cron jobs for Amazon product scraping and email notification are configured to run automatically. You can customize the cron job intervals in the code.
