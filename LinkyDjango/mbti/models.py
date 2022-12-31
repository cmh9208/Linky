# from django.db import models
#
#
# # 성향 진단 질문지
# class Mbti(models.Model):
#     use_in_migration = True
#     guestionnaire_id = models.AutoField(primary_key=True)
#     keyword = models.CharField(max_length=50) # 키워드
#     question = models.CharField(max_length=50)  # 질문
#
#     class Meta:
#         db_table = "mbti"
#     def __str__(self):
#         return f'{self.pk} {self.keyword} {self.question}'