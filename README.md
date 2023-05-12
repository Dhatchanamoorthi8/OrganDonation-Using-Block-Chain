# OrganDonation-Using-Block-Chain
Organ Donation Management Using Block Chain Technology 
![diagram_page-0002](https://github.com/Dhatchanamoorthi8/OrganDonation-Using-Block-Chain/assets/111693185/f4b01c64-767c-44e2-a1bf-96ba6a5347a7)

## Prerequisites

This software must be installed on your computer to run the program.
### node.js

  #### Windows:
  1. Visit the NodeJS web page at https://nodejs.org/en/
  2. Download and install the LTS version.
  3. Download and run the installer. This will install both NodeJS and NPM (Nodepackage manager).
  
### Truffle
Open a command prompt or terminal and run the following command.
```sh
npm install -g truffle
```

### Ganache
Visit the Ganache webpage at http://trufflesuite.com/ganache/
Download the operating system binary for your OS and install it.

#### Windows
Install Gitbash from https://gitforwindows.org/

### Download
1. Open gitbash or terminal.
2. Clone the repo.
   ```sh
   git clone https://github.com/rahulsabinkar/organ-donation-platform.git
   ```
3. Traverse into the app folder.
   ```sh
   cd organ-donation-platform/app
   ```
4. Install npm dependencies.
   ```sh
   npm install
   ```
   
   
### Combine the Ganache
When the npm dependencies are installed, follow these instructions.
1. Open ganache.
2. Click on "New Workspace".
3. Select "Add Project" and add the truffle-config.js file in the "organ-donation-platform" folder you just downloaded.
4. Press "Save Workspace" in the upper right corner and confirm.
5. Go to "Contracts" tab and you should notice that DonorContract is not used.

### Use the contract
Back in the gitbash or terminal window where you were downloading the npm dependencies, wait for it to finish and enter the following commands to deploy the commit.
Sh
truffle compile && truffle migrate
```

### Start the server
Now that everything is set up, you can run the server.
1. Run the following command
   Sh
   npm run dev
   ```
2. Open a browser and navigate to http://localhost:8080/
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Team Members

* [Dhatchana Moorthi AP](https://github.com/Dhatchanamoorthi8)
* [SubashChandran P](https://github.com/subash037)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
