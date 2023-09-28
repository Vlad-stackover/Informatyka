# print('PDW KOTY!')
# rok = int(input('Wprowadź rok urodzenia  '))
# wynik = 2023 - rok
# print('Twój wiek to:', wynik)

# a = int(input('Wprowadź liczbę a: '))
# b = int(input('Wprowadź liczbę b: '))
# if a > b:
#     print(b-a)
# else:
#     print(a-b)


#WYSZUKIWANIE BINARNE



szukana = int(input('Wprowadź szukaną liczbę: '))
tab = [1,2,3,4,5,6,7,8,9,10,11]
l = tab[0]
p = tab[-1]
sr = round((l+p)/2)
pozycja = 0



while l <= p:
    if tab[sr] == szukana:
        print('Pozycja liczby', szukana, 'w tablicy to', tab[sr])

    if tab[sr] > szukana:
        p = sr - 1

    else:
        l = sr + 1

    sr = (l+p)/2

    # return -1
