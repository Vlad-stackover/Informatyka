def bubble(unsortedList):
    n = len(unsortedList) - 1
    sorted = False

    while not sorted:
        sorted = True
        for i in range(0, n):
            if unsortedList[i] > unsortedList[i + 1]:
                sorted = False
                unsortedList[i], unsortedList[i + 1] = unsortedList[i + 1], unsortedList[i]

    return unsortedList

print(bubble([3, 2, 1, 5,6,4,66]))
