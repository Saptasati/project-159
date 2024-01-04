AFRAME.registerComponent("poster", {
    init: function() {
        this.placesContainer = this.el;
        this.createPosters();

    },
    createPosters: function() {
        const thumbNailRef = [
           {
            id: "batman-comics",
            title:"Batman",
            url:"assets/batman-comics.jpg"
           },
           {
            id: "spiderman-comics",
            title:"Spiderman",
            url:"assets/marvel-comics.jpg"
           } ,
           {
            id: "superman-comics",
            title:"Superman",
            url:"assets/supermain-comics.jpg"
           },
           {
            id:"wonder-woman-comics",
            title:"Wonder Woman",
            url:"assets/wonder-woman-comics.jpg"
           }
        ];
        let prevoiusXPosition = -60;

        for (var item of thumbNailsRef) {
          const posX = prevoiusXPosition + 25;
          const posY = 10;
          const posZ = -40;
          const position = { x: posX, y: posY, z: posZ };
          prevoiusXPosition = posX;

          const borderE1 = this.createBorder(position, item.id);
          const thumbNail = this.createThumbNail(item)
          borderE1.appendChild(thumbNail);
          const titleE1 = this.createTitleE1(position, item);
          borderE1.appendChild(titleE1);
          this.placesContainer.appendChild(borderE1);

        }
    },
    createBorder: function(position, id) {
        const entityE1 = document.createElement("a-entity");
        entityE1.setAttribute("id", id);
        entityE1.setAttribute("visible", true);
        entityE1.setAttribute("geometry", {
            primitive: "plane",
            width: 20,
            height:28
          });
          entityE1.setAttribute("position", {x: 0, y:5, z: 0.1});
          entityE1.setAttribute("material", {
            color: "white",
            opacity: 1
          });
          entityEl.setAttribute("cursor-listener", {});
          return entityE1;
        },
        createThumbNail : function(item) {
          const entityE1 = document.createElement("a-entity");
          entityE1.setAttribute("visible", true);
          entityE1.setAttribute("geometry", {
            primitive: "square", 
            width:20,
            height:28
          });
          entityE1.setAttribute("material", {src: item.url});
          return entityE1
      
      
        },
        createTitleE1: function(position, item) {
          const entityE1 = document.createElement("a-entity");
          entityE1.setAttribute("text", {
            font: "exo2bold",
            align : "center",
            width: 70,
            color: "#e65100",
            value: item.title
          });
          const elPosition = position;
          elPosition.y = -20;
          entityE1.setAttribute("position", elPosition);
          entityE1.setAttribute("visible", true);
          return entityE1;
      
        
        },
});

