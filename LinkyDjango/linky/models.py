from django.db import models

# Create your models here.
# 분석모델_링키
class Linky(models.Model):
    use_in_migration = True
    linky_id = models.AutoField(primary_key=True)
    colour = models.TextField() # 색상
    size = models.TextField() # 크기
    level = models.TextField() # 레벨
    character = models.TextField() # 성격

    class Meta:
        db_table = "linkys"
    def __str__(self):
        return f'{self.pk} {self.colour} {self.size} ' \
               f'{self.level} {self.character}'