export const QUESTIONS_BY_LEVEL = {
 easy: [
    {
      title: "Array Length",
      question: "What does arr.length return?",
      options: ["First element", "Last index", "Total elements", "Array size in bytes"],
      answer: 2,
    },
    {
      title: "Loop Output",
      question: "How many times will this loop run? for(let i=0;i<5;i++)",
      options: ["4", "5", "6", "Infinite"],
      answer: 1,
    },
    {
      title: "Condition Check",
      question: "Which keyword is used for decision making?",
      options: ["loop", "if", "switch", "case"],
      answer: 1,
    },
    {
      title: "Data Type",
      question: "Which is NOT a primitive data type in JS?",
      options: ["String", "Boolean", "Object", "Number"],
      answer: 2,
    },
    {
      title: "Array Access",
      question: "Index of first element in array?",
      options: ["0", "1", "-1", "Any"],
      answer: 0,
    },
    {
      title: "Comparison",
      question: "Which operator checks value AND type?",
      options: ["==", "!=", "===", "="],
      answer: 2,
    },
    {
      title: "Function",
      question: "How do you define a function?",
      options: ["def", "function", "method", "fun"],
      answer: 1,
    },
    {
      title: "Console Output",
      question: "Which function prints output in JS?",
      options: ["print()", "log()", "console.log()", "write()"],
      answer: 2,
    },
    {
      title: "Array Method",
      question: "Which method adds element at end?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: 0,
    },
    {
      title: "Boolean",
      question: "Result of Boolean(0)?",
      options: ["true", "false", "null", "undefined"],
      answer: 1,
    },

    // extra 10
    { title: "Loop", question: "Which loop executes at least once?", options: ["for", "while", "do-while", "foreach"], answer: 2 },
    { title: "Array", question: "Which removes last element?", options: ["shift()", "pop()", "splice()", "slice()"], answer: 1 },
    { title: "JS", question: "JS stands for?", options: ["JavaSource", "JavaScript", "JustScript", "JsonScript"], answer: 1 },
    { title: "Operator", question: "Which is logical AND?", options: ["||", "&&", "&", "%"], answer: 1 },
    { title: "Variable", question: "Which keyword is block scoped?", options: ["var", "let", "const", "both let & const"], answer: 3 },
    { title: "String", question: "Length of 'DSA'?", options: ["2", "3", "4", "undefined"], answer: 1 },
    { title: "Condition", question: "else executes when?", options: ["if true", "if false", "always", "never"], answer: 1 },
    { title: "Type", question: "typeof [] ?", options: ["array", "object", "list", "undefined"], answer: 1 },
    { title: "Math", question: "Math.floor(4.9)?", options: ["4", "5", "4.9", "error"], answer: 0 },
    { title: "JS", question: "NaN means?", options: ["No any number", "Not a Number", "Null", "Negative"], answer: 1 },
  ],

   medium: [
    {
      title: "Array Logic",
      question: "Time complexity of searching in unsorted array?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      answer: 2,
    },
    {
      title: "String",
      question: "How to reverse a string?",
      options: ["split-reverse-join", "reverse()", "swap()", "mirror()"],
      answer: 0,
    },
    {
      title: "Map",
      question: "map() returns?",
      options: ["same array", "new array", "object", "number"],
      answer: 1,
    },
    {
      title: "Reduce",
      question: "reduce() is used for?",
      options: ["Filtering", "Transforming", "Accumulating", "Sorting"],
      answer: 2,
    },
    {
      title: "Scope",
      question: "let scope is?",
      options: ["Function", "Block", "Global", "Class"],
      answer: 1,
    },

    // add 15 more
    { title: "Sorting", question: "Best case of bubble sort?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], answer: 0 },
    { title: "Array", question: "splice() does?", options: ["copy", "delete", "insert/delete", "sort"], answer: 2 },
    { title: "DSA", question: "Stack follows?", options: ["FIFO", "LIFO", "LILO", "FILO"], answer: 1 },
    { title: "Queue", question: "Queue follows?", options: ["LIFO", "FIFO", "FILO", "None"], answer: 1 },
    { title: "JS", question: "=== compares?", options: ["value", "type", "both", "none"], answer: 2 },
    { title: "Recursion", question: "Base case is needed to?", options: ["speed up", "avoid infinite loop", "reduce memory", "none"], answer: 1 },
    { title: "Array", question: "filter() returns?", options: ["number", "array", "object", "boolean"], answer: 1 },
    { title: "Logic", question: "Palindrome means?", options: ["reverse same", "sorted", "unique", "none"], answer: 0 },
    { title: "Time", question: "Binary search complexity?", options: ["O(n)", "O(log n)", "O(1)", "O(n²)"], answer: 1 },
    { title: "JS", question: "Spread operator symbol?", options: ["...", "***", "??", "&&"], answer: 0 },
  ],


    hard: [
    {
      title: "Sorting",
      question: "Best sorting for large datasets?",
      options: ["Bubble", "Insertion", "Merge", "Selection"],
      answer: 2,
    },
    {
      title: "DSA",
      question: "Time complexity of merge sort?",
      options: ["O(n)", "O(n²)", "O(log n)", "O(n log n)"],
      answer: 3,
    },
    {
      title: "Graph",
      question: "BFS uses?",
      options: ["Stack", "Queue", "Tree", "Recursion"],
      answer: 1,
    },
    {
      title: "DP",
      question: "Dynamic Programming optimizes?",
      options: ["Loops", "Recursion", "Overlapping subproblems", "Sorting"],
      answer: 2,
    },
    {
      title: "Tree",
      question: "Height of single node tree?",
      options: ["0", "1", "-1", "Depends"],
      answer: 1,
    },

    // add 15 more
    { title: "Hashing", question: "Hash collision means?", options: ["Same key", "Same index", "Same value", "None"], answer: 1 },
    { title: "Stack", question: "Infix to postfix uses?", options: ["Queue", "Stack", "Array", "Tree"], answer: 1 },
    { title: "Graph", question: "DFS uses?", options: ["Queue", "Stack/Recursion", "Heap", "List"], answer: 1 },
    { title: "DP", question: "Memoization stores?", options: ["Calls", "Results", "Loops", "Inputs"], answer: 1 },
    { title: "Complexity", question: "Worst case quicksort?", options: ["O(n log n)", "O(n)", "O(n²)", "O(log n)"], answer: 2 },
    { title: "Heap", question: "Min heap root contains?", options: ["largest", "smallest", "random", "middle"], answer: 1 },
    { title: "Tree", question: "Binary tree max children?", options: ["1", "2", "3", "Unlimited"], answer: 1 },
    { title: "Graph", question: "Cycle detection in graph uses?", options: ["DFS", "BFS", "Heap", "Sorting"], answer: 0 },
    { title: "Array", question: "Kadane’s algorithm solves?", options: ["Sorting", "Max subarray sum", "Search", "Rotation"], answer: 1 },
    { title: "DP", question: "0/1 Knapsack is?", options: ["Greedy", "DP", "Divide", "Search"], answer: 1 },
  ],

};