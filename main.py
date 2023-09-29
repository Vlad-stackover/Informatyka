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



#szukana = int(input('Wprowadź szukaną liczbę: '))
tab = [1,2,3,4]
l = tab[0]
p = tab[-1]
sr = round((l+p)/2)
pozycja = 0

suma = 0

x = 0
y = 1
while y <= tab[-2]:
    suma += tab[x] + tab[y]
    x += 1
    y += 1
    

print(suma)

# while l <= p:
#     if tab[sr] == szukana:
#         print('Pozycja liczby', szukana, 'w tablicy to', tab[sr])

#     if tab[sr] > szukana:
#         p = sr - 1

#     else:
#         l = sr + 1

#     sr = (l+p)/2

#     # return -1