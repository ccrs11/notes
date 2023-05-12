# notas en python

# A program to check if a number is positive, negative or zero

num = 5

if num > 0:
    print("Positive number")
elif num == 0:
    print("Zero")
else:
    print("Negative number")


# A program to print the first 5 natural numbers using a while loop

count = 1

while count <= 5:
    print(count)
    count += 1

# A program to read numbers from the user until a negative number is entered

num = 0

while True:
    num = int(input("Enter a number: "))
    if num < 0:
        break
    print("You entered:", num)

# A program to print the first 5 natural numbers using a for loop

for i in range(1, 6):
    print(i)
