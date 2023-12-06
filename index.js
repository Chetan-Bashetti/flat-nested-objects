let flattenObj = {};
const flatNestedObjects = (nestedDataObj) => {
	if (
		typeof nestedDataObj === 'object' &&
		Object?.keys(nestedDataObj)?.length
	) {
		Object?.keys(nestedDataObj)?.map((eachKey) => {
			if (typeof nestedDataObj[eachKey] === 'object') {
				flatNestedObjects(nestedDataObj[eachKey]);
			} else {
				flattenObj[eachKey] = nestedDataObj[eachKey];
			}
		});
		return flattenObj;
	} else {
		return undefined;
	}
};

module.exports = flatNestedObjects;
