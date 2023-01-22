from rest_framework import viewsets
from api.models import User
from api.serializers import UserSerializer

# Create your views here.

class UserViewsets(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('created_at')
    serializer_class = UserSerializer
    
