def add(a,b):
    return a+b

def subtract(a,b):
    return a-b

def multiply(a,b):
    return a*b

def divide(a,b):
    return a/b

n="N"
while n.upper()=="Y" :
    print("......Welcome to Calculator program........")
    x = input("""
    Press the corresponding numbers
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division """)
    print("Enter the two numbers to do the operation: \n")
    a= input()
    b= input()
    if(a==1):
        add(a,b)
    elif(a==2):
        subtract(a,b)
    elif(a==3):
        multiply(a,b)
    elif(a==4):
        divide(a,b)
    else:
        print(" enter a valid number")
    print("Do you want to continue? Y or N \n ")
    n= input()