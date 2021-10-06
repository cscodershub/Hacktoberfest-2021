def add(a,b):   #function to add 2 numbers 
    return a+b

def subtract(a,b):  #function to subtract 2 numbers 
    return a-b

def multiply(a,b):  #function to multiply 2 numbers 
    return a*b

def divide(a,b):    #function to divide 2 numbers 
    return a/b

n="Y"
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
    if(x==1):
        add(a,b)
    elif(x==2):
        subtract(a,b)
    elif(x==3):
        multiply(a,b)
    elif(x==4):
        divide(a,b)
    else:
        print(" enter a valid number")
    print("Do you want to continue? Y or N \n ")
    n= input()
