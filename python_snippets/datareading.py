import json
from collections import namedtuple
import CoordWrapper
from xlwt import Workbook

def customDecoder(attributes):
    return namedtuple('X', attributes.keys())(*attributes.values())

with open('data.json') as data_input:
    data = json.load(data_input, object_hook=customDecoder)

coord_list = []
for d in data:
    coord_list.append(CoordWrapper.DataWrapper(d.field_name, d.point1_coordinate_x, d.point1_coordinate_y, d.point2_coordinate_x, d.point2_coordinate_y))

