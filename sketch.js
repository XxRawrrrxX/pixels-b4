var count;

function preload(){
    count = loadImage("face.jpg");
}

function setup(){
    createCanvas(count.width, count.height);
}

function draw(){
    background(0);
    image(count, 0, 0);
    loadPixels();
    
    for(var row = 0; row < height; row++){
        for(var col = 0; col < width; col++){
            var startingIndex = (col + row * width)*4;
            
            var r = pixels[startingIndex];
            var g = pixels[startingIndex + 1];
            var b = pixels[startingIndex + 2];
            var a = pixels[startingIndex + 3];
            
            if(keyIsPressed){
                if(key =="1"){
                    gray_filter(startingIndex, g, a);
                }
                if(key == "2"){
                    unknown(startingIndex, g, a);
                }
                if(key == "3"){
                    swap(startingIndex, r, g, b, a);
                }
                if(key == "4"){
                    bi(startingIndex, r, g, b, a);
                }
                if(key == "5"){
                    bisq(startingIndex, r, g, b, a);
                }
                if(key == "6"){
                    whole(startingIndex, r, g, b, a);
                }
                if(key == "7"){
                    pretty(startingIndex, r, g, b, a, row, col);
                }
                if(key == "8"){
                    weird(startingIndex, g, a, b, r);
                }
                if(key == "9"){
                    remix(startingIndex, g, a, b, r);
                }
            }
        }
    }
    updatePixels();
}

function gray_filter(startingIndex, g, a){
     pixels[startingIndex + 0] = g; //red
     pixels[startingIndex + 1] = g; //green
     pixels[startingIndex + 2] = g; //blue
     pixels[startingIndex + 3] = a; //alpha
}

function unknown(startingIndex, g, a){
     pixels[startingIndex + 0] = 0; //red
     pixels[startingIndex + 1] = g; //green
     pixels[startingIndex + 2] = 0; //blue
     pixels[startingIndex + 3] = a; //alpha
}

function swap(startingIndex, g, a, b, r){
     pixels[startingIndex + 0] = r; //red
     pixels[startingIndex + 1] = b; //green
     pixels[startingIndex + 2] = g; //blue
     pixels[startingIndex + 3] = a; //alpha
}

function bi(startingIndex, g, a, b, r){
     pixels[startingIndex + 0] = r/2; //red
     pixels[startingIndex + 1] = g/2; //green
     pixels[startingIndex + 2] = b/2; //blue
     pixels[startingIndex + 3] = a; //alpha
}

function bisq(startingIndex, g, a, b, r){
     pixels[startingIndex + 0] = r*2; //red
     pixels[startingIndex + 1] = g*2; //green
     pixels[startingIndex + 2] = b*2; //blue
     pixels[startingIndex + 3] = a; //alpha
}

function whole(startingIndex, g, a, b, r){
    pixels[startingIndex + 0] = 255 - r; //red
    pixels[startingIndex + 1] = 255 - g; //green
    pixels[startingIndex + 2] = 255 - b; //blue
    pixels[startingIndex + 3] = a; //alpha
   
}

function pretty(startingIndex, g, a, b, r, row, col){
    pixels[startingIndex + 0] = r * 25;
    pixels[startingIndex + 1] = g + 25;
    pixels[startingIndex + 2] = b * 25;
    pixels[startingIndex + 3] = a;
}

function weird(startingIndex, g, a, b, r){
    if(startingIndex % 20 == 0){
        pixels[startingIndex] = 255;
        pixels[startingIndex + 1] = 0;
        pixels[startingIndex + 2] = 0;
        pixels[startingIndex + 3] = a;
    }
}

function remix(startingIndex, g, a, b, r){
    var lastPixel = pixels.length - 1;
    
    pixels[lastPixel - startingIndex - 3] = r;
    pixels[lastPixel - startingIndex - 2] = g;
    pixels[lastPixel - startingIndex - 1] = b;
    pixels[lastPixel - startingIndex - 0] = a;
}

