# Sellix-Discord-Bot
A very simple Discord Bot, written in Javascript. It is using the Sellix-Api & fetches data of an orderID.
The idea behind this is to understand the functions of the API in a simple way & to be able to use this for YOUR E-Commerce service, as I do.

**📑 | Installation:**

1) Download all files, save them all in the same folder.
2) Put your discord bot token into the .env file, right after the equal sign.
3) Open the files in your preferred IDE such as Visual Studio Code & change the value "api_key"
- CheckCommand.js   | const api = new Sellix.Client('api_key'); [Line 12]
- You can find your own API Key on the Sellix Website after logging in open your User Settings, click the tab "Security". The key should be in the middle of the screen displayed.
4) NPM Packages I've been using are "slappey", "nodemon" & "sellix.io". Install them by opening a console window in the main folder & executing the following lines:
- npm i slappey
- npm i nodemon
- npm i sellix.io
5) Done! Run the bot by typing "npm run dev" in the command window, opened in the folder.

**📪 | Support:**

- If you have any questions or run into any problems, feel free to contact me on Discord. 
- Tag: snow#0911
