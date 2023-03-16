function DarkMode_Button() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function Text_Button() 
{
    var element = document.body;
    element.classList.toggle("text-only-mode");
}

function Battery_optimization() 
{
    var element = document.body;
    element.classList.toggle("battery-optimized-mode");
}

function checkBatteryLevel() {
    navigator.getBattery().then(function(battery) 
    {
        var batteryLevel = battery.level * 100;
        if (batteryLevel < 10) {
            toggleBatteryOptimizedMode();
        }
    });
}