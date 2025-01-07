const categories = [
	{
		id: 1,
		name: "Chuyên mục 1",
	},
	{
		id: 2,
		name: "Chuyên mục 2",
		children: [
			{
				id: 4,
				name: "Chuyên mục 2.1",
			},
			{
				id: 5,
				name: "Chuyên mục 2.2",
				children: [
					{
						id: 10,
						name: "Chuyên mục 2.2.1",
					},
					{
						id: 11,
						name: "Chuyên mục 2.2.2",
					},
					{
						id: 12,
						name: "Chuyên mục 2.2.3",
					},
				],
			},
			{
				id: 6,
				name: "Chuyên mục 2.3",
			},
		],
	},
	{
		id: 3,
		name: "Chuyên mục 3",
		children: [
			{
				id: 7,
				name: "Chuyên mục 3.1",
			},
			{
				id: 8,
				name: "Chuyên mục 3.2",
			},
			{
				id: 9,
				name: "Chuyên mục 3.3",
			},
		],
	},
];
function newCategories(content) {
   
}

// function printChristmasTree(n, character) {
//     if (typeof n !== 'number' || n <= 0 || n >= 100 || !Number.isInteger(n) || typeof character !== 'string' || character.length !== 1) {
//         return 'Invalid';
//     }
//     let tree = '';

//     for (let i = 0; i < n; i++) {
//         const spaces = ' '.repeat(n - i - 1);
//         const chars = character.repeat(2 * i + 1);
//         tree += spaces + chars + spaces + '\n';
//     }

//     const trunkSpaces = ' '.repeat(n - 1);
//     tree += trunkSpaces + character + trunkSpaces + '\n';

//     return tree;
// }
// console.log(printChristmasTree(5, "o"));

