# A program to calculate and display the basic tariff of an electricity service based on user's name and stratum

name = input("Enter user's name: ")
stratum = int(input("Enter user's stratum (1-5): "))

# Calculate the basic tariff based on the stratum
if stratum == 1:
    basic_tariff = 10000
elif stratum == 2:
    basic_tariff = 15000
elif stratum == 3:
    basic_tariff = 30000
elif stratum == 4:
    basic_tariff = 50000
else:
    basic_tariff = 65000

# Display the name and basic tariff to the user
print(f"{name} will pay a basic tariff of ${basic_tariff}")
