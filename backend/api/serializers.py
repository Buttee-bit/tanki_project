from rest_framework import serializers
from api.models import User


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id','name','email','password','status','created_at')