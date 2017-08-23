#Pixart

Use the starter code and commit each step of the exercise.

- Fork and clone this repo.
- Checkout a new branch called '**YOUR-NAME**-solution'
- Work in small steps and commit frequently.
- When you're finished, push your solution branch to your fork (`git push origin <branch-name>`) and issue a **pull request**.
- Feel free to use jQuery.

###Commit 1

* When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
* Use jQuery to select the element and add an event listener

> **HINT:** You will notice that the page refreshes whenever you click the button. You need to prevent this from happening using a method you have not used before. Google "javascript event prevent default". You can also reference [this portion](https://github.com/ga-wdi-lessons/js-events-callbacks#event-defaults-405---410-5-minutes) of the Events & Callbacks lesson plan.

###Commit 2

* The same thing should happen when I press the enter key from inside the input field

###Commit 3

* Create 20 divs of the "square" class and append them to the body
  * **Hint**: use `.append()`

###Commit 4

* Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
  * **Hint**: either add the event listener while creating the squares, or listen for events on the `body` element

###Commit 5

* Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.

###Commit 6

* Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
* Change the event that changes your box colors from 'click' to 'mouseover'

###Commit 7

* Add a new tool to your program, the 'stamp' tool (explained below under `Stamp Tool Functionality`)
* The user should be able to pick either the paint tool (the one you already built in previous steps), or the new stamp tool.

#### Stamp Tool Functionality

* Get a movie name using an input field, then use AJAX to fetch the poster url of that movie using the omdb api and use that as your pixel image.

![art](http://i.imgur.com/3fsRWn4.jpg)
