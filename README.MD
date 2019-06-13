Node.js application to test connecting to a database with the <a href="https://www.npmjs.com/package/mssql">mssql npm package</a>.
I'm using this primarily to test connections on a server that does not have node installed but will run containers with node and the mssql package.

This can simply be run with the docker image <a>njwallace315/mssql-test</a> or it can be modified and built from this repo.

To run from docker image with an environment file:  
    1. Create an environment file "mssql.env" with the following variables as they pretain to the mssql package.  
        <ul>
        - server  
        - database  
        - username  
        - password  
        - port 
        </ul>
    2. place that file in a folder that can be used as a shared volume with the docker container.  
    3. Run the image with "
        ```sh
            docker run -v <path to mssql.env on host>:/volume -e ENV_PATH=/volume njwallace315/mssql-test
        ``` "
