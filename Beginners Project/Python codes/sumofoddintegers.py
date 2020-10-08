#codeforces
a=int(input())
h=[]
for i in range(0,a):
    n,k=list(map(int,input().split()))
    res=0
    if k**2<=n and (k+n)%2==0:
        res="YES"
    else:
        res="NO"
    h.append(res)
print(*h,sep='\n')
