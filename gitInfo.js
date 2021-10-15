/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

// var gitDefinition = "It's like a command line interface where you get you can save and run files and then create a connection from your files to git hub.";
// console.log(gitDefinition);

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

// let gitHubDefinition = "GitHub is where you push your files with git.  It's an online place to store and share your code.";
// console.log(gitHubDefinition);

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE

// let init = new Object();
// init.description = 'Initializes a local git repo in the current folder';
// init.code = 'git init';


// console.log(init.description);
// console.log(init.code);

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE

// let clone = new Object();
// clone.description = 'Copy a repo from GitHub and put it on your machine';
// clone.code = 'git clone REPO_URL';

// console.log(clone.description);
// console.log(clone.code);

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE

// let status = new Object();
// status.description = 'Info about files like which ones you have added that are ready to be commited';
// status.code = 'git status';

// console.log(status.description);
// console.log(status.code);


//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE

// let add = new Object();
// add.description = 'Add some files or folders to be tracked';
// add.code = 'git add (filename) or . for all files';

// console.log(add.description);
// console.log(add.code);


//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE

// let commit = new Object();
// commit.description = 'Creates a snapshot of files that are being tracked';
// commit.code = 'git commit -m "(description)"';

// console.log(commit.description);
// console.log(commit.code);


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE

let push = new Object();
push.description = 'Actually sends the file to GitHub';
push.code = '"git push -u origin main" (first git push) and then "git push" for each time after';

console.log(push.description);
console.log(push.code);