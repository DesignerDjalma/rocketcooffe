
import qrcode

def criarQRcode(nome):
    website_link = """Object-oriented programming From Wikipedia, the free encyclopedia
Jump to navigationJump to search "Object-oriented" redirects here. For other meanings of object-oriented, see Object-orientation."Object-oriented programming language" redirects here. For a list of object-oriented programming languages, see List of object-oriented programming languages. Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code. The data is in the form of fields (often known as attributes or properties), and the code is in the form of procedures (often known as methods).Object-oriented programming From Wikipedia, the free encyclopedia
Jump to navigationJump to search "Object-oriented" redirects here. For other meanings of object-oriented, see Object-orientation."Object-oriented programming language" redirects here. For a list of object-oriented programming languages, see List of object-oriented programming languages. Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code. The data is in the form of fields (often known as attributes or properties), and the code is in the form of procedures (often known as methods).Object-oriented programming From Wikipedia, the free encyclopedia
Jump to navigationJump to search "Object-oriented" redirects here. For other meanings of object-oriented, see Object-orientation."Object-oriented programming language" redirects here. For a list of object-oriented programming languages, see List of object-oriented programming languages. Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code. The data is in the form of fields (often known as attributes or properties), and the code is in the form of procedures (often known as methods).Object-oriented programming From Wikipedia, the free encyclopedia
Jump to navigationJump to search "Object-oriented" redirects here. For other meanings of object-oriented, see Object-orientation."Object-oriented programming language" redirects here. For a list of object-orient"""
    
    qr = qrcode.QRCode(version = 1, box_size = 5, border = 5)
    qr.add_data(website_link)
    qr.make()
    img = qr.make_image(fill_color = 'black', back_color = 'white')
    img.save(f'{nome}.png')

# fim