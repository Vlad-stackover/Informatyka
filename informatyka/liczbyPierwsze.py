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
def generate_spiral_matrix(n):
    matrix = [[0] * n for _ in range(n)]
    num = 1

    top, bottom, left, right = 0, n - 1, 0, n - 1

    while top <= bottom and left <= right:
        for i in range(left, right + 1):
            matrix[top][i] = num
            num += 1
        top += 1

        for i in range(top, bottom + 1):
            matrix[i][right] = num
            num += 1
        right -= 1

        if top <= bottom:
            for i in range(right, left - 1, -1):
                matrix[bottom][i] = num
                num += 1
            bottom -= 1

        if left <= right:
            for i in range(bottom, top - 1, -1):
                matrix[i][left] = num
                num += 1
            left += 1

    return matrix

def print_matrix(matrix):
    for row in matrix:
        print(" ".join(map(str, row)))

# Пример использования для n = 5
n = int(input())
spiral_matrix = generate_spiral_matrix(n)
print_matrix(spiral_matrix)
