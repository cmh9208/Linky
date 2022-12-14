from django.db import models

# Create your models here.
# 성향 진단 질문지
class Mbti(models.Model):
    use_in_migration = True
    guestionnaire_id = models.AutoField(primary_key=True)
    keyword = models.TextField() # 키워드
    question = models.TextField()  # 질문

    class Meta:
        db_table = "mbtis"
    def __str__(self):
        return f'{self.pk} {self.keyword} {self.question}'