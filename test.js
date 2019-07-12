
var arryofnumbers = [1, 2, 3]

for (let i = 0; i < arryofnumbers.length; i++) {
    console.log(arryofnumbers[i])
}

var array = [
    {
        "name": "bill",
        "sex": "male",
        "children": ["c1", "c2"],
        "childrenage": [
            {
                "name": "ca1",
                "age": 20
            },
            {
                "name": "ca2",
                "age": 15
            }

        ],
    },

    {
        "name": "jane",
        "sex": "male",
        "children": ["a1", "a2", "a3"],
        "childrenage": [
            {
                "name": "aa1",
                "age": 18
            },
            {
                "name": "aa2",
                "age": 6
            }

        ],
    }
]

for (let i = 0; i < array.length; i++) {
    console.log(array[i].name)
    for (let j = 0; j < array[i].children.length; j++) {
        console.log(array[i].children[j])
    }
}
////console.log(array[0])
//console.log(array[1])