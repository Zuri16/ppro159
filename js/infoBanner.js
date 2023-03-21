AFRAME.registerComponent("info-banner", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update:function(){
    this.createBanner()
  },
  createBanner: function () {
    postersInfo={
      comic25:{
        banner_url:".assets/cover25.jpg",
        title:"Una ataque mortifero",
        released_year:"2019",
        description:"hola"
      }
    }
  },
    
  });