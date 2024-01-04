AFRAME.registerComponent("info-banner", {
    init: function() {
        this.createInfo();
    },
    tick: function() {
        const placesContainer = document.querySelector("#places-container");
        const { state } = placesContainer.getAttribute("poster");
        if (state === "view" || state === "change-view") {

            this.el.setAttribute("visible", true);
          } else {
            this.el.setAttribute("visible", false);
          }
    },
    createInfo: function() {
        

    }
})