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

# def bin_wysz(array, x):
#     l = 0
#     p = len(array) - 1
#     while l <= p:
#         mid = (l + p) // 2
#         if array[mid] == x:
#             return mid
#         if array[mid] > x:
#             p = mid - 1
#         else:
#             p = mid + 1
        
#     return -1


# array = [10,1,6,3,9,8,2,7,5,4,0]
# array.sort()
# x = int(input('Enter number: '))
# result = bin_wysz(array, x)

# if result != -1:
#     print('Liczba ', x, 'zostala znaleziona w komorce o indeksie', result)
# else:
#     print('!!! Podales liczbe z poza zakeresu !!!\n')

#
# list = [1,2,3]
# list.sort()
# suma = 0
# x = 0
# while x <= list[-2]:
#     suma += list[x]
#     x += 1
   
# print(suma)

#Najlepszy sposób potęgowania
# podstawa = int(input('Enter podstawnik: '))
# wykładnik = int(input('Enter wykładnik: '))
# print(podstawa,' do potęgi ',wykładnik, 'wynosi',podstawa**wykładnik)


# w = 1
# pod = int(input('Enter podstawnik: '))
# wyk = int(input('Enter wykładnik: '))



# left = int(input('Enter: '))
# right = 2

# def liczbyPierwsze(left, right):
#     while left != 1:
#         if left % right == 0:
#             print(right)
#             left = left / right
#         elif left % right != 0:
#             right += 1
        
        

# liczbyPierwsze(left, right)