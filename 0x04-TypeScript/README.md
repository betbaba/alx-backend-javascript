# 0x04. Typescript
## Learning Objectives
 * At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

   * Basic types in Typescript
   * Interfaces, Classes, and functions
   * How to work with the DOM and Typescript
   * Generic types
   * How to use namespaces
   * How to merge declarations
   * How to use an ambient Namespace to import an external library
   * Basic nominal typing with Typescript
## Requirements
 * Allowed editors: vi, vim, emacs, Visual Studio Code
 * All your files should end with a new line
 * All your files will be transpiled on Ubuntu 18.04
 * Your TS scripts will be checked with jest (version 24.9.* )
 * A README.md file, at the root of the folder of the project, is mandatory
 * Your code should use the ts extension when possible
 * The Typescript compiler should not show any warning or error when compiling your code
## Tasks
<font size=2> **0. Creating an interface for a student** </font>

  * Copy the following configuration files (provided above) into the task'_0 directory: package.json, .eslintrc.js, tsconfig.json, webpack.config.js

  * Write your code in the main.ts file:

   * Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
   * Create two students, and create an array named studentsList containing the two variables
   * Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
   * Each row should contain the first name of the student and the location
  * Requirements:

   * When running, Webpack should return No type errors found.
   * Every variable should use TypeScript when possible.

<font size=2> **1. Let's build a Teacher interface**</font>

  * Create a directory task`_`1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js

   * firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initialized
   * fullTimeEmployee(boolean) this attribute should always be defined
   * yearsOfExperience(number) this attribute is optional
   * location(string) this attribute should always be defined
   * Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute

<font size=2> **2. Extending the Teacher class** </font>

  * Write an interface named Directors that extends Teacher. It requires an attribute named numberOfReports(number)

<font size=2> **3. Printing teachers** </font>

  * Write a function printTeacher:

   * It accepts two arguments firstName and lastName
   * It returns the first letter of the firstName and the full lastName
   * Example: printTeacher("John", "Doe") -> J. Doe
   * Write an interface for the function named printTeacherFunction.

<font size=2> **4. Writing a class** </font>

  * Write a Class named StudentClass:

   * The constructor accepts firstName(string) and lastName(string) arguments
   * The class has a method named workOnHomework that return the string Currently working
   * The class has a method named displayName. It returns the firstName of the student
   * The constructor of the class should be described through an Interface
   * The class should be described through an Interface
  * Requirements:

   * You can reuse the Webpack configuration from the previous exercise to compile the code.
   * When running npm run build, no TypeScript error should be displayed.
   * Every variable should use TypeScript when possible.
<font size=2> **5. Advanced types Part 1** </font>

  * Create the DirectorInterface interface with the 3 expected methods:

   * workFromHome() returning a string
   * getCoffeeBreak() returning a string
   * workDirectorTasks() returning a string
  * Create the TeacherInterface interface with the 3 expected methods:

   * workFromHome() returning a string
   * getCoffeeBreak() returning a string
   * workTeacherTasks() returning a string
  * Create a class Director that will implement DirectorInterface

   * workFromHome should return the string Working from home
   * getToWork should return the string Getting a coffee break
   * workDirectorTasks should return the string Getting to director tasks
  * Create a class Teacher that will implement TeacherInterface

   * workFromHome should return the string Cannot work from home
   * getCoffeeBreak should return the string Cannot have a break
   * workTeacherTasks should return the string Getting to work
  * Create a function createEmployee with the following requirements:

   * It can return either a Director or a Teacher instance
   * It accepts 1 arguments:
   * salary(either number or string)
   * if salary is a number and less than 500 - It should return a new Teacher. Otherwise it should return a Director
<font size=2> **6. Creating functions specific to employees** </font>

  * Write a function isDirector:

   * it accepts employee as an argument
   * it will be used as a type predicate and if the employee is a director
  * Write a function executeWork:

   * it accepts employee as an argument
   * if the employee is a Director, it will call workDirectorTasks
   * if the employee is a Teacher, it will call workTeacherTasks
<font size=2> **7. String literal types** </font>

  * Write a String literal type named Subjects allowing a variable to have the value Math or History only. Write a function named teachClass:

   * it takes todayClass as an argument
   * it will return the string Teaching Math if todayClass is Math
   * it will return the string Teaching History if todayClass is History
<font size=2> **8. Ambient Namespaces** </font>

  * Create a directory called task`_`3 and copy these configuration files into it: package.json, webpack.config.js, tsconfig.json.

   * The first part of will require that you build an interface and a type. Inside a file named interface.ts:

   * Create a type RowID and set it equal to number
   * Create an interface RowElement that contains these 3 fields:
    * firstName: string
    * lastName: string
    * age?: number
<font size=2> **9. Namespace & Declaration merging** </font>

  * in task`_`4/js/subjects:

   * Create a file Teacher.ts and write a Teacher interface in a namespace named Subjects.
    * the interface requires firstName and lastName as string
   * Create a file Subject.ts and write a Subject class in the same namespace named Subjects.
    * the class has one attribute teacher that implements the Teacher interface
    * the class has one setter method setTeacher that accepts a teacher in argument (and as setter, set the instance attribute teacher with it)
   * Create a file Cpp.ts and make the following modifications in the same namespace.
    * Using declaration merging, add a new optional attribute experienceTeachingC (number) to the Teacher interface
    * Create a class Cpp extending from Subject
    * Write a method named getRequirements that will return a string Here is the list of requirements for Cpp
    * Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
    * If the teacher doesn’t have any experience in teaching C, then the method should return a string No available teacher
   * Create a file React.ts and write a React Class in the same namespace.
    * Add a new attribute experienceTeachingReact? (number) to the Teacher interface
    * In the class, write a method named getRequirements that will return a string Here is the list of requirements for React
    * Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
    * If the teacher doesn’t have any experience in teaching React, then the method should return a string No available teacher
   * Create a file Java.ts and write a Java Class in the same namespace.
    * Add a new attribute experienceTeachingJava? (number) to the Teacher interface
    * In the class, write a method named getRequirements that will return a string Here is the list of requirements for Java
    * Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
    * If the teacher doesn’t have any experience in teaching Java, then the method should return a string No available teacher
<font size=2> **10. Update task_4/js/main.ts** </font>

   * create and export a constant cpp for Cpp Subjects
   * create and export a constant java for Java Subjects
   * create and export a constant react for React Subjects
   * create and export one Teacher object cTeacher with experienceTeachingC = 10
   * for Cpp subject, log to the console C++, set cTeacher as the teacher, call the two methods getRequirements 
      and getAvailableTeacher and print the strings they return
   * for Java subject, log to the console Java, set cTeacher as the teacher, call the two methods getRequirements 
      and getAvailableTeacher, and print the strings they return
   * for React subject, log to the console React, set cTeacher as the teacher, call the two methods getRequirements 
     and getAvailableTeacher, and print the strings they return

<font size=2> **11. Brand convention & Nominal typing** </font>

   * Create a directory task`_`5 and copy these configuration files into the root of task`_`5: package.json, tsconfig.json, webpack.config.js

   * Create two interfaces MajorCredits and MinorCredits in task`_`5/js/main.ts:
    * Each interface defines a number named credits
    * Add a brand property to each interface in order to uniquely identify each of them
   * Create two functions named sumMajorCredits and sumMinorCredits in task`_`5/js/main.ts:
    * Each function takes two arguments subject1 and subject2
    * sumMajorCredits returns MajorCredits value and sumMinorCredits returns MinorCredits value
    * Each function sums the credits of the two subjects

