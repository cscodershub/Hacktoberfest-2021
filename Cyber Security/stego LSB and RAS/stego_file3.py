#numpy is numerical python an excent way to deal with array and large amout of data
from statistics import mode

from PIL import Image
import numpy as np

#code to convert the source image into NumPy array of pixels
#and store the size
def encode_img(src,msg,dest):
    img= Image.open(src, 'r')
    width,height=img.size
    array=np.array(list(img.getdata()))

    if img.mode == 'RGB':
        n=3
    elif img.mode =='RGBA':
        n=4
    total_pix=array.size//n

    #delimiter adding and then
    #tconverting updated message to binary form and calculate
    #required pixels

    msg += "$t3g0"
    b_msg=''.join([format(ord(i),"08b") for i in msg])
    req_pix=len(b_msg)

    #check total pixel sufficient for secret message
    #if yes, modify pixels' lsb to bits of secret message
    #untill complete message with delimiter got hide

    if req_pix>total_pix:
        print("Error : Need larger file size")
    else:
        ind=0
        for p in range(total_pix):
            for q in range(0,3):
                if ind<req_pix:
                    array[p][q] = int(bin(array[p][q]) [2:9] + b_msg[ind], 2)
                    ind+=1

    #update pixel array and usr this to create and save it in destination provided

    array=array.reshape(height, width, n)
    enc_img=Image.fromarray(array.astype('uint8'), img.mode)
    enc_img.save(dest)
    print("Image Encoded Successfully")


def decode_img(src):
    # saving pixels of source image as array
    # figure out mode
    # calculating total pixels

    img=Image.open(src, 'r')
    array = np.array(list(img.getdata()))

    if img.mode == 'RGB':
        n=3
    elif img.mode == 'RGBA':
        n=4
    total_pix = array.size//n

    #extract lsb from each pix from top-left and store in group  of 8
    #convert these grpups into ASCII cahracters to find hidden message
    #utill we read delimiter

    hidden_bits = ""
    for p in range (total_pix):
        for q in range(0,3):
            hidden_bits += (bin(array[p][q])[2:][-1])

    hidden_bits = [hidden_bits[i:i+8] for i in range(0,len(hidden_bits),8)]
    msg=""
    for i in range(len(hidden_bits)):
        if msg[-5:] == "$t3g0":
            break
        else:
            msg += chr(int(hidden_bits[i],2))

    #check if delimiter found. If not -> no hidden message
    if "$t3g0" in msg:
        print("Hidden Message: ",msg[:-5])
    else:
        print("No Hidden Message Found")


def stego():
    print("---> Welcome to stego <---")
    print("1: Encode")
    print("2: Decode")

    func=input()

    if func=='1':
        print("Enter Source Image Path")
        src =input()
        print("Enter Message to Hide")
        msg=input()
        print("Enter Destination Image Path")
        dest=input()
        print("Encoding...")
        encode_img(src,msg,dest)

    elif func=='2':
        print("Enter Source Image Path")
        src = input()
        print("Decoding..")
        decode_img(src)
    else:
        print("Error : Invalid Option Chosen")

stego()


