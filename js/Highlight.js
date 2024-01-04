AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      
    },
    handleMouseClickEvents: function() {
      //  Click Events
      if(selectedItemId) {
        fadeBackgroundEl.setAttribute("visible", false);
        fadeBackgroundEl.setAttribute("info-banner", {
          itemId: selectedItemId,
        });
        titleE1.setAttribute("visible", false);
        cursorE1.setAttribute("position", {x:0, y:0, z:-1});
        cursorE1.setAttribute("geometry", {
          radiusInner: 0.03,
          radiusOuter: 0.04
        })
      } else {
        fadeBackgroundEl.setAttribute("visible", false);
        titleE1.setAttribute("visible", true);
        cursorE1.setAttribute("position", {x:0, y:0, z:-3});
        cursorE1.setAttribute("geometry", {
          radiusInner: 0.08,
          radiusOuter: 0.12
        })
      }
      
    },
    update: function() {
      const fadeBackgroundEl = document.querySelector("#fadeBackground")
      c = fadeBackgroundEl.children;
      if(c.length > 0) {
        var i;
        for(i = 0; i <= c.length; i++) {
          fadeBackgroundEl.removeChild(c[i])
        }
      } else {
        this.handleMouseClickEvents();
      }

    },
  
    
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
   
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["batman-comics", "spiderman-comics", "superman-comics", "wonder-woman-comics"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave", () => {
        const {selectedItemId} = this.data;
        if(selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if(id === selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity:1
            });
          };
        };
      });
      
    },
  });
  