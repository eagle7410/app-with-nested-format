const nested2tree = (arr) => {
	const getChilds = (target, arr) => {

		let childs = [];
		let noChild = [];

		arr.map(current => {
			if ((current.left > target.left) && (current.right < target.right)) {
				childs.push(current)
			} else {
				noChild.push(current)
			}
		});

		for (let i = 0; i < childs.length; i++){
			childs = getChilds(childs[i], childs);
		}

		target.childs = childs;

		return noChild;

	};

	for (let i = 0; i < arr.length; i++){
		arr = getChilds(arr[i], arr);
	}

	return arr;
};

export default nested2tree;
