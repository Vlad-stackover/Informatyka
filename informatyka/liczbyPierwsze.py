left = int(input('Enter: '))
right = 2

def liczbyPierwsze(left, right):
    while left != 1:
        if left % right == 0:
            print(right)
            left = left / right
        elif left % right != 0:
            right += 1
        
        

liczbyPierwsze(left, right)