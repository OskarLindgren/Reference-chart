// we need to include some standard libraries to be able to do things
#include <stdio.h> // this one lets us write to the screen aswell as get user input
#include <Windows.h> // this one is needed for some windows functions
#include <string.h> // adds support for modifying strings in certain ways

// now let's disable some annoying warnings we don't wanna see when compiling
#pragma warning(disable: 4996)
#pragma warning(disable: 6031)

// skip this part and come back to it later. You'll know when to come back here :)
// this is how we define a function
// we're using void, because it doesn't return any value
void myFunc()
{
	printf("I was ran in a function!\n");
}

void anotherFunc(char string[128])
{
	printf("%s\n", string);
}

// we can also make a function return a value
// were using int because it returns an int
int addTwoNumbers(int num1, int num2)
{
	return (num1 + num2);
}

int main(void) // this is our main function, this is where the computer will start reading the code. we pass void to tell the computer that there are no parameters passed
{
	// writing Hello World!
	// in c you have to finish every call with a ;
	printf("Hello World!\n"); // printf does not add a newline, so we have to add it outselves
	printf("\n"); // this is how we create a single empty line, great for formating

	// using variables
	// type variableName = value
	int age = 17;
	// strings don't exist in native c, so we need to make an array of chars with a specific length +1 for the null terminator '\0'. (the compiler adds this by itself, so don't worry about it, jsut leave space for it)
	char name[6] = "Oskar"; // we use double quotes for strings
	char lastName[9] = "Lindgren";
	char firstLetter = 'o'; // and single quotes for chars
	float myFloat = 1.2;    // These two are basically the same thing, but the "double" allows for double tha amount of data (4 -> 8 bytes), meaning you can have more precision (7 -> 15 digits precision)
	double myDouble = 1.2;  // ^^

	// concatinating variables
	printf("My name is %s %s I am %d years old!\n", name, lastName, age); // we need to write %TYPE and then pass the variable we want to use
	printf("\n");

	// user input
	char userName[128]; // we're allowing for up to 128 characters in the username. Some compilers allow you to write "char* userName" this will dynamically allocate the correct size, but all compilers allow this method
	printf("What's your name?\n");
	scanf("%s", &userName); // we're looking for the type string, and we want to store it in the "userName" variable. Note the usage of the & sign
	int userAge;
	printf("How old are you?\n");
	scanf("%d", &userAge); // this time we're looking for the type digit
	// *it's worth noting that scanf() is a very unsafe function, but for this purpose it will do just fine
	// *it's also woth noting that scanf() is bugged when looking for %c, so you need to typ scanf(" %c"), note the space
	printf("Hello %s, I would have never guessed you were %d years old!\n", userName, userAge);

	if (userAge < 5) // age is less than 5
	{
		printf("You're younger than 5!\n");
	}
	else if (userAge <= 10) // age is less than or equal to 10
	{
		printf("You're still pretty young!\n");
	}
	else if (11 < userAge < 20) // age is between 11 and 20 (12,13,14,15,16,17,18,19 - NOT 11 or 20)
	{
		printf("You're between the age of 11 and 20!\n");
	}
	else if (20 <= userAge <= 25) // this will take 20, 21, 22, 23, 24 and 25
	{
		printf("You're a grown up!\n");
	}
	else if (userAge != 69) // this is how we check is something ISN'T true
	{
		; // this is how we do nothing
	}
	else // if none of the above apply
	{
		printf("You're pretty old!\n");
	}
	printf("\n");

	// loops!
	// for loop
	for (int i = 0; i < 10; i++) // this will start i at 0, and add 1 untill i is no longer less than 10
	{
		printf("Loop iteration: %d\n", i);
	}

	//while loop
	int runTimes = 0;
	while (1) // run forever
	{
		printf("I'm in a loop!\n");
		runTimes++; // add 1 to runTimes

		if (runTimes >= 5)
		{
			break; // breaks out of the loop
		}
	}
	printf("Phew, I broke out of the loop!\n");
	printf("\n");

	// functions!
	// go read the stuff at the top btw

	// then we call them like this
	myFunc();
	anotherFunc("I like c!\n");
	printf("%d\n", addTwoNumbers(15, 32)); // print the value that the function returns
	
	// saldy c does not tavily support try statments, <Windows.h> has a try statment, but that's beyond the scope of this project
}
