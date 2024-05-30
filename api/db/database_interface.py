""" Data base interface """


class DataBaseInterface:

    def get_one(self, **filters):
        pass

    def get_many(self, index_init, total):
        pass

    def get_many_filters(self, filters):
        # index_init, total,
        pass
