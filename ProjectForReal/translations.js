//window.alert("File Found");
function translate (matrix, arrayValues) {
    var xValue = arrayValues[0];
    var yValue = arrayValues[1];
    var zValue = arrayValues[2];
 
    matrix[12] = matrix[0] * xValue + matrix[4] * yValue + matrix[8] * zValue + matrix[12];
    matrix[13] = matrix[1] * xValue + matrix[5] * yValue + matrix[9] * zValue + matrix[13];
    matrix[14] = matrix[2] * xValue + matrix[6] * yValue + matrix[10] * zValue + matrix[14];
    matrix[15] = matrix[3] * xValue + matrix[7] * yValue + matrix[11] * zValue + matrix[15];
    //return a;
}

function scale (matrix, valuesArray) {
    var xValue = valuesArray[0]
    var yValue = valuesArray[1];
    var zValue = valuesArray[2];

    matrix[0] *= xValue;
    matrix[1] *= xValue;
    matrix[2] *= xValue;
    matrix[3] *= xValue;
    matrix[4] *= yValue;
    matrix[5] *= yValue;
    matrix[6] *= yValue;
    matrix[7] *= yValue;
    matrix[8] *= zValue;
    matrix[9] *= zValue;
    matrix[10] *= zValue;
    matrix[11] *= zValue;
}

function shearX (matrix, degreee) {
	var cot = Math.cos(degreee) / Math.sin(degreee);

	matrix[4] += (matrix[0] * cot)
	matrix[5] += (matrix[1] * cot)
	matrix[6] += (matrix[2] * cot)
	matrix[7] += (matrix[3] * cot) 
}

function rotateAroundPointZ(matrix, degree, point) {
	translate(matrix, point);

	var cos = Math.cos(degree);
	var sin = Math.sin(degree);

	var m0 = matrix[0];
	var m1 = matrix[1];
	var m2 = matrix[2];
	var m3 = matrix[3];
	var m4 = matrix[4];
	var m5 = matrix[5];
	var m6 = matrix[6];
	var m7 = matrix[7];

	matrix[0] = (m0 * cos) + (m4 * sin);
	matrix[1] = (m1 * cos) + (m5 * sin);
	matrix[2] = (m2 * cos) + (m6 * sin);
	matrix[3] = (m3 * cos) + (m7 * sin);

	matrix[4] = (m4 * cos) - (m0 * sin);
	matrix[5] = (m5 * cos) - (m1 * sin);
	matrix[6] = (m6 * cos) - (m2 * sin);
	matrix[7] = (m7 * cos) - (m3 * sin);

	translate(matrix, [-1 * point[0], -1 * point[1], -1 * point[2]]);
}