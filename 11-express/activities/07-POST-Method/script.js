function getStartValues() {
    var startPointObj;
    startLocName = $('#startLocName').val()
    startLocNum = $('#startNum').val();
    startName = $('#startName').val();
    startCity = $('#startCity').val();

    startPointObj = {
        startLocName: startLocName,
        startNum: startLocNum,
        startName: startName,
        startCity: startCity,
    };
    return startPointObj;
}
