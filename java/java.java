// importing libraries
import java.util.Scanner; // we will need this later to get user input

public class java { // the class has to be named the same as the java file
    // skip this part and read it later! You'll know when to come back here! :)
    // this is how we define a method
    public static void myMethod() {
        System.out.println("This was ran in a method!");
    }
    // we can also pass an argument like this. Don't forget to define the type!
    public static void anotherMethod(String thing_to_say) {
        System.out.println(thing_to_say);
    }
    // we can also have it return a value instead of printing something
    // rigth here  V  we need to define what type it will be returning, if it returns nothing, we can give it type void
    public static int addTwoNumbers(int num1, int num2) {
        return num1 + num2;
    }
    // now go back down again!

    // start reading here
    public static void main(String[] args) { // this is our main function. This is what the program will run first
        // writing Hello World!
        // all calls in java need to end with a ;
        System.out.println("Hello World!"); // java has 2 ways of printing something, println and print.
        // println adds a newline, print doesn'the
        System.out.println(); // we can do this to create a blank line

        // using variables
        // type variableName = value
        int age = 17; // this is a number
        String name = "Oskar"; // this is a string
        String lastName = "Lindgren"; // this is another string. Unlike python, we can't use single quotes headerRenderer
        Character firstLetter = 'o'; // this is a character, that's when we use single quotes
        String[] favoriteAcitivites = {"Coding", "Sleeping", "Drinking coffee"}; // this is an array of strings
        int[] favoriteNumbers = {1, 7, 8, 32, 64, 128, 256}; // this is an array of ints
        double myDouble = 1.2; // this is a double

        // concatinating variables
        System.out.println("My name is " + name + " " + lastName);
        System.out.println("My name is " + name + " " + lastName + " I am " + age + " years old!"); // we can even concatinate diffrent types!
        System.out.println(String.format("My name is %s %s I am %d years old!", name, lastName, age)); // we can also format them like this 
        System.out.println();

        //user input
        Scanner Scanner = new Scanner(System.in); // first we need to create a scanner object
        System.out.println("What's your name?");
        String userName = Scanner.nextLine();
        System.out.println("How old are you?");
        int userAge = Scanner.nextInt();

        // if statements
        if (userAge < 5) { // is age is less than 5
            System.out.println("You're younger than 5!");
        }
        else if (userAge <= 10) { // if age is less than or equal to 10
            System.out.println("You're still pretty young!");
        }
        else if (11 < userAge & userAge < 20) { // if Age is between 11 and 20 (12,13,14,15,16,17,18,19 - NOT 11 or 20)
            System.out.println("You're between the age of 11 and 20");
        }
        else if (20 <= userAge & userAge <= 25) { // this will take 20, 21, 22, 23, 24 and 25
            System.out.println("You're a grown up!");
        }
        else if (userAge != 69) { // this is how we check if something ISN'T true
            ; // this is how we do nothing
        }
        else { // if none of the above apply
            System.out.println("You're pretty old!");
        }
        System.out.println();

        // loops!
        // for loop
        for (int i = 0; i < 10; i++) {// this will start i at 0, and add 1 untill i is no longer less than 10
            System.out.println("Loop iteration: " + i);
        }

        //while loop
        int timesRan = 0;
        while (true) { // will run forever
            System.out.println("I'm in a loop");
            timesRan++; // increase timesRan by 1 every time the loop is random()
            
            if (timesRan >= 5) {
                break; // breaks out of the loop
            }
        }
        System.out.println("Phew, I broke out of the loop!");
        System.out.println();

        // methods (go read that stuff at the top btw)
        // then we can call them like this
        myMethod();
        anotherMethod("I like java!"); // if you're using multiple paramaters, make sure you put them in the right order!
        System.out.println(addTwoNumbers(15, 32)); // print the value that the function returns

        // try statements
        // if something wont always work, we can put it in a try statement
        try { // try to do this
            int temp = 1+1;
            System.out.println("I can add 1+1");
        }
        catch(Exception e) { // if it fails, do this
            System.out.println("If you're seeing this, I failed to add 1+1");
        }
        finally { // regardless of result, do this
            System.out.println("Well that's over!");
        }
        // this will never fail, because computers are excelent at math

        // this is an actual use case:
        String[] words = "I really like to write code!".split(" "); // this will make a list of the words in that sentance, split at ever blankspace
        int i = 0;
        while (true) {
            try {
                System.out.println("Word number " + i + " is " + words[i]); // this is how we access a part of a list
            }
            catch(Exception e) {
                System.out.println("We're out of words!");
                break;
            }
            i++;
        }
        scanner.close(); // don't forget to close your scanner to prevent a memory leak!
    }
}
