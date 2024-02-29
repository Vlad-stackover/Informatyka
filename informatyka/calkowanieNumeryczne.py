def fun(x):
    return x * x + x + 2

a = int(input('Pierwsza wartość przedziału [a,b] '))
b = int(input('druga wartość przedziału [a, b]' )) 
n = int(input('liczba prostokątów ' )) 

def obliczPole(a,b,n):
    x = (b-a) / n
    S = 0
    srodek = a + (b-a) / (2.0 * n)

    for i in range(n):
        S = S + f(srodek)
        srodek += x
        return S * x

wynik = obliczPole(a,b,n)

print('Wynik:', wynik)