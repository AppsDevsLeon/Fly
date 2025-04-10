document.addEventListener("DOMContentLoaded",function(){

 let carModels=["#modelCar1","#modelCar2","#modelCar3","#modelCar4","#modelCar5","#modelCar6","#modelCar7","#modelCar8","#modelCar9"]
 
 let randomCar=carModels[Math.floor(Math.random()*carModels.length)]

 let carEntity=document.createElement("a-entity")

 carEntity.setAttribute("gltf-model",randomCar)

 carEntity.setAttribute("position","0 0 0")

 carEntity.setAttribute("scale","1 1 1")

 document.querySelector("a-scene").appendChild(carEntity)

})