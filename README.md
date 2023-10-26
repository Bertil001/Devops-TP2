# Devops-TP2
You will have to set application 'Docker Desktop' and open it. After opening 'DEVOPS-TP2'.

Then, at the project's root, you can open a terminal and run
'docker build -t 2eimage -f Dockerfile2 .'
In another terminal run : 'docker run -it --rm -p 8080:8000 -e PING_LISTEN_PORT=8000 test-node', 
then, run 'curl http://localhost:8080/ping -v'
 
In the terminal, you will see where your application is listening.

Now, you can open a browser and search for 
http://localhost:8080/ping

You will see the headers of your request on your browser's page or in your terminal.

If the route is wrong you will get a simple response with '404' status code. For any other error, you will receive a response with '500' status code
