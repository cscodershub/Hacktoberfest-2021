import pyqrcode
import png
from pyqrcode import QRCode

url = "www.igoraza.ml"

s = pyqrcode.create(url)
s.svg("igorza.svg",scale=8)
s.png("igoraza.png",scale=8)


