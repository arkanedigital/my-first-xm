# XM Cloud Starter Kit (Next JS)

## QUICK START

1. Have a license file in your root C: drive for convenience. In an ADMIN terminal:

    ```ps1
    .\init.ps1 -InitEnv -LicenseXmlPath "C:\" -AdminPassword "DesiredAdminPassword"
    ```

2. Restart your terminal and run (note, up.ps1 script might need to be run more than once if docker gets stuck starting container):

    ```ps1
    .\up.ps1
    ```

3. In Sitecore, go to /sitecore/system/Settings/Services/Rendering Hosts and make sure there is a rendering host item that is pointing to: http://rendering:3000/api/editing/render, http://rendering:3000, sxastarter

4. Navigate to /src/sxastarter in this directory. npm install and npm run build to make sure you have all dependencies

5. Then, run npm start:connected. This will start a live renderinghost for you to be able to use experience editor in your local sitecore for the sxastarter site node

6. If there are any issues, make sure you local .env in root directory, and the .env in sxastarter are matching

*** 

## About this Solution
This solution is designed to help developers learn and get started quickly
with XMCLoud + SXA.


