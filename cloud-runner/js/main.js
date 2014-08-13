// Start enchant.js
enchant();
 
var browserWidth = window.innerWidth || document.body.clientWidth;
var browserHeight = window.innerHeight || document.body.clientHeight;
window.onload = function() {

    // Starting point
    //var game = new Game(320, 440);
//	var game = new Game(440, 320);
	var game = new Game(browserWidth, browserHeight);
    game.preload(
                 'res/unicornSheetV1.png',
                 'res/gameover.png',
                 'res/drive.png',
                 'res/Hit.mp3',
                 'res/bgm.mp3',
				 'res/deadUnicornV001.jpg',
				 'res/unicorn-gameover.png');
    game.fps = 30;
    game.scale = 1;
    game.onload = function() {
        // Once Game finish loading
        console.log("Hi, Boxer!");
        var scene = new SceneGame();
        game.pushScene(scene);
    }
    window.scrollTo(0,0);
    game.start();   
};

/**
 * SceneGame  
 */
var SceneGame = Class.create(Scene, {
    /**
     * The main gameplay scene.     
     */
    initialize: function() {
        var game, label, bg, unicorn, driveGroup;
 
        // Call superclass constructor
        Scene.apply(this);
 
        // Access to the game singleton instance
        game = Game.instance;
        label = new Label('SCORE:   0');
        label.x = game.width/2-150;
        label.y = 50;        
        label.color = 'black';
        label.font = '25px Impact';
        label.textAlign = 'center';
        label._style.textShadow ="-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
        this.scoreLabel = label;        
 
        bg = new Sprite(browserWidth, browserHeight-50);

        unicorn = new Unicorn();
        unicorn.y = game.height/2 - unicorn.height/2;
        unicorn.x = 10;
        this.unicorn = unicorn;

        driveGroup = new Group();
        this.driveGroup = driveGroup;
 
        this.addChild(bg);
        this.addChild(driveGroup);
        this.addChild(unicorn);
        this.addChild(label);

        this.addEventListener(Event.TOUCH_START,this.handleTouchControl);
        this.addEventListener(Event.ENTER_FRAME,this.update);

        // Instance variables
        this.generatedriveTimer = 0;
        this.scoreTimer = 0;
        this.score = 0;

        this.bgm = game.assets['res/bgm.mp3']; // Add this line
 
        // Start BGM
        this.bgm.play();
    },

    handleTouchControl: function (evt) {
        var laneHeight, lane;
        laneHeight = 600/3;
        lane = Math.floor(evt.y/laneHeight);
        lane = Math.max(Math.min(2,lane),0);
        this.unicorn.switchToLaneNumber(lane);
    },

    update: function(evt) {
        // Score increase as time pass
        this.scoreTimer += evt.elapsed * 0.001;
        if(this.scoreTimer >= 0.5)
        {
            this.setScore(this.score + 1);
            this.scoreTimer -= 0.5;
        }

        // Check if it's time to create a new set of obstacles
        this.generatedriveTimer += evt.elapsed * 0.001;
        if(this.generatedriveTimer >= 0.5)
        {
            var drive;
            this.generatedriveTimer -= 0.5;
            drive = new Drive(Math.floor(Math.random()*3));
            this.driveGroup.addChild(drive);
        }

        // Check collision
        for (var i = this.driveGroup.childNodes.length - 1; i >= 0; i--) {
            var drive;
            drive = this.driveGroup.childNodes[i];
            if(drive.intersect(this.unicorn)){  
                var game;
                game = Game.instance;
                localStorage["CR_Score"] = this.score;
                game.assets['res/Hit.mp3'].play();                    
                this.driveGroup.removeChild(drive);
                this.bgm.stop();
                game.replaceScene(new SceneGameOver(this.score));  
                break;
            }
        }

        // Loop BGM
        if( this.bgm.currentTime >= this.bgm.duration ){
            this.bgm.play();
        }
    },

    setScore: function (value) {
        this.score = value;
        this.scoreLabel.text = 'SCORE:   ' + this.score;
    }
});

/**
 * unicorn
 */
 var Unicorn = Class.create(Sprite, {
    /**
     * The player character.     
     */
    initialize: function() {
        // Call superclass constructor
        Sprite.apply(this,[100, 60]);
        this.image = Game.instance.assets['res/unicornSheetV1.png'];        
        this.animationDuration = 0;
        this.addEventListener(Event.ENTER_FRAME, this.updateAnimation);
    },

    updateAnimation: function (evt) {        
        this.animationDuration += evt.elapsed * 0.001;       
        if(this.animationDuration >= 0.25)
        {
            this.frame = (this.frame + 1) % 2;
            this.animationDuration -= 0.25;
        }
    },

    switchToLaneNumber: function(lane){  
        var game, distance;
        game = Game.instance;        
        distance = 170;
        this.y = game.height/2 - this.height/2 + (lane - 1) * distance;
    }
});

var UnicornGameOver = Class.create (Sprite, {
	initialize: function() {
        window.open("gameOver.html","_self");
    }
});

var Drive = Class.create(Sprite, {
    /**
     * The obstacle that the unicorn must avoid
     */
    initialize: function(lane) {
        // Call superclass constructor
        Sprite.apply(this,[48, 49]);
        this.image  = Game.instance.assets['res/drive.png'];      
        this.rotationSpeed = 0;
        this.setLane(lane);
        this.addEventListener(Event.ENTER_FRAME, this.update);
    },

    setLane: function(lane) {
        var game, distance;
        game = Game.instance;        
        distance = 170;
     
        this.rotationSpeed = Math.random() * 100 - 50;
     
        this.y = game.height/2 - this.height/2 + (lane - 1) * distance;
        this.x = game.width;    
        this.rotation = Math.floor( Math.random() * 360 );    
    },

    update: function(evt) { 
        var ySpeed, game;
     
        game = Game.instance;
        ySpeed = 400;
     
        this.x -= ySpeed * evt.elapsed * 0.001;
        this.rotation += this.rotationSpeed * evt.elapsed * 0.001;           
        if(this.x < 0)
        {
            this.parentNode.removeChild(this);          
        }
    }
});

/**
 * SceneGameOver  
 */
var SceneGameOver = Class.create(Scene, {
    initialize: function(score) {
        var gameOverLabel, scoreLabel, unicornGameOver, game;
		game = Game.instance;
        Scene.apply(this);
		// this.image = Game.instance.assets['res/deadUnicornV001.jpg'];


        scoreLabel = new Label('SCORE:   ' + score);
        scoreLabel.x = (game.width/2)-150;
        scoreLabel.y = 60;        
        scoreLabel.color = 'black';
        scoreLabel.font = '25px Impact';
        scoreLabel.textAlign = 'center';

		unicornGameOver = new UnicornGameOver();
		unicornGameOver.x = 285;
		unicornGameOver.y = 150;

		this.addChild(unicornGameOver);
        this.addChild(scoreLabel);

        this.addEventListener(Event.TOUCH_START, this.touchToRestart);


    },

    touchToRestart: function(evt) {
        var game = Game.instance;
        game.replaceScene(new SceneGame());
    }
}); 
