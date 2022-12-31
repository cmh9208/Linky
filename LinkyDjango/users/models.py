from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser

class User(models.Model):
    # These fields tie to the roles!
    ADMIN = 1
    MANAGER = 2
    EMPLOYEE = 3

    ROLE_CHOICES = (
        (ADMIN, 'Admin'),
        (MANAGER, 'Manager'),
        (EMPLOYEE, 'Employee')
    )

    use_in_migrations = True
    user_email = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    nickname = models.CharField(max_length=20)
    token = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.pk}, {self.user_email}, {self.password}, ' \
               f'{self.nickname}, {self.token}'
    class Meta:
        db_table = "users"
        verbose_name = 'users'
        verbose_name_plural = 'users'