from django.db import models

class Mbti(models.Model):
    use_in_migration = True
    mbti_id = models.AutoField(primary_key=True)
    keyword = models.TextField() # 키워드
    question = models.TextField()  # 질문

    class Meta:
        db_table = "mbtis"
    def __str__(self):
        return f'{self.pk} {self.keyword} {self.question}'
    #git 테스트용 주석
