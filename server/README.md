# Project Title

Typeorm/express rest backend for the moonshot client. The db can be seeded with token data from the moonpay v3 currencies api endpoint.

Price data is retrieved for the tokens in the db from congecko at request time to give accurate price data for the demo, and returned with the token data. 

## Getting Started
1. Run `npm i` to install dependencies
2. Ensure you have a postgres db running.
3. Create a .env file in the /server folder. Add environment variables for:
  - POSTGRES_USER (postgres username)
  - POSTGRES_PASSWORD (postgres password)
  - POSTGRES_DB (postgres db name)
  - API_KEY (rest api key that needs to be passed by client)
4. Import token data from moonpay api to populate the token table, using the api-token-importer using `npm run import:tokens`

5. Run `npm start` command