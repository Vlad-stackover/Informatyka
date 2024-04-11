# n = int(input('Podaj nr wyrazu ciagu: '))

# def fibi(n):
#     if n < 3:
#         return 1
#     return fibi(n-2) + fibi(n - 1)


# ciag = fibi(n)

# print(n, ' wyraz ciagu ma wartosc ', ciag)

def fibonacci_sequence(n):
    f0 = 0 
    f1 = 1  

    
    if n == 0:
        print(f0)
    
    elif n == 1:
        print(f1)
    else:
        
        print(f0)
        print(f1)

        
        for i in range(2, n + 1):
            f = f0 + f1
            f0 = f1
            f1 = f
            print(f)


n = int(input("Podaj liczbę n: "))
print("Ciąg Fibonacciego dla n =", n, ":")
fibonacci_sequence(n)
