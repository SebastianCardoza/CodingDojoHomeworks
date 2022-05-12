
    var world =[
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
        [2,0,1,1,1,1,1,1,1,1,2,1,1,1,1,1,1,1,1,3,2],
        [2,1,2,2,2,1,2,2,2,1,2,1,2,2,2,1,2,2,2,1,2],
        [2,1,2,0,2,1,2,0,2,1,2,1,2,0,2,1,2,0,2,1,2],
        [2,1,2,2,2,1,2,2,2,1,2,1,2,2,2,1,2,2,2,1,2],
        [2,3,1,1,1,3,1,1,1,1,3,1,1,1,1,3,1,1,1,3,2],
        [2,1,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,1,2],
        [2,1,2,2,2,1,2,1,2,2,2,2,2,1,2,1,2,2,2,1,2],
        [2,3,1,1,1,1,2,1,1,1,1,1,1,1,2,1,1,1,1,3,2],
        [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    ];

    function displayWorld(){
        var output="";

        for(var i=0; i<world.length; i++){
            output += "<div class='row'>";
            for(var j=0; j<world[i].length; j++){
                if(world[i][j]==2){
                    output +="<div class='brick'></div>";
                } else if(world[i][j]==1){
                    output +="<div class='coin'></div>";
                } else if(world[i][j]==0){
                    output +="<div class='empty'></div>";
                } else if(world[i][j]==3){
                    output +="<div class='cherry'></div>";
                }
            }
            output += "</div>";
        }
        document.getElementById("world").innerHTML=output;
        // console.log(output);
    }

    var score = 0;
    var pacmanDiv = document.getElementById("pacman");
    var ghostDiv = document.getElementById("ghost");
    var pacman ={
        x: 1,
        y: 1,
        dead: false
    }
    var ghost ={
        x: 9,
        y: 1
    }
    var ghostDirection = 4

    displayWorld();
    displayPacman(pacman.x, pacman.y);
    displayGhost(ghost.x, ghost.y);
    setInterval(moveGhost, 500);

    function displayPacman(x, y){
        console.log(pacman.dead);
        if (!pacman.dead){
            pacmanDiv.style.top = y*20+"px";
            pacmanDiv.style.left = x*20+"px";
        }
        if (pacman.x == ghost.x && pacman.y == ghost.y){
            pacmanDiv.remove();
            pacman.dead = true;
        }
    }
    function displayGhost(x, y){
        ghostDiv.style.top = y*20+"px";
        ghostDiv.style.left = x*20+"px";
    }
    // Tell the ghost to move depending on the direction he has, if he hits a wall get a random direction thats not the same as before; 
    function moveGhost(){
        if (ghostDirection == 1 && world[ghost.y][ghost.x-1] != 2){
            ghost.x --;
        } else if (ghostDirection == 2 && world[ghost.y-1][ghost.x] != 2){
            ghost.y --;
        } else if (ghostDirection == 3 && world[ghost.y][ghost.x+1] != 2){
            ghost.x ++;
        } else if (ghostDirection == 4 && world[ghost.y+1][ghost.x] != 2){
            ghost.y ++;
        } else {
            oldDirection = ghostDirection;
            while(oldDirection == ghostDirection){
                ghostDirection = getRandomInt(1, 4);
            }
            console.log(ghostDirection);
        }
        displayGhost(ghost.x, ghost.y);
    }
    function pacmanScore(number){
        if (!pacman.dead){
            world[pacman.y][pacman.x]=0
            displayWorld();
            score+=number;
            document.getElementById("score").innerText = score;
        }
    }
    // funcion random
    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }
    // use console.dir(document) to check different events and functions attached to them
    document.onkeydown = function(e){
        console.log(e.keyCode);
        if (e.keyCode == 37){
            pacmanDiv.style.transform = "rotate(0deg)";
            pacman.x --;
            if(world[pacman.y][pacman.x]==2){
                pacman.x ++;
            }
        } else if (e.keyCode == 38){
            pacmanDiv.style.transform = "rotate(90deg)";
            pacman.y --;
            if(world[pacman.y][pacman.x]==2){
                pacman.y ++;
            }
        } else if (e.keyCode == 39){
            pacmanDiv.style.transform = "rotate(180deg)";
            pacman.x ++;
            if(world[pacman.y][pacman.x]==2){
                pacman.x --;
            }
        } else if (e.keyCode == 40){
            pacmanDiv.style.transform = "rotate(270deg)";
            pacman.y ++;
            if(world[pacman.y][pacman.x]==2){
                pacman.y --;
            }
        }

        displayPacman(pacman.x, pacman.y);

        // If pacman ate a cherry or coin, update the world and score accordingly
        if(world[pacman.y][pacman.x]==1){
            console.log(10);
            pacmanScore(10);
        } else if (world[pacman.y][pacman.x]==3){
            pacmanScore(50);
        }
    }