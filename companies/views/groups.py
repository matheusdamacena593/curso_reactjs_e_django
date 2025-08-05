from .base import Base
from companies.utils.exceptions import RequiredFields
from companies.utils.permissions import GroupsPermission
from companies.serializers import GroupsSerializer

from accounts.models import Group, Group_Permissions

from rest_framework.response import Response
from rest_framework.exceptions import APIException

from django.contrib.auth.models import Permission

class Groups(Base):
    permission_classes = [GroupsPermission]
    
    def get(self, request):
        enterprise_id = self.get_enterprise_id(request.user.id)
        groups = Group.objects.filter(enterprise_id=enterprise_id).all()
        
        serializer = GroupsSerializer(groups, many=True)
        
        return Response({"groups": serializer.data})
    
    def post(self, request):
        enterprise_id = self.get_enterprise_id(request.user.id)
        
        name = request.data.get('name')
        permissions = request.data.get('permissions')
        
        if not name:
            raise RequiredFields
        
        created_group = Group.objects.create(
            name=name,
            enterprise_id=enterprise_id
        )
        
        if permissions:
            permissions = permissions.split(',')
            
            for item in permissions:
                permission = Permission.objects.filter(id=item).exists()
                
                if not permission:
                    created_group.delete()
                    raise APIException("A permissão {p} não existe".format(p=item))
                
                # if not Group_Permissions.objects.filter(group_id=created_group.id, permission_id=item).exists()
                    Group_Permissions
                
        