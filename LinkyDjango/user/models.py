from django.db import models

# Create your models here.
# 사용자
class User(models.Model):
    use_in_migration = True
    user_id = models.AutoField(primary_key=True)
    password = models.TextField()
    age = models.TextField()
    email = models.TextField()

    class Meta:
        db_table = "users"
    def __str__(self):
        return f'{self.pk} {self.password} {self.age} {self.email}'