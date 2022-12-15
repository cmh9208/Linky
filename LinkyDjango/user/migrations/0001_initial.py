# Generated by Django 4.1.4 on 2022-12-15 03:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="User",
            fields=[
                ("user_id", models.AutoField(primary_key=True, serialize=False)),
                ("password", models.TextField()),
                ("age", models.TextField()),
                ("email", models.TextField()),
            ],
            options={
                "db_table": "users",
            },
        ),
    ]
