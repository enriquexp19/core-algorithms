export default function fibonacci(num) {
	if(isNaN(num) || num <= 0) {
		return "error"
	}
	var array = [];
	if (num > 0) {
		array.push(0)
		}
	if (num > 1) {
		array.push(1);
	}
	for (var i = 2; i < num; i++) {
		var result = array[i-2] + array[i-1];
		array.push(result);
	}
	return array
}
