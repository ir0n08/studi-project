class DataWrapper:
    def __init__(self, field_name, p1x, p1y, p2x, p2y):
        self.field_name = field_name
        self.p1x = p1x
        self.p1y = p1y
        self.p2x = p2x
        self.p2y = p2y

    def get_p1x(self):
        return (str(self.p1x))


    def get_p1y(self):
        return (str(self.p1y))


    def get_p2x(self):
        return (str(self.p2x))


    def get_p2y(self):
        return (str(self.p2y))
