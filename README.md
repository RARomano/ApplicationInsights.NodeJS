# ApplicationInsights.NodeJS
This repository will show how to use Application Insights to monitor Node JS applications.

## Creating an Application Insights account
First, create a free Azure account (if you don't have one): https://azure.microsoft.com/en-us/services/application-insights/

Then, create an Application Insights instance
![image](https://user-images.githubusercontent.com/12012898/32510162-ed7d000c-c3ef-11e7-8d7a-38d2c8815057.png)

Select Node JS application
![image](https://user-images.githubusercontent.com/12012898/32510197-fd42fc1c-c3ef-11e7-8ce1-b13f43c33638.png)

When the instance is created, grab the **Instrumentation Key**
![image](https://user-images.githubusercontent.com/12012898/32510238-27399076-c3f0-11e7-9ef3-8c45dcaeea63.png)

## Running the application
Modifiy the line 11 of the file index.js https://github.com/RARomano/ApplicationInsights.NodeJS/blob/master/index.js#L11 to add the **Instrumentation Key** generated on the previous step

Then run:

```bash
npm install
node index
```

Open the browser and make a request to `http://localhost:8080/ping` and then to `http://localhost:8080/error`. Wait a few moments and see the data being populated into the Application Insights dashboards.
