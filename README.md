﻿# NODE.JS
## CRUD API with Frontend
### Products page
![image](https://github.com/user-attachments/assets/bb6d6866-c185-45a6-83b6-b5369bd60eff)
### Create new product
![image](https://github.com/user-attachments/assets/6406b20c-188a-4940-adfe-612f737738ad)
### View product details
![image](https://github.com/user-attachments/assets/52163178-c297-40eb-ae80-65be66b81ebf)
### Edit product details
![image](https://github.com/user-attachments/assets/9c1b8b6c-c34b-4bba-82fd-3d8cfce6ec84)
### Cart data
![image](https://github.com/user-attachments/assets/17c2564e-3aee-427c-be17-307503fd8f83)

## Directory to Tree
In this task, I was asked to implement a function called directoryToTree(rootDir, depth) using Node.js’s file system library. The goal was to generate a hierarchical object structure representing the files and directories within a given root directory, up to a specified depth.

Each node in the tree includes:

name: The name of the file or directory.
path: The relative path starting from the rootDir.
type: Either "file" or "dir".
size: The size in bytes.
children: An array of child nodes for directories (empty if no children exist).
The depth argument limits how many levels of subdirectories are included in the result. It was a great challenge because it gave me more experience in recursive functions and handling directories/files in Node.js. This exercise could be useful for various applications like displaying file structures in a web interface or for server-side file management.
## Event Logger with Node.js
In this exercise, I created two files: LogEvents.js and index.js. The goal was to set up a basic logging system using Node.js, with the help of some packages like uuid and date-fns. Here's how I approached it:

LogEvents.js:

I created an asynchronous function called LogEvents that generates a log entry consisting of a unique ID, a timestamp, and a message.
The log entry (called logItem) is appended to a file called eventLogs.txt, which is created inside a Logs folder. I made sure to check if the folder exists and create it programmatically if it doesn’t, using Node’s file system functions and promises.
index.js:

I imported the LogEvents function and used Node’s EventEmitter to trigger this function with a custom message.
I wrapped the event emission in a setTimeout of 2000ms to simulate delayed logging.

