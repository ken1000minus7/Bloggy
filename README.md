# Bloggy
Full stack web app for making blogs or something idk

### Built With

<a href="">
<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
</a>
<a href="">
<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" />
</a>
<a href="">
<img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" />
</a>
<a href="">
<img src="https://img.shields.io/badge/spring-fffff?style=for-the-badge&logo=spring&logoColor=white" />
</a>
<a href="">
<img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" >
</a>


<!-- GETTING STARTED-->

## Getting Started

To get a local copy up and running, follow these simple example steps.

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- npm
  ```
  npm install npm@latest -g
  ```
- yarn
  ```
  npm install --global yarn
  ```
- Java
- PostgreSQL
- Maven

### Installation

_Below is an example of how you can install and set up your app._

1. Clone the repo
   ```bash
    git clone https://github.com/ken1000minus7/Bloggy.git
   ```
2. Setting up the backend
- Create a PostgreSQL database named `bloggy`
- Update the database credentials in `src/main/resources/application.properties` file
- Build the project using maven
   ```bash
   mvn clean install
   ```
3. Setting up the frontend
  - Navigate to the frontend directory
    ```bash
    cd src/frontend
    ```
  - Install npm packages
    ```bash
    yarn install
    ```

<!-- USAGE -->

## Usage

Start the frontend by navigating to the frontend directory and then starting the application with the command:

```bash
  yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the frontend.

Start the backend by running the command in the root directory:

```bash
  mvn spring-boot:run
```

Access the backend at [http://localhost:8080](http://localhost:8080).

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See the [open issues](https://github.com/ken1000minus7/Bloggy/issues) for a full list of proposed features (and known issues).
