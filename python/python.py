### This python script will show the basics of python!

## importing modules
import os              # import an entire module
import turtle as tl    # import a module with a nickname
from time import sleep # import a function from a module


## writing Hello World!
print("Hello World!") # python automatically adds a newline at the end of a print statment
print() # we can do this to create a blank line


## using variables

# variable_name = value
age = 17 # this is an int, python doesn't need you to specify types. It figures it out on it's own
name = "Oskar" # this is a string
lastName = 'Lindgren' # we can also use single quotes!
favoriteActivities = ["Coding", "Sleeping", "Drinking coffe"] # we can make a list of strings like this
favoriteNumbers = [1, 7, 8, 32, 64, 128, 256] # or a list of numbers like this!
favoriteThings = [favoriteActivities, favoriteNumbers] # we can even make a list of lists! 
myTuple = (15, 32) # this is a tuple, it's often used for coordinates on such
myLongTuple = (1,2,3,4,5) # a touple doesn't have to ahve only 2 values, it can have as many as you want!
myFloat = 1.2 # this is a float, it's an integer with a little bit more!


## concatinating variables

print("My name is " + name + " " + lastName) # + means that we're adding or "concatenating" to the string
print("My name is", name, lastName) # we can also use , This will add a space by itself
print("My name is", name, lastName, "I am", age, "years old!") # we can even use multiple types of variables!
# but then we can't use +. we have to use ,
# so this wouldn't work:
# print("My name is " + name + " " + lastName + " I am " + age + " years old!") 
# but we can use fstrings!
print(f"My name is {name} {lastName} I am {age} years old!")
print()

## user input

userName = input("What's your name?\n") # unlike print(), input() will not add a new line, so we have to do it ourselves 
# we can also print out the question, then ask for input
print("How old are you?")
userAge = input() # Now we don't have to write the newline
userAge = int(userAge) # we wanna make sure that userAge is a number, or an integer!
# (if the user types something else than a number this will throw an error, but we'll look at that later!)
print()

## if statments

if userAge < 5: # if userAge is less than 5
    print("You're younger than 5!")
elif userAge <= 10: # if userAge is less than OR equal to 10
    print("You're still pretty young!")
elif 11 < userAge < 20: # if userAge is between 11 and 20 (12,13,14,15,16,17,18,19 - NOT 11 or 20)
    print("You're between the age of 11 and 20")
elif 20 <= userAge <= 25: # this will take 20, 21, 22, 23, 24 and 25
    print("You're an grown up!")
elif userAge != 69: # this is how we check if something ISN'T true
    pass # and this is how we do nothing!
else: # if none of the above apply
    print("You're pretty old!")
print()

## loops!

# for loop
for n in range(1, 10): # counting from 1 to 10 (stops when it reaches ten, meaning it won't do anything when it reaches 10)
    print("Loop iteration:", n)
print()

# while loop
timesRan = 0
while True: # will continue forever
    print("I'm in a loop")
    timesRan += 1 # increase timesRan by one

    if timesRan >= 5:
        break # breaks out fo the loop
print("Phew, I broke out of the loop!")
print()

## functions
def myFunc(): # we make the function like this
    print("This is a function!") # then we tell it what to do

myFunc() # then we can call it

# we can pass an argument like this
def saySomething(thing_to_say:str): # we will use the variable "thing_to_say" inside the function, then python will forget it. We're also saying that the variable should only accept inputs of the type string
    print(thing_to_say)

saySomething("I like python!") # then we can call it like this
saySomething(thing_to_say="I LOVE python!") # we can also call it like this, this is usefull when a function has multiple arguments

# we can also define a "default state" like this

def anotherFunction(argument="Nothing was passed"):
    print(argument)

anotherFunction()
anotherFunction("Something was passed!")

# a function can also "return" a value

def addTwoNumbers(num1:int, num2:int):
    return num1 + num2

print(addTwoNumbers(15, 32)) # let's print out the thing it returns!
print()


## try statment
# if something might not always work, we can use a try statment
try: # try to do this
    temp = 1+1
    print("I could add 1+1")
except Exception: # if it fails, do this instead
    print("I failed to add 1+1 :(")
finally: # regardless of result, do this
    print("Well that's over!")
# this will never fail, because computers are excelent at math, we'll see later how useful it can be!


## let's jump back to the userAge problem!
# we can force the user to only enter a number like this:
while True:
    try:
        userAge = int(input("How old are you?\n")) # it will first try this
        break # then this

    # if at any point it fails, it will stop trying and to this instead
    except Exception:
        print("That's not a number!")
print()

## Let's get back to lists!
# we can split a sentance into a lsit of words like this
sentance = "I really like to write code!"
words = sentance.split(" ") # split it at every space character
print(words)
print("Wow, list's look kinda weird, huh?")
# we can also grab just one part of a list
print(words[0]) # this will grab the thing at the 0th position
print(words[3]) # this will grab the thing at the 3rd position
print()
