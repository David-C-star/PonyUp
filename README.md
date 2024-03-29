## **PonyUp App**
The app is written in JavaScript. The frontend is written using React Native framework and the backend is supported by AWS Amplify. To run the app, npm and amplify need to be installed.  
  
The following link can be used to download and setup node and npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm  

After installing npm, amplify cli can be downloaded using the following link: https://docs.amplify.aws/cli/start/install  

The backend is connected to an AWS dashboard relating to the organization AWS account which has all the necessary keys and passwords needed to modify the backend.  

### Clone to a local destination
The app can be cloned with:

`git clone https://github.com/David-c-star/PonyUp.git`  


### Start the application
After successfully cloning the application, navigate to the project folder. Run the following pull command to fetch the upstream backend environment from the AWS Amplify console online.

`amplify pull` 
 
You will be asked to create a new environment. Choose No and choose "dev" as the environment. You will be asked of the accessID and password. Use these credentials (linked to the organizational Amplify account) and choose US-east-2 as the region of choice. This will create a javascript file named "aws-exports.js" with the project specific secrets. This is needed to compile the app successfully.  

Once this successfully executes, the app can be started using the following command:

`npm start`  

This will launch an expo console which allows the app to be run using IOS/Android Emulator, browser website, or mobile phone through the Expo app (scanning the QR code).   

Note: if the app does not launch, it might be because of the lack of certain packages. Follow the error message carefully and download all the packages necessary.

### App feature
The app is able to perform following activity:   
1. Register users to create a user specific portal
2. Login to access a personal portal 
3. Register device using device ID and name
4. Get real time update of the device changes
5. Edit animal information

