from cryptography.fernet import Fernet

def encrypt_text(mesg_):
    key= Fernet.generate_key()
    fer=Fernet(key)
    enc_msg=fer.encrypt(mesg_.encode())
    store_in_file(enc_msg,key)
    return enc_msg,key
def input_msg():
    mesg=input("please enter data you want to encrypt=")
    return mesg

def store_in_file(enc_msg,key):
    with open("key","w") as f:
        f.write("encrypted message="+str(enc_msg)+'\n')
        f.write("key="+str(key))

print(encrypt_text(input_msg()))
def decrypter(enc_msg,key):
    pass
