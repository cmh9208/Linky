# from django.db import models
#
# from linky.models import Linky
# from mbti.models import Mbti
# from users.models import User
#
# # 진단
# class Diagnosis(models.Model):
#     use_in_migration = True
#     diagnosis_id = models.AutoField(primary_key=True)
#     joy = models.TextField() # 기쁨
#     sadness = models.TextField() # 슬픔
#     anger = models.TextField() # 분노
#     panic = models.TextField() # 당황
#     anxiety = models.IntegerField() # 불안
#     wound = models.IntegerField() # 상처
#     presonality = models.IntegerField()  # 성향
#     diagnosis_history = models.IntegerField()  # 진단기록
#
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     linky = models.ForeignKey(Linky, on_delete=models.CASCADE)
#     guestionnaire = models.ForeignKey(Mbti, on_delete=models.CASCADE)
#
#     class Meta:
#         db_table = "diagnosis"
#     def __str__(self):
#         return f'{self.pk} {self.joy} {self.sadness} {self.anger}' \
#                f'{self.panic} {self.anxiety} {self.wound} ' \
#                f'{self.presonality} {self.diagnosis_history}'