function randomNumber(min, max) {  
    return Math.random() * (max - min) + min; 
}

function getVectorFromAngle(angle, decimal = 1) {
    var pi = Math.PI;
    var decimal = 1e3;
    var degrees = -angle * (180/pi);
    var x = Math.round(Math.cos((90 - degrees) * (pi / 180)) * decimal) / decimal;
    var y = Math.round(Math.sin((90 - degrees) * (pi / 180)) * decimal) / decimal;
    return { x: x, y: y };
}

function radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function isJSON(str) {
    try { JSON.parse(str); }
    catch (e) { return false; }
    return true;
}