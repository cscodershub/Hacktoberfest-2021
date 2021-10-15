import random


#Euclid's Algo for greatest common divisor
#used to make ot faster for larger intgers
def gcd(a,b):
    while b!=0:
        a,b = b,a%b
    return a

#Euclid's extended algo for multiplicative inverse
#calcultion

def m_inv(e,phi):
    d=0
    x1=0
    x2=1
    y1=1
    temp_phi=phi

    while e>0:
        temp1=temp_phi//e
        temp2=temp_phi - temp1*e
        temp_phi = e
        e= temp2

        x=x2 - temp1*x1
        y=d - temp1*y1

        x2=x1
        x1=x
        d=y1
        y1=y

    if temp_phi == 1:
        return d+phi


#prime test
def is_prime(num):
    if num==2:
        return True
    if num<2 or num%2==0:
        return False
    for n in range(3,int(num**0.5)+2,2):
        if num %n ==0:
            return False
    return True

def gen_keypair(p,q):
    if not(is_prime(p) and is_prime(q)):
        raise ValueError('Enter both number as prime.')
    elif p==q:
        raise ValueError('Both prime numbers cannot be equal')

    n=p*q
    #phi is totient of num
    phi = (p-1)*(q-1)
    #Choose e st e and phi(n) are coprime
    e=random.randrange(1,phi)
    # to ensure e anf phi(n) are coprime
    g=gcd(e,phi)
    while g!=1:
        e=random.randrange(1,phi)
        g=gcd(e,phi)

    #To genertae private key
    d=m_inv(e,phi)

    #public key -> (e,n)
    #private key -> (d,n)
    return ((e,n),(d,n))

def encrypt(pk,txt):
    #unpack key in it's component
    key,n=pk
    #convert each letter in plaintext to num based on
    #characters using a^b  mod m
    cipher = [pow(ord(char),key,n) for char in txt]
    #cipher is array of bytes
    return cipher


def decrypt(pk, ciphertxt):
    # unpack key in it's component
    key, n = pk
    #geenrater plaintext based on ciphertext and key
    #using a^b mod m
    aux=[str(pow(char,key,n)) for char in ciphertxt]
    plain=[chr(int(char2)) for char2 in aux]
    return ''.join(plain)

if __name__=='__main__':
    print ("--->RSA ENCRYPTION/DECRYPTION<---")
    p=int(input("Enter prime number 1 : "))
    q=int(input("Enter prime number 2 : "))
    print ("Generating Public/Private keypairs...")
    public,private=gen_keypair(p,q)
    print ("Public key : ",public," and private key : ",private)
    msg=input("Enter mwssage to be encrypted : ")
    enc_msg=encrypt(private,msg)
    print ("Encrypted message : ")
    print (''.join(map(lambda x: str(x), enc_msg)))
    print ("Decrypting msf with public key", public, "...")
    print ("YOur message : ")
    print (decrypt(public, enc_msg))


