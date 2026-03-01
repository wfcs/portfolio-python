from django.db import models

class Experience(models.Model):
    company = models.CharField(max_length=150)
    position = models.CharField(max_length=150)
    location = models.CharField(max_length=150, blank=True)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    description = models.TextField()

    class Meta:
        ordering = ['-start_date']

    def __str__(self):
        return f"{self.position} at {self.company}"

class Education(models.Model):
    institution = models.CharField(max_length=150)
    degree = models.CharField(max_length=150)
    field_of_study = models.CharField(max_length=150, blank=True)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)

    class Meta:
        ordering = ['-start_date']

    def __str__(self):
        return f"{self.degree} via {self.institution}"

class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100, help_text="e.g., Data Modeling, BI, Python")
    proficiency = models.IntegerField(default=5, help_text="Rating from 1 to 5")

    class Meta:
        ordering = ['category', 'name']

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    technologies = models.ManyToManyField(Skill, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title
