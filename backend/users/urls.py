
from django.urls import path
from .views import RegisterView
from .views import *

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/register/', RegisterView.as_view(), name="sign_up"),
    path('api/register/admin', post_admin, name="sign_up_admin"),
    path('api/register/<int:id>/', RegisterView.as_view(), name='user-delete'),
    path('api/user-role/', user_role, name='user_role'),
  
]