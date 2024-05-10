//Get Distance from element based on X,Y coordinates
export var calculateDistance = function(elem, mouseX, mouseY) {
    return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offsetLeft+(elem.offsetWidth/2)), 2) + Math.pow(mouseY - (elem.offsetTop+(elem.offsetHeight/2)), 2)));
    // return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
  };
//given an array of html elements, return the closest element to the pointer
export var getClosestElementToPointer = function(elementArray, mouseX, mouseY){
    let minDistance = window.innerWidth;
    let _mX = mouseX, _mY = mouseY;
    let elToReturn;
    elToReturn = elementArray[0]
    // elementArray.each(function( i ) {
    //     let _thisDistance = calculateDistance(this, _mX, _mY);
    //     if (_thisDistance <= minDistance) {
    //         minDistance = _thisDistance;
    //         elToReturn = this;
    //     }
    //   });
    return elToReturn;
}
//Get a value between 0 and 1 based on how a given distance
//distance - distance between mouse and element
//minVal - intensity minimum allowed value. default - 0
//maxVal - intensity maximum allowed value. default - 1
//interactThreshold - threshold after which to start the animation - in pixels
export var getIntensityFromDistanceNormalized = function(distance, minVal = 0, maxVal = 1, interactThreshold) {
    //% of total path that the mouse is away from the target
    if (interactThreshold == null) interactThreshold = window.innerWidth;
    let distanceRatio = (1 - (distance / interactThreshold)).toPrecision(2);
    let finalVal = Math.max(minVal, (maxVal*distanceRatio));
    return minVal + finalVal;
};