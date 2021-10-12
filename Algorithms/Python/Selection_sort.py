# Take comma separated input from User
print("Enter the values to sort (comma-separated):")
A = list(map(int, input().split(",")))
#s
for i in range(len(A)):    
    min_idx= i
    for j in range(i+1, len(A)):
        if A[min_idx] > A[j]:
            min_idx = j
     
    A[i], A[min_idx] = A[min_idx], A[i]
 
# Driver code 
print ("Sorted array:")
print(*A, sep=", ")
