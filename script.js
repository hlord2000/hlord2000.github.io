const e3 = [1.0, 2.2, 4.7];
const e6 = [1.0, 1.5, 2.2, 3.3, 4.7, 6.8];
const e12 = [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2];
const e24 = [1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1];
const e48 = [1.00, 1.05, 1.10, 1.15, 1.21, 1.27, 1.33, 1.40, 1.47, 1.54, 1.62, 1.69, 1.78, 1.87, 1.96, 2.05, 2.15, 2.26, 2.37, 2.49, 2.61, 2.74, 2.87, 3.01, 3.16, 3.32, 3.48, 3.65, 3.83, 4.02, 4.22, 4.42, 4.64, 4.87, 5.11, 5.36, 5.62, 5.90, 6.19, 6.49, 6.81, 7.15, 7.50, 7.87, 8.25, 8.66, 9.09, 9.53];
const e96 = [1.00, 1.02, 1.05, 1.07, 1.10, 1.13, 1.15, 1.18, 1.21, 1.24, 1.27, 1.30, 1.33, 1.37, 1.40, 1.43, 1.47, 1.50, 1.54, 1.58, 1.62, 1.65, 1.69, 1.74, 1.78, 1.82, 1.87, 1.91, 1.96, 2.00, 2.05, 2.10, 2.15, 2.21, 2.26, 2.32, 2.37, 2.43, 2.49, 2.55, 2.61, 2.67, 2.74, 2.80, 2.87, 2.94, 3.01, 3.09, 3.16, 3.24, 3.32, 3.40, 3.48, 3.57, 3.65, 3.74, 3.83, 3.92, 4.02, 4.12, 4.22, 4.32, 4.42, 4.53, 4.64, 4.75, 4.87, 4.99, 5.11, 5.23, 5.36, 5.49, 5.62, 5.76, 5.90, 6.04, 6.19, 6.34, 6.49, 6.65, 6.81, 6.98, 7.15, 7.32, 7.50, 7.68, 7.87, 8.06, 8.25, 8.45, 8.66, 8.87, 9.09, 9.31, 9.53, 9.76];
const e192 = [1.00, 1.01, 1.02, 1.04, 1.05, 1.06, 1.07, 1.09, 1.10, 1.11, 1.13, 1.14, 1.15, 1.17, 1.18, 1.20, 1.21, 1.23, 1.24, 1.26, 1.27, 1.29, 1.30, 1.32, 1.33, 1.35, 1.37, 1.38, 1.40, 1.42, 1.43, 1.45, 1.47, 1.49, 1.50, 1.52, 1.54, 1.56, 1.58, 1.60, 1.62, 1.64, 1.65, 1.67, 1.69, 1.72, 1.74, 1.76, 1.78, 1.80, 1.82, 1.84, 1.87, 1.89, 1.91, 1.93, 1.96, 1.98, 2.00, 2.03, 2.05, 2.08, 2.10, 2.13, 2.15, 2.18, 2.21, 2.23, 2.26, 2.29, 2.32, 2.34, 2.37, 2.40, 2.43, 2.46, 2.49, 2.52, 2.55, 2.58, 2.61, 2.64, 2.67, 2.71, 2.74, 2.77, 2.80, 2.84, 2.87, 2.91, 2.94, 2.98, 3.01, 3.05, 3.09, 3.12, 3.16, 3.20, 3.24, 3.28, 3.32, 3.36, 3.40, 3.44, 3.48, 3.52, 3.57, 3.61, 3.65, 3.70, 3.74, 3.79, 3.83, 3.88, 3.92, 3.97, 4.02, 4.07, 4.12, 4.17, 4.22, 4.27, 4.32, 4.37, 4.42, 4.48, 4.53, 4.59, 4.64, 4.70, 4.75, 4.81, 4.87, 4.93, 4.99, 5.05, 5.11, 5.17, 5.23, 5.30, 5.36, 5.42, 5.49, 5.56, 5.62, 5.69, 5.76, 5.83, 5.90, 5.97, 6.04, 6.12, 6.19, 6.26, 6.34, 6.42, 6.49, 6.57, 6.65, 6.73, 6.81, 6.90, 6.98, 7.06, 7.15, 7.23, 7.32, 7.41, 7.50, 7.59, 7.68, 7.77, 7.87, 7.96, 8.06, 8.16, 8.25, 8.35, 8.45, 8.56, 8.66, 8.76, 8.87, 8.98, 9.09, 9.20, 9.31, 9.42, 9.53, 9.65, 9.76, 9.88];

let series = new Map([
    ["e3", e3],
    ["e6", e6],
    ["e12", e12],
    ["e24", e24],
    ["e48", e48],
    ["e96", e96],
    ["e192", e192]
]);

let time_units = new Map([
    ["s", 1],
    ["ms", 0.001],
    ["us", 0.000001],
    ["ns", 0.000000001],
]);

let time_unit_map = new Map([
    ["seconds", "s"],
    ["second", "s"],
    ["secs", "s"],
    ["sec", "s"],
    ["s", "s"],
    ["milliseconds", "ms"],
    ["millisecond", "ms"],
    ["mseconds", "ms"],
    ["msecond", "ms"],
    ["msecs", "ms"],
    ["msec", "ms"],
    ["ms", "ms"],
    ["microseconds", "us"],
    ["microsecond", "us"],
    ["useconds", "us"],
    ["usecond", "us"],
    ["usecs", "us"],
    ["usec", "us"],
    ["us", "us"],
]);

