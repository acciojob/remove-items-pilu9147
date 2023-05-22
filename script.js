
//your JS code here. If required.
function deleteElement() {
	let sele = document.getElementsByTagName("select")[0];
	let val = sele.value;
	let child = sele.children;
	for(let i = 0;i < sele.length;i++) {
		if(val===child[i].value) {
		 child[i].remove()
		}
	}
}
// function deleteElement() {
//     var selectElement = document.getElementById('colorSelect');
//     var selectedColor = selectElement.value;

//     for (var i = 0; i < selectElement.options.length; i++) {
//         if (selectElement.options[i].value === selectedColor) {
//             selectElement.remove(i);
//             break;
//         }
//     }
// }
