function computer()
{
    let choice=["","rock","paper" , "scissor"];
   let a= Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
   return choice[a];
}
function player()
{
    let choice=["","rock","paper" , "scissor"];
   let a=prompt();
   return choice[a];
}
function game(){
    let comp=0;
    let ply=0;
    console.log("enter the choice: 1.rock 2.paper 3.scissor");
    for(let i=0;i<5;i++)
    {
        let c=computer();
        let p=player();
        console.log(c);
        console.log(p);
        if(!(c.localeCompare("rock")))
            {
                if(!(p.localeCompare("paper")))
                    {
                        ply++;
                        console.log("you win this round",c);
                    }
                    else if(!(p.localeCompare("scissor")))
                    {
                        comp++;
                        console.log("you lose this round",c);
                    }
                    else{
                        console.log("tie");
                    }

            }


            else if(!(c.localeCompare("paper")))
            {
                if(!(p.localeCompare("rock")))
                    {
                        comp++;
                        console.log("you lose this round",c);
                    }
                    else if(!(p.localeCompare("scissor")))
                    {
                        ply++;
                        console.log("you win this round",c);
                    }
                    else{
                        console.log("tie");
                    }

            }
            else if(!(c.localeCompare("scissor")))
            {
                if(!(p.localeCompare("rock")))
                    {
                        ply++;
                        console.log("you win this round",c);
                    }
                   else if(!(p.localeCompare("paper")))
                    {
                        comp++;
                        console.log("you lose this round",c);
                    }
                    else{
                        console.log("tie");
                    }

            }
    }
      if(ply>comp)
        console.log("you won baby");
    else if(comp>ply)
        console.log("try next  time baby"); 
    else
        console.log("you play hard"); 

}
console.log(game());