n = int(input("Enter num: "))

def ciag(n):
    if n == 1:
        return 1
    if n == 2:
        return 0.5
    return -ciag(n-1) * ciag(n-2)

wynik = ciag(n)
print(n, 'wyraz ciagu ma wartosc', wynik)