import random
import string
import Function

length = int(input("How many characters password do you want ?"))
characters = string.ascii_letters + string.punctuation + string.digits
password = ""

for i in range(0, length):
    password += random.choice(characters)

#print(Function.string_converter(password))

print(password)
