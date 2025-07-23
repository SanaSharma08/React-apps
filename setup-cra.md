** CRA : Create React App build tool **
1. npx create-react-app@latest my-app 
2. cd my-app
3. npm start 
(if cannot find modul error comes : mannually install module)
4. npm install ajv@8.11.0    //manuallu installing ajv (Cannot find module 'ajv/dist/compile/codegen')
5. npm start

6. if you do not see the react app logo webpage & see something else like upgrade required or folder that means some other program might be using that port so force cra to change port(a port that is not being used):
 a. check if something is listening on that port (netstat -ano | findstr :3000) kill it with: taskkill /PID listening number  /F eg: taskkill /PID 30052  /F
$env:PORT=5174  //port number to redirect to
npm start


 ** op: **
Starting the development server...
Compiled successfully!

You can now view my-app in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.43:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully