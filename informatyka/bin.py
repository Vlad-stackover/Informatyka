binary_number = []
decimal_number = int(input("Enter: "))
i = 0

while decimal_number > 0:
    reszta = decimal_number % 2
    binary_number.append(reszta)
    decimal_number //= 2


binary_number.reverse()
print("Liczba binarna:", ''.join(map(str, binary_number)))
