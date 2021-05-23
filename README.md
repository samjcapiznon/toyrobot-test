# toyrobot-test

This application test is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.

### Prerequisites

You need to have nodejs and typescript installed globally.
* Nodejs
  ```sh
  Go to https://nodejs.org/en/download/ to download and install
  ```
* Typescript
  ```sh
  npm install -g typescript
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/samjcapiznon/toyrobot-test.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Usage

Go to **/dist** folder and run toyrobot.js using node.
```sh
  node toyrobot.js
  ```

**Available Commads:**
- **PLACE** - This command will place the toy robot on the table, depending on the inputed position and direction. The origin (0,0) location is the SOUTH WEST most corner. Format: PLACE (X axis),(Y axis),(direction)
    ```sh
        PLACE 1,3,NORTH
        PLACE 0,0,EAST
        PLACE 2,4,WEST
        PLACE 3,2,SOUTH
    ```
- **MOVE** - This command will move the toy robot one unit forward in the direction it is currently facing.
- **LEFT** and **RIGHT** - This  command will rotate the toy robot 90 degrees in specified direction without changing the position of the robot.
- **REPORT** - This command will announce the location and direction of the toy robot.
- **EXIT** - This command will exit the toy robot simulation app.

**Additional Notes:**

- The toy robot will ignore those commands that will make it fall of the table. This also includes the initial
placement of the toy robot.

- The first valid command to the robot is a **PLACE** command, after that, any sequence of
commands may be issued, in any order, including another **PLACE** command. This application
will discard all commands in the sequence until a valid PLACE command has been
executed.

