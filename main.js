img = "";

function preload()
    {
        img = loadImage("dog_cat.jpg");
    }

function setup()
    {
      canvas = createCanvas(640, 420);
      canvas.center();  
    }

    function draw()
    {
        image(img, 0, 0 ,640, 420);
        fill("#f2270c")
        text("Dog" , 180, 75);
        textSize(22);
        noFill();
        stroke("#005cfa");
        rect(30 ,60, 300, 340);
    }

   
    
