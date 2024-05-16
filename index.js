function flatNestedObjects(complexObj) {
	let flattenObj = {};

	function findKeys(nestedDataObj) {
		if (
			typeof nestedDataObj === 'object' &&
			Object?.keys(nestedDataObj)?.length
		) {
			Object?.keys(nestedDataObj)?.map((eachKey) => {
				if (typeof nestedDataObj[eachKey] === 'object') {
					findKeys(nestedDataObj[eachKey]);
				} else {
					flattenObj[eachKey] = nestedDataObj[eachKey];
				}
			});
			return flattenObj;
		} else {
			return undefined;
		}
	}
	return findKeys(complexObj);
}

module.exports = flatNestedObjects;
