from django.db import models


class Company(models.Model):
    id = models.AutoField(primary_key=True)
    logoPicture = models.CharField(max_length=1000)
    about = models.CharField(max_length=1000)
    slogan = models.CharField(max_length=200)
    website = models.CharField(max_length=100)
    email = models.CharField(max_length=30)
    addressCity = models.CharField(max_length=30)
    addressStreet = models.CharField(max_length=30)
    addressHouseNr = models.CharField(max_length=30)
    facts = models.CharField(max_length=500)
    verified = models.BooleanField()
    latitude = models.IntegerField()
    longitude = models.IntegerField()
    notifications = models.IntegerField()


# The person i retrieved for search queries requiring performance.
class Person(models.Model):
    id = models.AutoField(primary_key=True)
    about = models.CharField(max_length=100)
    notifications = models.IntegerField()


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)


class Skill(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    categories = models.ManyToManyField(Category)


# The vacancy is retrieved when search queries are executed
class Vacancy(models.Model):
    id = models.AutoField(primary_key=True)
    company = models.ForeignKey(Company)
    startDate = models.DateField()
    endDate = models.DateField()
    jobTitle = models.CharField(max_length=50)
    hoursOfWork = models.CharField(max_length=100)
    skills = models.ManyToManyField(Skill)
    rules = models.CharField(max_length=50)
    valid = models.BooleanField()


