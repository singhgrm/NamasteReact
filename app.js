// here we will write all our react code
const heading =React.createElement("h1",{id:"heading"},"heello world from react");
// {} inside {} we give attribute to tage like size color ,id ,class,background color.type ets
console.log(heading);
//here h1 is object,means this heading is react element
//so h1 is object {} iside {} is attribute and "heelo world" is children
//const root=ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

//lets create div inside div then h1 tag using react
const parent1=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"}
    ,React.createElement("h1",{},"i am h1 tag inside 2 div")));
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent1);
console.log(parent1);

//how to use two tages inside one div...so for using two or more tags ,we use array in child parameter
const parent2=React.createElement("div",{id:"parent1"},
    React.createElement("div",{id:"parent2"},
    React.createElement("div",{id:"child"},[React.createElement("h1",{id:"heading"},
        "i am inside 3 div used h1 tag"),React.createElement("h5",{id:"heading"},
            "i am inside 3 div used h5 tag")])));
    const root1=ReactDOM.createRoot(document.getElementById("root"));
    root1.render(parent2);
    console.log(parent2);

//lets create one parent div and two child div in the same parent using react
const val=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
    React.createElement("h1",{id:"heading 1"},"this is heading 1 of child1 div")),
    React.createElement("div",{id:"child2"},
        React.createElement("h1",{id:"heading2"},"this is heading 2 of child2 div"))]);
const root2=ReactDOM.createRoot(document.getElementById("root"));
root2.render(val);
console.log(val);
//but these code are too massy to undestand.. to to simplify react we use jsx
