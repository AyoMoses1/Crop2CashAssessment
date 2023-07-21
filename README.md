<a name="readme-top"></a>

<div align="center">

  <img src="assets/farmersa.jpg" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>The Farmers API</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
- [💻 Getting Started](#getting-started)
- [👥 Authors](#authors)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)


# 📖 🌱 Farmer API - Setup Instructions 🚀 <a name="about-project"></a>

Welcome to the Farmer API 🌽🚜! This guide will walk you through the setup process for the project. The Farmer API allows you to manage Farmer entities with attributes like `id`, `first_name`, `last_name`, `phone_number`, `age`, `address`, and `crops`. It provides a single insertion endpoint to create a new farmer and a single retrieval endpoint with filter functionality.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="#">Node JS</a></li>
    <li><a href="#">PostgreSQL</a></li>
  </ul>
</details>


## 💻 Getting Started <a name="getting-started"></a>

### Prerequisites 📋

Before you begin, make sure you have the following installed on your machine:

- Node.js: https://nodejs.org/ (version 12 or later)
- PostgreSQL: https://www.postgresql.org/ (version 9 or later)

### Getting Started 🏁

1. Clone the repository:

   ```
   git clone https://github.com/your-username/farmer-api.git
   cd farmer-api
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up the database:

   - Create a PostgreSQL database and note down the connection details (host, port, username, password, and database name).

   - Create a `.env` file in the root of the project and add the following environment variables:

     ```
     PG_HOST=your_database_host
     PG_PORT=your_database_port
     PG_USER=your_database_username
     PG_PASSWORD=your_database_password
     PG_DATABASE=your_database_name
     ```

4. Run the database schema setup script:

   - Open a terminal and navigate to the project directory.

   - Run the following command to set up the database schema:

     ```
     npm run setup-db
     ```

   This command will create the required `farmers` table in your PostgreSQL database.

5. Start the server:

   ```
   npm start
   ```

   The server will start running on `http://localhost:3000`.

### API Endpoints 🛣️

- `POST /farmers`: Create a new farmer. See API specifications for the payload.

- `GET /farmers`: Retrieve farmers with optional filtering. See API specifications for query parameters and examples.

### Error Handling 🚫

The API provides error handling for various scenarios, and in case of an error, you will receive an error response with a relevant message.

### Conclusion 🏁

Congratulations! You have successfully set up the Farmer API 🌽🚜. You can now start creating and retrieving farmers using the provided endpoints. If you encounter any issues or have questions, don't hesitate to ask for help. Enjoy farming and happy coding! 🌾🚀🌟



## 👥 Author <a name="authors"></a>

👤 **AyoMoses**

- GitHub: [@AyoMoses1](https://github.com/AyoMoses1)
- Twitter: [@Ayo_Moses1](https://twitter.com/Ayo_Moses1)
- LinkedIn: [Ayo Moses](https://www.linkedin.com/in/ayo-moses-493946184/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## ⭐️ Show your support <a name="support"></a>

If you like this project please give it a star and share it with your freinds 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to appreciate [Crop2Cash](https://www.crop2cash.com.ng/) for the assessment email I received regarding the Software Engineering role at Crop2Cash. I am thrilled to have the opportunity to showcase my skills and qualifications further.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed._

<p align="right">(<a href="#readme-top">back to top</a>)</p>