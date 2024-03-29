class SevenSegment
{
    constructor(preFix)
    {
        /*
            No space needed with 'QuerySelector' tag
        */
        this.segA = document.querySelector(`.segA${preFix}`); 
        this.segB = document.querySelector(`.segB${preFix}`); 
        this.segC = document.querySelector(`.segC${preFix}`); 
        this.segD = document.querySelector(`.segD${preFix}`); 
        this.segE = document.querySelector(`.segE${preFix}`); 
        this.segF = document.querySelector(`.segF${preFix}`); 
        this.segG = document.querySelector(`.segG${preFix}`); 

        this.dotAnimation = document.querySelectorAll(`.dot span`); 
    }
    

    digitZero()
    {
        this.segA.style.backgroundColor = "#f00";         
        this.segB.style.backgroundColor = "#f00";         
        this.segC.style.backgroundColor = "#f00";         
        this.segD.style.backgroundColor = "#f00";         
        this.segE.style.backgroundColor = "#f00";         
        this.segF.style.backgroundColor = "#f00";  
               
        this.segG.style.backgroundColor = "rgba(49, 49, 49, 0.5)";  
    }

    digitOne()
    {
        this.segB.style.backgroundColor = "#f00"; 
        this.segC.style.backgroundColor = "#f00"; 

        this.segA.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segD.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segE.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segF.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segG.style.backgroundColor = "rgba(49, 49, 49, 0.5)";  
    }

    digitTwo()
    {
        this.segA.style.backgroundColor = "#f00"; 
        this.segB.style.backgroundColor = "#f00"; 
        this.segG.style.backgroundColor = "#f00"; 
        this.segE.style.backgroundColor = "#f00"; 
        this.segD.style.backgroundColor = "#f00"; 

        this.segC.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segF.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         

    }


    digitThree()
    {
        this.segA.style.backgroundColor = "#f00"; 
        this.segB.style.backgroundColor = "#f00"; 
        this.segG.style.backgroundColor = "#f00"; 
        this.segC.style.backgroundColor = "#f00"; 
        this.segD.style.backgroundColor = "#f00"; 

        this.segE.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segF.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         

    }

    digitFour()
    {
        this.segF.style.backgroundColor = "#f00"; 
        this.segG.style.backgroundColor = "#f00"; 
        this.segB.style.backgroundColor = "#f00"; 
        this.segC.style.backgroundColor = "#f00"; 

        this.segA.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segD.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segE.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
    }

    digitFive()
    {
        this.segA.style.backgroundColor = "#f00"; 
        this.segF.style.backgroundColor = "#f00"; 
        this.segG.style.backgroundColor = "#f00"; 
        this.segC.style.backgroundColor = "#f00"; 
        this.segD.style.backgroundColor = "#f00";   
        
        this.segB.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segE.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
    }

    digitSix()
    {
        this.segA.style.backgroundColor = "#f00"; 
        this.segF.style.backgroundColor = "#f00"; 
        this.segG.style.backgroundColor = "#f00"; 
        this.segE.style.backgroundColor = "#f00"; 
        this.segC.style.backgroundColor = "#f00"; 
        this.segD.style.backgroundColor = "#f00";    
        
        this.segB.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
    }

    digitSeven()
    {
        this.segA.style.backgroundColor = "#f00";         
        this.segB.style.backgroundColor = "#f00";         
        this.segC.style.backgroundColor = "#f00";       
             
        this.segD.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segE.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segF.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segG.style.backgroundColor = "rgba(49, 49, 49, 0.5)";  
    }

    digitEight()
    {
        this.segA.style.backgroundColor = "#f00";         
        this.segB.style.backgroundColor = "#f00";         
        this.segC.style.backgroundColor = "#f00";         
        this.segD.style.backgroundColor = "#f00";         
        this.segE.style.backgroundColor = "#f00";         
        this.segF.style.backgroundColor = "#f00";         
        this.segG.style.backgroundColor = "#f00";         
    }

    digitNine()
    {
        this.segA.style.backgroundColor = "#f00";         
        this.segB.style.backgroundColor = "#f00";         
        this.segC.style.backgroundColor = "#f00";         
        this.segD.style.backgroundColor = "#f00";         
        this.segE.style.backgroundColor = "rgba(49, 49, 49, 0.5)";         
        this.segF.style.backgroundColor = "#f00";         
        this.segG.style.backgroundColor = "#f00";         
    }

    dotAnimationActive()
    {
        for (let index = 0; index < this.dotAnimation.length; index++) 
        {
            this.dotAnimation[index].style.backgroundColor = "green";
            
        }
    }

    dotAnimationInActive()
    {
        for (let index = 0; index < this.dotAnimation.length; index++) 
        {
            this.dotAnimation[index].style.backgroundColor = "rgb(133, 133, 133)";
            
        }
    }



}// end class SevenSegment