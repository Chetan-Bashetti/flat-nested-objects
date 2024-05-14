# flat-nested-objects

This Package will flat the nested objects and make all key values pairs available to use at initial level

# Example

- let complexObj = {
- level_one: {
-      level_two: {
-     	level_three: {
-     			level_four: {
-     				level_five: {
-     					level_six: {
-     						level_seven: {
-     							level_n: { actual_required_key: 'required_value' }
-     						}
-     					}
-     				}
-     			}
-     		}
-     	}
- }
- };

const { actual_required_key } = flatNestedObjects(complexObj);

# As you can see in above example the actual required key is in nth level which somtimes becomes complex to travel through object keys and reach the actual key to get the required value

# In this kind of situation we can use <b>flat-nested-objects</b> library and pass the complex object to it as argument, the function will return required value at the 1st level when destructured.