let resistor_decade = new Map([
    ["100R", 100],
    ["1kR", 1000],
    ["10kR", 10000],
    ["100kR", 100000],
    ["1MR", 1000000],
]);

let capacitor_decade = new Map([
    ["1pF", 0.000000000001],
    ["1nF", 0.000000001],
    ["1μF", 0.000001],
    ["1mF", 0.001],
]);

let rc_args = {
    "timeConstant": "1 sec",
    "units": "s",
    "tolerance": 10,
    "resistorDecade": "1kR",
    "capacitorDecade": "1mF",
    "series": "e3"
};

let r_suffixes = {
    "100R": "Ω",
    "1kR": "kΩ",
    "10kR": "kΩ",
    "100kR": "kΩ",
    "1MR": "MΩ",
}

// Create a function that takes a target time constant, 
// the units of the time constant, decade values for resistance and capacitance, 
// the component series (i.e. e3, e96, etc.) and a tolerance value as a percent. 
// Return an array of arrays containing all possible combinations of resistance and capacitance that meet the target time constant with the given tolerance.
function timeConstant(tau, tau_units, tolerance, r_decade, c_decade, component_series) {

    let results = [];

    let tau_scaled = time_units.get(tau_units) * tau;

    let tau_min = tau_scaled * (1 - (tolerance / 100));
    let tau_max = tau_scaled * (1 + (tolerance / 100));

    let r_series = series.get(component_series);
    let c_series = series.get(component_series);

    for (let i = 0; i < r_series.length; i++) {
        for (let j = 0; j < c_series.length; j++) {
            for (let k = 0; k < 3; k++) {
                let r_decade_val = resistor_decade.get(r_decade);
                let r = r_series[i] * r_decade_val;

                let c_decade_val = capacitor_decade.get(c_decade);
                let c = c_series[j] * c_decade_val * (10**k);
                let tau_tmp = r * c;
                if (tau_tmp >= tau_min && tau_tmp <= tau_max) {
                    if (r_decade_val >= 1000 && r_decade_val < 1000000) {
                        results.push([(r/1000).toFixed(2) + r_suffixes[r_decade], (c/c_decade_val).toFixed(2) + c_decade.slice(1,3), Math.abs((tau_tmp-tau_scaled)/tau_scaled)]);
                    }
                    else {
                        results.push([(r/r_decade_val).toFixed(2) + r_suffixes[r_decade], (c/c_decade_val).toFixed(2) + c_decade.slice(1,3), Math.abs((tau_tmp-tau_scaled)/tau_scaled)]);
                    }
                }
            }
        }
    }
    return results.sort((a, b) => Math.abs(a[2]) - Math.abs(b[2]));
};

let inputElements = ["timeConstant", "tolerance"];

let changeElements = ["resistorDecade", "capacitorDecade", "series"];

inputElements.forEach(function(elementId) {
    document.getElementById(elementId).addEventListener("input", function() {
        if (elementId == "timeConstant") {
            let results = parseTimeUnits(document.getElementById(elementId).value);
            if (results) {
                rc_args[elementId] = results[0];
                rc_args["units"] = time_unit_map.get(results[1]);
                console.log("Time constant: " + rc_args[elementId] + " " + rc_args["units"]);
            }
        }
        else {
            rc_args[elementId] = document.getElementById(elementId).value;
        }
        updateResults();
    });
});

changeElements.forEach(function(elementId) {
    document.getElementById(elementId).addEventListener("change", function() {
        rc_args[elementId] = document.getElementById(elementId).value;
        updateResults();
    });

    document.getElementById(elementId).addEventListener('wheel', function(e) {
        if (this.hasFocus) {
            return;
        }
        if (e.deltaY < 0) {
            this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
        }
        if (e.deltaY > 0) {
            this.selectedIndex = Math.min(this.selectedIndex + 1, this.length - 1);
        }
        rc_args[elementId] = document.getElementById(elementId).value;
        updateResults();
    });
});

function updateResults() {
    let results = timeConstant(rc_args["timeConstant"], rc_args["units"], rc_args["tolerance"], rc_args["resistorDecade"], rc_args["capacitorDecade"], rc_args["series"]);
    console.log(results)
    if (results.length == 0) {
        document.getElementById("resistance").value = "No solution found."
        document.getElementById("capacitance").value = "No solution found."
        document.getElementById("error").value = "No solution found."
    }
    else {
        document.getElementById("resistance").value = results[0][0];
        document.getElementById("capacitance").value = results[0][1];
        document.getElementById("error").value = results[0][2].toFixed(2);
    }
};

function parseTimeUnits(timeUnits) {
    const re_seconds = /^(\d+(\.\d+)?)\s?(seconds|second|secs|sec|s)$/;
    const re_milliseconds = /^(\d+(\.\d+)?)\s?(milliseconds|millisecond|mseconds|msecond|msecs|msec|ms)$/;
    const re_microseconds = /^(\d+(\.\d+)?)\s?(microseconds|microsecond|useconds|usecond|usecs|usec|us)$/;
    const re_expressions = [re_seconds, re_milliseconds, re_microseconds];

    for (let x of re_expressions) {
        if (x.test(timeUnits)) {
            const match = timeUnits.match(x);
            if (match) {
                return [parseFloat(match[1]), match[3]]; // Return the number and the unit
            }
        }
    }
    return null;
};

window.onload = updateResults;
