game.splash("Let's calculate the area of a trapezoid!")
let Base_1 = game.askForNumber("What is the length of base 1 (cm)")
let Base_2 = game.askForNumber("What is the length of base 2 (cm)")
let Height = game.askForNumber("What is the height (cm)")
let Area = (Base_1 + Base_2) / 2 * Height
game.splash("The area of a trapezoid with the first base of " + Base_1 + "cm and the second base of " + Base_2 + "cm and the height of " + Height + "cm has the area of " + Area + "cm².")
