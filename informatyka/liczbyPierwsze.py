def liczbyPierwsze(left):
    right = 2
    while left > 1:
        if left % right == 0:
            print(right)
            left = left // right
        else:
            right += 1

left = int(input('Enter a number: '))
liczbyPierwsze(left)
